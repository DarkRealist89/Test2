import ReactDOM from "react-dom";
import reportWebVitals from "src/reportWebVitals";
import "@fontsource/open-sans";
import "./index.css";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/app_theme";
import AppLayout from "./components/AppLayout/AppLayout";

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={AppTheme}>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </ThemeProvider>
    </StyledEngineProvider>,

    document.getElementById("root"),
);

reportWebVitals();
