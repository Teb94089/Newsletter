import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../../assets/Mochalogo.png";
import ScrollReveal from "scrollreveal";
import ScrollServices from "../../../Utilities/ScrollServices/ScrollServices";
import "./Header.css";

const ResponsiveNavLink = ({ href, text, onClick }) => {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {text}
      </a>
    </li>
  );
};
export default function Header() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <div className="NavBar">
      <div className="Nav">
        <div className="brand">
          <h1>
            <span>N&H Technologies</span>
          </h1>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <ul className="links">
        <ResponsiveNavLink
          href="#home"
          text="Home"
          onClick={() => setNavbarState(false)}
        />
        <ResponsiveNavLink
          href="#features"
          text="Features"
          onClick={() => setNavbarState(false)}
        />
        <ResponsiveNavLink
          href="#pricing"
          text="Pricing"
          onClick={() => setNavbarState(false)}
        />
        <ResponsiveNavLink
          href="#sign"
          text="Sign In"
          onClick={() => setNavbarState(false)}
        />
        <ResponsiveNavLink
          href="#get"
          text="Get Started"
          onClick={() => setNavbarState(false)}
        />
        <ResponsiveNavLink
          href="#contact"
          text="Contact Us"
          onClick={() => setNavbarState(false)}
        />
      </ul>
    </div>
  );
}
