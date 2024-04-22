// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/IndecisionApp" activeStyle>
						Indecision App
					</NavLink>
					<NavLink to="/GAIA" activeStyle>
						GAIA
					</NavLink>
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
