import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/collection"}>
              {" "}
              {strings["collection"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Cabinets
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Sofas
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Tables
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Chairs
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Beds
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/collection"}
                    >
                      ArmChairs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Decorative Plaster
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      3D Panel
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Bas-relief
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Curtain
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/collection"}
                    >
                      Mirror
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      Pictures
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>
              Membership
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>
              {strings["blog"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
