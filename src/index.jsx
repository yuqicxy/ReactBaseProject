import * as React from "react";
import ReactDOM from 'react-dom';
import App from './app';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from './theme'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import Root, {loader as RootLoader, action as rootAction} from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader:RootLoader,
        action:rootAction,
        children:[
            {
                path: "contacts/:contactId",
                element: <Contact></Contact>
            }
        ]
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router} />
            {/* <App></App> */}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
