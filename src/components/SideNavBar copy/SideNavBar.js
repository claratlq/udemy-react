import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./Data";
import "./SideNavBar.css";
import { IconContext } from "react-icons";

function Navbar() {

  return (
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="#">
              <FaIcons.FaBars />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path} className={ ({isActive}) => isActive ? 'nav-link active' : 'nav-link' }>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
  );
}

export default Navbar;