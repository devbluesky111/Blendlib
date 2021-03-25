import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGrid = ({
  products,
  sliderClassName,
  spaceBottomClass
}) => {
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


export default ProductGrid;
