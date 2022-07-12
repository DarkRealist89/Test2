import { Divider, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from "@mui/material";
import { FC, forwardRef, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import useStyles from "./styles";
import { observer } from "mobx-react";

export interface IMenuItem {
    title?: string;
    icon?: any;
    to?: string;
    id: string;
    isActive?: boolean;
}

export type MenuItemList = Array<IMenuItem | null>;

type Props = {
    data: MenuItemList;
};

const MainMenu: FC<Props> = observer((props) => {
    const { data } = props;

    const classes = useStyles();

    const MyNavLink = forwardRef<any, any>((props, ref) => (
        <NavLink
            ref={ref}
            to={props.to}
            className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ""}`}
        >
            {props.children}
        </NavLink>
    ));

    return (
        <List className={classes.list}>
            <ListItemButton key="logo" component={Link} to="/" className={classes.logo}>
                <img src="/logo.png" alt="Logo" />
            </ListItemButton>

            <Divider key="divider_logo" />

            {data.map((elem) => (
                <ListItemButton
                    key={elem?.id}
                    component={MyNavLink}
                    to={elem?.to || ""}
                    activeClassName={classes.selectedMenuItem}
                >
                    <ListItemIcon>
                        <SvgIcon component={elem?.icon} />
                    </ListItemIcon>
                    <ListItemText primary={elem?.title} />
                </ListItemButton>
            ))}
        </List>
    );
});

export default memo(MainMenu);
