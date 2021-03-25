import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ProductModal from "./ProductModal";
import Backend from '../../@utils/BackendUrl';

const ProductGridListSingle = ({
  product,
  addToWishlist,
  wishlistItem,
  sliderClassName,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  return (
    <Fragment>
      <div
        className={`col-xl-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={Backend.URL + '/images/' + product.p_image}
                alt=""
              />
              {product.featured_images.length > 1 ? (
                <img
                  className="hover-img"
                  src={Backend.URL + '/images/' + product.featured_images.split('|')[0]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
            
            {/* {product.new ? (
              <div className="product-img-badges">
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )} */}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(product, addToast)}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                <a
                  href={process.env.PUBLIC_URL + "/product/" + product.id}
                  rel="noopener noreferrer"
                >
                  {" "}Download{" "}
                </a>
              </div>
              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        wishlistitem={wishlistItem}
        addtowishlist={addToWishlist}
      />
    </Fragment>
  );
};

export default ProductGridListSingle;
