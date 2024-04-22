import React from "react";
//import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp/IndecisionApp'
import Gaia from './components/GAIA/Gaia'
import Navbar from "./components/NavBar/Navbar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./components/"

import {
    BrowserRouter,
    Routes,
    Route,
    Switch
} from "react-router-dom";

 
const Main = () => {
    return (
        <BrowserRouter> 
        <div>
            <SideNavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/IndecisionApp" element={<IndecisionApp />} />
                <Route path="/GAIA" element={<Gaia />} />
            </Routes>
        </div>
    </BrowserRouter>
    )

}

export default Main;