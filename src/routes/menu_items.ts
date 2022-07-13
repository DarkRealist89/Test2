import { MenuItemList } from "src/components/MainMenu/MainMenu";
import { v4 } from "uuid";
import { PATH_ROLES, PATH_FComponent, PATH_LIST, PATH_WDB } from "./routes.consts";

export const menuItems: MenuItemList = [
    {
        id: v4(),
        to: PATH_ROLES,
        title: "Роли",
    },
    {
        id: v4(),
        to: PATH_FComponent,
        title: "Роли1",
    },
    {
        id: v4(),
        to: PATH_LIST,
        title: "Лист",
    },
    {
        id: v4(),
        to: PATH_WDB,
        title: "wdb",
    },
];
