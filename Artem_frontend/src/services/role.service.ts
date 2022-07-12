import { cApiRoleAdd, cApiRoleDelete, cApiRoleEdit, cApiRoleGet, cApiRoles } from "src/api_consts/role.api.consts";
import { RequestRoleAddDTO, RequestRoleEditDTO, ResponseRoleGetDTO, ResponseRolesDTO } from "../dto/role.dto";
import { ApiService } from "src/services/api.service";

export class RoleApiService {
    /** Получение списка ролей */
    static getItems() {
        return new ApiService<any, ResponseRolesDTO>({
            method: "POST",
            url: cApiRoles,
        });
    }

    /** Просмотр записи */
    static getItem() {
        return new ApiService<any, ResponseRoleGetDTO>({
            method: "GET",
            url: cApiRoleGet,
        });
    }

    /** Добавление */
    static add() {
        return new ApiService<RequestRoleAddDTO, any>({
            method: "POST",
            url: cApiRoleAdd,
        });
    }

    /** Изменение */
    static edit() {
        return new ApiService<RequestRoleEditDTO, any>({
            method: "POST",
            url: cApiRoleEdit,
        });
    }

    /** Удаление записи */
    static delete() {
        return new ApiService({
            method: "DELETE",
            url: cApiRoleDelete,
        });
    }
}
