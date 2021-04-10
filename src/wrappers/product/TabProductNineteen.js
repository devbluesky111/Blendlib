import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTen from "./ProductGridTen";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const TabProductNineteen = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleSeven
          titleText="Newly Added"
          positionClass="text-center"
          borderClass="bottom-border"
          spaceClass="mb-30"
        />
        <Tab.Container defaultActiveKey="newArrival">
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGridTen
                  category={category}
                  type="new"
                  limit={3}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductNineteen.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductNineteen;
