import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSumish from "../wrappers/header/HeaderSumish";
import FooterSumish from "../wrappers/footer/FooterSumish";

const LayoutSumish = ({ children }) => {
  return (
    <Fragment>
      <HeaderSumish layout="container-fluid" />
      {children}
      <FooterSumish spaceTopClass="pt-100" spaceBottomClass="pb-70" />
    </Fragment>
  );
};

export default LayoutSumish;

LayoutSumish.propTypes = {
  children: PropTypes.any
};
