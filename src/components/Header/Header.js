import React from "react";
import { Nav, Wrapper } from "./styles";
import { BsGithub } from "react-icons/bs";
import Month from "../Month/Month";

const Header = () => {
  return (
      <Nav>
        <h1>MoneyMinder</h1>
        <a href="https://github.com/Gjhnsn" target="_blank">
          <BsGithub />
        </a>
      </Nav>
  );
};

export default Header;
