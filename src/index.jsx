import * as React from "react";
import ReactDOM from 'react-dom';
import App from './app';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import {CssBaseline} from "@mui/material";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);