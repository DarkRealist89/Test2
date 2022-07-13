import { makeAutoObservable } from "mobx";
import { RoleApiService } from "src/services/role.service";
import { NavigateFunction } from "react-router";
import { PATH_ROLES } from "src/routes/routes.consts";

export default class State {
    private history: NavigateFunction;

    apiItem = RoleApiService.getItem();
    apiAdd = RoleApiService.add();
    apiEdit = RoleApiService.edit();
    apiDelete = RoleApiService.delete();

    constructor(history: NavigateFunction) {
        this.history = history;
        makeAutoObservable(this);
    }

    fetchItem(id: string) {
        this.apiItem.setUrlParams({ id });
        this.apiItem.onResponse = (response) => {
            this.apiEdit.updateData({
                ...response,
            });
        };
        this.apiItem.fetch();
    }

    fetchAdd() {
        this.apiAdd.onResponse = () => {
            this.history(PATH_ROLES);
        };
        this.apiAdd.fetch();
    }

    fetchEdit(id: string) {
        this.apiEdit.setUrlParams({ id });
        this.apiEdit.onResponse = () => {
            this.history(PATH_ROLES);
        };
        this.apiEdit.fetch();
    }
}
