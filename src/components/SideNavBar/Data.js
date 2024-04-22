import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
      },
    {
        title: "GAIA",
        path: "/GAIA",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },
    {
        title: "Indecision App",
        path: "/IndecisionApp",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
];