import React from "react";
import Backend from '../../@utils/BackendUrl';

const ProductDescriptionInfo = ({
  product
}) => {

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="pro-details-list">
        <p>{product.short_description}</p>
      </div>

      <div className="mt-5 mb-5">
        <a target='_blank' href={Backend.URL + '/blends/' + product.free_blend} className="btn btn-success"> Download &nbsp;&nbsp;<i className="fa fa-download"></i> </a>
      </div>

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//www.instagram.com">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="//www.telegram.com">
              <i className="fa fa-paper-plane" />
            </a>
          </li>
          <li>
            <a href="//www.whatsapp.com">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="mailto:info@yourdomain.com">
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescriptionInfo;
