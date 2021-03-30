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
        const res = await axios.post(Backend.URL + '/get_products');
        setProducts(res.data);
      }
      init(); 
  }, []);
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
