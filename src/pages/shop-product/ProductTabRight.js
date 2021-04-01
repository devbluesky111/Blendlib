import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const ProductTabRight = () => {
  const pathname = window.location.pathname;
  const [product, setProduct] = useState({});
  const [membership, setMembership] = useState('free');

  useEffect(() => {
      const init = async () => {
          let patharr = pathname.split('/');

          let platinum = 'off';

          const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
          
          if(user.data.status === 'success') {
              let user_data = user.data.data[0][0];
              setMembership(user_data.membership);
              if (user_data.membership === 'platinum') {
                  platinum = 'on';
              }
          }

          let res;
          
          if (patharr[2]) {
              res = await axios.post(Backend.URL + '/get_product_id', {id: patharr[2], platinum: platinum}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
              if(res.data[0].length > 0) {
                setProduct(res.data[0][0]);
              }
          }

      }
      init(); 
  }, [pathname]);

  return (
    <Fragment>
      <MetaTags>
        <title>Sumish | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Item
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
          galleryType="rightThumb"
          membership={membership}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          product={product}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default ProductTabRight;
