import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Guide = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>BlendLib | Help</title>
        <meta
          name="description"
          content="Contact of BlendLib minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Help
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <h1 style={{textAlign:"center", marginBottom:"10px"}}>Blender Guide</h1>
            <iframe
              title="blend guide"
              width="100%"
              height="550px"
              style={{border:"2px solid #587175"}}
              src="https://docs.google.com/document/d/e/2PACX-1vR7BS0TKROKQ8kXUoKTDGh3r_qVuMX1a9DhD740dZxWGkPEqZ8YyI00UGt4iUzz5WLWmFhzHyyk2mNA/pub?embedded=true">
            </iframe>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Guide.propTypes = {
  location: PropTypes.object
};

export default Guide;
