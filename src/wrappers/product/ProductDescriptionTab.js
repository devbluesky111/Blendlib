import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Badge } from "react-bootstrap";

const ProductDescriptionTab = ({ spaceBottomClass, product }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Version
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Free Version</span> {product.free_v === 'on' ? <Badge variant="success" style={{color:'white'}}>Published</Badge> : <Badge variant="dark" style={{color:'white'}}>Unpublished</Badge>}
                    </li>
                    <li>
                      <span>Pro Version</span> {product.pro_v === 'on' ? <Badge variant="success" style={{color:'white'}}>Published</Badge> : <Badge variant="dark" style={{color:'white'}}>Unpublished</Badge>}
                    </li>
                    <li>
                      <span>Platinum Version</span> {product.local_v === 'on' ? <Badge variant="success" style={{color:'white'}}>Published</Badge> : <Badge variant="dark" style={{color:'white'}}>Unpublished</Badge>}
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {product.long_description}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
