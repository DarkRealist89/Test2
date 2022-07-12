import { Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
    root: {
        // flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    accountName: {
        fontSize: 14,
    },
    userIcon: {
        width: 40,
        height: 40,
        background: "#f6f42e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    langText: {
        verticalAlign: "middle",
        color: "white",
    },
    langButton: {
        marginLeft: 10,
        marginRight: 20,
        backgroundColor: "white",
        verticalAlign: "middle",
    },
}));
