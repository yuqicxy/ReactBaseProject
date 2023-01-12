import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout1 from "./layout/layout1";
import Page1 from "./pages/Page1";
import UnitOrganization from './pages/UnitOrganization';

import './app.css';

export default function App(){
    return <Layout1>
        {/* <Page1></Page1> */}
        <UnitOrganization />
    </Layout1>
    return <Routes>
            <Route path="/" element={<Layout1/>}>
                <Route path="page1" element={<Page1 />} />
                <Route index path="unitOrganization" element={<UnitOrganization />} />
            </Route>
    </Routes>
}