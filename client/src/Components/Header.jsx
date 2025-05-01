import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { Apic } from "../store/GetApi";

const Header = () => {
  const [showNav, hideNav] = useState(false);
  const { isLoggedIn } = useContext(Apic);

  const handleNav = () => {
    hideNav(!showNav);
  };

  return (
    <>
      <header>
        <div className="head container">
          <Logo />

          <div className="navbar">
            <i className="fa-solid fa-bars" onClick={handleNav}></i>
            <nav>
              <ul className={`nav-list ${showNav ? "open" : "close"}`}>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={handleNav}>
                    home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" onClick={handleNav}>
                    about
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    onClick={handleNav}
                  >
                    services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/courses"
                    className="nav-link"
                    onClick={handleNav}
                  >
                    courses
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    onClick={handleNav}
                  >
                    contact
                  </NavLink>
                </li>

                {isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/signup"
                      className="nav-link"
                      onClick={handleNav}
                    >
                      sign up
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink
                      to="/logout"
                      className="nav-link"
                      onClick={handleNav}
                    >
                      logout
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
