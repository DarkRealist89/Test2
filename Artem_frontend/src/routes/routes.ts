import { PATH_ROLE, PATH_ROLES, PATH_FComponent, PATH_ROLE_ADD } from "src/routes/routes.consts";
import { v4 } from "uuid";
import { FC } from "react";
import Roles from "src/components/Roles/Roles";
import FComponent from "src/components/FComoponent/FComponent";
import Role from "src/components/Role/Role";

export interface IRoute {
    to: string;
    id: string;
    component: FC;
}

export const routes: IRoute[] = [
    {
        id: v4(),
        to: PATH_ROLES,
        component: Roles,
    },
    {
        id: v4(),
        to: PATH_FComponent,
        component: FComponent,
    },
    {
        id: v4(),
        to: PATH_ROLE,
        component: Role,
    },
    {
        id: v4(),
        to: PATH_ROLE_ADD,
        component: Role,
    },
];
