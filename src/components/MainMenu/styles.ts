import { Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
    selectedMenuItem: {
        backgroundColor: "#DDDDDD",
    },
    logo: {
        justifyContent: "center",
    },
    list: {
        padding: 0,
    },
    collapse: {
        margin: 0,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
