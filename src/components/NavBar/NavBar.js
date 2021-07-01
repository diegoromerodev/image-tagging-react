import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuNav = styled.nav`
  width: 100%;
  background: #333;
  padding: 20px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  justify-content: space-evenly;
  a {
    color: #fafafa;
  }
`;

const NavBar = () => {
  return (
    <MenuNav id="nav-menu">
      <NavLink to="/" exact activeStyle={{ fontWeight: "bold" }}>
        Home
      </NavLink>
      <NavLink to="/leaderboard" activeStyle={{ fontWeight: "bold" }}>
        Leaderboard
      </NavLink>
    </MenuNav>
  );
};

export default NavBar;
