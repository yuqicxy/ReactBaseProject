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
import {loader as contactLoader, action as contactAction} from "./routes/contact";
import EditContact,{EditAction as editAction} from "./routes/edit";
import {action as DeleteAction} from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader:RootLoader,
        action:rootAction,
        children:[
            {
                errorElement: <ErrorPage></ErrorPage>,
                children:[
                    {
                        index: true, 
                        element: <Index />
                    },
                    {
                        path: "contacts/:contactId",
                        element: <Contact></Contact>,
                        loader:contactLoader,
                        action:contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path:"contacts/:contactId/destroy",
                        action: DeleteAction,
                    }
                ],
            }
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
