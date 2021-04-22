import React, { Fragment, useState, useEffect } from "react";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGridTen = ({
  sliderClassName,
  spaceBottomClass,
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const init = async () => {
      let platinum = 'off';

      const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
      
      if(user.data.status === 'success') {
          let user_data = user.data.data[0][0];
          if (user_data.membership === 'platinum') {
              platinum = 'on';
          }
      }
      const res = await axios.post(Backend.URL + '/get_products_new', {platinum: platinum}, {withCredentials: true, headers: {"Access-Control-Allow_Origin": "*"} });
      setProducts(res.data.slice(0,3));
    }
    init();
  }, []);
  return (
    <Fragment>
      {products.map((product, _i) => {
        return (
          <ProductGridListSingle
          sliderClassName={sliderClassName}
          spaceBottomClass={spaceBottomClass}
          product={product}
          addToWishlist={()=>{}}
          wishlistItem={''}
          key={_i}
        />
        );
      })}
    </Fragment>
  );
};

export default ProductGridTen;
