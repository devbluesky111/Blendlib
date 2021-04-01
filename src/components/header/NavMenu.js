import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {

  const [menus, setMenus] = useState([]);
  const [subMenus, setSubMenus] = useState([]);
  
	const init = async () => {
		const res = await axios.post(Backend.URL + '/get_submenu_o', {data:0}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
		setSubMenus(res.data);
		const resp = await axios.post(Backend.URL + '/get_menu_o', {data: 0}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
		setMenus(resp.data);
	}

  useEffect(()=>{
    init();
  }, []);

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
            <div style={{width: '' + menus.length * 200 + 'px' }}>
              {menus.map((menu) => {
                return (
                  <li key={menu.id}>
                    <ul>
                      <li  className="mega-menu-title">
                        <Link to={process.env.PUBLIC_URL + "/collection/" + menu.id}>
                          {menu.name}
                        </Link>
                      </li>
                      {subMenus.filter(submenu => menu.id === submenu.m_id).map((sm) => {
                        return (
                          <li key={sm.id}>
                            <Link to={process.env.PUBLIC_URL + "/collection/" + menu.id + "/" + sm.id}>
                              {sm.name}
                            </Link>
                          </li>
                        )
                      } )}
                    </ul>
                  </li>
                );
              })}
              </div>
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
