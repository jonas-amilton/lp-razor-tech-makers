import React from "react";
import logorazor from "./img/logorazorb.png";
import "./header.css";

function header() {
  return (
    <>
      <header className="header-razor">
        <img className="img-logorazor" src={logorazor} alt="logo razor" />
        <nav>
          <ul className="list-nav">
            <li className="navbar-call">
              <a href="https://razor.com.br" target="_blank"
                className="link-navbar"
                rel="noreferrer">contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default header;
