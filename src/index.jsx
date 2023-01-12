import * as React from "react";
import ReactDOM from 'react-dom';
import App from './app';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import {CssBaseline} from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);