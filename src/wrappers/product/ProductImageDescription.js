import React from "react";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  product,
  membership
  // wishlistItems
}) => {
  // const wishlistItem = wishlistItems.filter(
  //   wishlistItem => wishlistItem.id === product.id
  // )[0];

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            <ProductImageGallerySideThumb product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              membership={membership}
              // wishlistItem={wishlistItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageDescription;
