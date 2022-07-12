import { createTheme } from "@mui/material/styles";
import { ruRU as coreRU } from "@mui/material/locale";
import { indigo, red } from "@mui/material/colors";

export const AppTheme = createTheme(
    {
        palette: {
            primary: {
                main: indigo[500],
            },
            secondary: {
                main: red[500],
            },
        },
        typography: {
            fontFamily: "Open Sans",
        },
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: "0.875rem",
                    },
                },
            },
        },
    },
    coreRU,
);
