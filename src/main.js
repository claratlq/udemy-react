import React from "react";
//import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp/IndecisionApp'
import Gaia from './components/GAIA/Gaia'
import Navbar from "./components/NavBar/Navbar";
import SideNavBar from "./components/SideNavBar copy/SideNavBar";
//import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./components/Home"
import Header from "./components/Header/Header"
import "./styles/styles.css"

import {
    BrowserRouter,
    Routes,
    Route,
    Switch
} from "react-router-dom";

 
const Main = () => {
    return (
    <BrowserRouter>
        <div className="layout">
            <Header />
            <div className='container'>
                <SideNavBar />
                <div className='main-container'>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/IndecisionApp" element={<IndecisionApp />} />
                        <Route path="/GAIA" element={<Gaia />} />
                    </Routes>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}

export default Main;