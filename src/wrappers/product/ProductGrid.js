import React, { Fragment, useState, useEffect } from "react";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const ProductGrid = ({
  limit,
  spaceBottomClass
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const init = async () => {
        let platinum = 'off';

        const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true });
        
        if(user.data.status === 'success') {
            let user_data = user.data.data[0][0];
            if (user_data.membership === 'platinum') {
                platinum = 'on';
            }
        }

        const res = await axios.post(Backend.URL + '/get_products', {platinum: platinum});
        setProducts(res.data[0].slice(0, limit));
      }
      init(); 
  }, [limit]);
  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridSingle
            spaceBottomClass={spaceBottomClass}
            product={product}
            addToWishlist={()=>{}}
            wishlistItem={0}
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

export default ProductGrid;
