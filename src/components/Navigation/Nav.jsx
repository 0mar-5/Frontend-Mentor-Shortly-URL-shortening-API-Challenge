import "./Nav.css";
import logo from "../../images/logo.svg";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useState } from "react";
function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="container">
      <div className={`${toggleMenu ? "nav-open" : ""} header`}>
        <a href="#" className="logo">
          <img className="logo" alt="logo" src={logo} />
        </a>
        <nav className="main-nav">
          <NavLinks />
          <ul className="main-nav-list">
            <div className="nav-link-right">
              <li>
                <a className="main-nav-link" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="link-sign-up" href="#">
                  Sign Up
                </a>
              </li>
            </div>
          </ul>
        </nav>
        <MobileNav handleToggle={handleToggle} />
      </div>
    </header>
  );
}

export default Nav;
