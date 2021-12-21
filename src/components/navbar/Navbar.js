import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<CLARUSWAY>"}</i>
        <span>RECIPE</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">ABOUT</MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/orgs/clarusway/dashboard" }}
        >
          GITHUB
        </MenuLink>
        <MenuLink to="/login">LOGOUT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
