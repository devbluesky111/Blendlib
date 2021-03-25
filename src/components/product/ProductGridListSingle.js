import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
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
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

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
              {product.featured_images ? (
                <img
                  className="hover-img"
                  src={Backend.URL + '/images/' + product.featured_images.split('|')[0]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
            
            {product.created && product.created.includes(today) ? (
              <div className="product-img-badges">
                <span className="purple">New</span>
              </div>
            ) : (
              ""
            )}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem ? "active" : ""}
                  // disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(product)}
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
