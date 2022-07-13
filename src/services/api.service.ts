import axios, { AxiosError, Method, ResponseType } from "axios";
import { makeAutoObservable } from "mobx";
import { devServerUrl, isDev } from "src/core/dev";

export interface IApiServiceNormalizedError {
    code: string;
    error: string;
    message: string[];
}

export interface IApiServiceConfig<TReq> {
    method: Method;
    url: string;
    urlParams?: { [key: string]: string | number };
    data?: TReq;
    responseType?: ResponseType;
}

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export class ApiService<TReq = any, TRes = any> implements IApiServiceConfig<TReq> {
    method: Method;
    url: string;
    urlParams?: { [key: string]: string | number };
    data?: TReq;
    responseType?: ResponseType;

    urlWithParams = "";

    loading = false;
    response: TRes | undefined = undefined;
    error: AxiosError | undefined = undefined;

    onResponse?: (response: TRes) => void;
    onError?: (error: IApiServiceNormalizedError) => void;

    constructor(config: IApiServiceConfig<TReq>, obser: boolean = true) {
        if (obser) {
            makeAutoObservable(this);
        }

        this.method = config.method;
        this.url = config.url;
        this.urlParams = config.urlParams;
        this.data = config.data;
        this.responseType = config.responseType;

        this.setUrlParams(this.urlParams);
    }

    setUrl(url: string) {
        this.url = url;
        this.setUrlParams(this.urlParams);
    }

    setUrlParams(urlParams: any) {
        this.urlParams = urlParams;
        let newUrlWithParams = this.url;
        if (urlParams) {
            for (const key of Object.keys(urlParams))
                newUrlWithParams = newUrlWithParams.replace(`:${key}`, urlParams[key]);
        }
        this.urlWithParams = newUrlWithParams;
    }

    setData(data: TReq) {
        this.data = data;
    }

    updateData(data: DeepPartial<TReq>) {
        this.data = {
            ...this.data,
            ...data,
        } as any;
    }

    private setResponse(data: any) {
        this.error = undefined;
        this.response = data;
        this.loading = false;

        if (this.onResponse) {
            this.onResponse(data);
        }
    }

    private async setError(error: AxiosError) {
        this.response = undefined;
        this.error = error;
        this.loading = false;

        if (error.request.responseType === "blob" && (error as any).response.data) {
            try {
                (error as any).response.data = JSON.parse(await (error as any).response.data.text());
            } catch {
                console.log("Не удалось конверитровать blob в json в ошибке");
            }
        }

        const normalizedError = ApiService.getNormalizeError(error);
        if (this.onError) {
            this.onError(normalizedError);
        }
    }

    fetch() {
        this.loading = true;

        const headers: any = {};

        axios
            .request({
                method: this.method,
                url: isDev ? devServerUrl + this.urlWithParams : "/api" + this.urlWithParams,
                data: this.data,
                headers,
                responseType: this.responseType,
            })
            .then((response) => {
                this.setResponse(response.data);
            })
            .catch(async (error: AxiosError) => {
                await this.setError(error);
            });
    }

    reset() {
        this.response = undefined;
        this.error = undefined;
        this.loading = false;
    }

    static getNormalizeError(error: AxiosError<any, any>) {
        if (!error) return {} as IApiServiceNormalizedError;

        const code = error.response?.data?.statusCode || error.response?.status || error.code;
        const errorName = error.response?.data?.error || error.response?.statusText || "Http Error";
        let messageText: string = error.response?.data?.message || error.response?.data || error.message || "";
        if (typeof messageText === "string" && messageText.startsWith("<html>")) {
            messageText = "Ошибка";
        }
        const message: string[] = [];

        if (Array.isArray(messageText)) {
            message.push(...messageText);
        } else {
            message.push(messageText);
        }

        const result: IApiServiceNormalizedError = {
            code,
            error: errorName,
            message,
        };
        return result;
    }
}
