import React from "react";
import { Nav } from "./styles";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
      <Nav>
        <h1>MoneyMinder</h1>
        <a href="https://github.com/Gjhnsn" target="_blank" rel="noreferrer" aria-label="View GitHub profile">
          <BsGithub />
        </a>
      </Nav>
  );
};

export default Header;
