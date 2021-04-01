import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const IconGroup = ({
  iconWhiteClass
}) => {
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const [login, setLogin] = useState(false);

  useEffect(()=>{
    const init = async () => {
      const res = await axios.post(Backend.URL + '/check_login', {params: 'check_login'} , { withCredentials: true });
      if(res.data.status === 'success') {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }

    init();
  }, []);

  const logout = async () => {
    const res = await axios.post(Backend.URL + '/logout', {params: 'logout'} ,{ withCredentials: true });
    if(res.data.status === 'success') {
      window.location.href = process.env.PUBLIC_URL + "/login-register";
    }
  }

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-block d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          {login ?
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                My account
              </Link>
            </li>
            <li>
              <Link to="#" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
          :
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li>
          </ul>
          }
        </div>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  removeFromCart: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (item, addToast) => {
      dispatch(removeFromCart(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
