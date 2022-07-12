import { FC, memo } from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { observer } from "mobx-react";
import { Menu as MenuIcon } from "@mui/icons-material";

type Props = {
    menuToggle: () => void;
};

export const HeaderComponent: FC<Props> = observer((props) => {
    const { menuToggle } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={() => menuToggle()}
                    edge="start"
                    className={classes.menuButton}
                    size="large"
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title} noWrap>
                    Заголовок
                </Typography>
            </Toolbar>
        </div>
    );
});

export default memo(HeaderComponent);
