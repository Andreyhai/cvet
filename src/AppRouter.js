import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/home-page/Home.jsx";

import { 

  HOME_ROUTE,

} from "./utils/CONSTS.js";


const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
        </Routes>
    );
};

export default AppRouter;