import PropTypes from "prop-types";
import React from "react";
import { multilanguage, changeLanguage } from "redux-multilanguage";
import { connect } from "react-redux";

const MobileLangCurrChange = ({
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Language </span>
        <select
          value={currentLanguageCode}
          onChange={e => {
            changeLanguageTrigger(e);
            closeMobileMenu();
          }}
        >
          <option value="en">English</option>
          <option value="fn">French</option>
          <option value="de">Germany</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

MobileLangCurrChange.propTypes = {
  changeCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

export default connect(
  mapStateToProps
)(multilanguage(MobileLangCurrChange));
