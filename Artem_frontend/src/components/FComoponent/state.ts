import { makeAutoObservable } from "mobx";
import { RoleApiService } from "src/services/role.service";

export default class State {
    apiItems = RoleApiService.getItems();
    apiDelete = RoleApiService.delete();

    constructor() {
        makeAutoObservable(this);
    }

    fetchItems() {
        this.apiItems.fetch();
    }

    fetchDelete(id: string) {
        this.apiDelete.setUrlParams({ id });
        this.apiDelete.fetch();
    }
}
