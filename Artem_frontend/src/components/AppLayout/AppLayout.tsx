import { memo, FC, useState } from "react";
import { menuItems } from "src/routes/menu_items";
import { observer } from "mobx-react";
import AppRouterSwitch from "../AppRouterSwitch/AppRouterSwitch";
import useStyles from "./styles";
import MainMenu from "../MainMenu/MainMenu";
import { HeaderComponent } from "../Header/Header";
import { AppBar, CssBaseline, Drawer } from "@mui/material";

const AppLayout: FC = observer(() => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={[classes.appBar, open ? classes.appBarShift : ""].join(" ")}>
                    <HeaderComponent menuToggle={handleDrawerToggle} />
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <MainMenu data={menuItems} />
                </Drawer>
                <main className={[classes.content, open ? classes.contentShift : ""].join(" ")}>
                    <div className={classes.drawerHeader} />
                    <AppRouterSwitch />
                </main>
            </div>
        </>
    );
});

export default memo(AppLayout);
