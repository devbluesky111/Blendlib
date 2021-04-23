import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import Backend from '../../@utils/BackendUrl';
import swal from "sweetalert";
import axios from 'axios';

const ProductGridListSingle = ({
  product,
  addToWishlist,
  wishlistItem,
  sliderClassName,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [membership, setMembership] = useState('no');

  useEffect(() => {
    const init = async () => {

        const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
        
        if(user.data.status === 'success') {
            let user_data = user.data.data[0][0];
            setMembership(user_data.membership);
        }
    }
    init(); 
  }, []);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  const download_free_one = async () => {
    if(membership === "platinum"){
      if(product.local_blend.split("|")[0]) {
        window.open(
          Backend.URL + '/blends/' + product.local_blend.split("|")[0],
          '_blank'
        );
      } else {
        if(product.free_blend.split("|")[0]) {
          window.open(
            Backend.URL + '/blends/' + product.free_blend.split("|")[0],
            '_blank'
          );
        } else {
          swal("No any available free blends");
        }
      }
    } else {
      if(product.free_blend.split("|")[0]) {
        window.open(
          Backend.URL + '/blends/' + product.free_blend.split("|")[0],
          '_blank'
        );
      } else {
        swal("No any available free blends");
      }
    }
  }

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
            
            <div className="product-img-badges">          
              {product.created && product.created.includes(today) ? (
                  <span className="gray">New</span>
              ) : (
                ""
              )}
              {product.platinum === 'on' ? (
                  <span style={{backgroundColor:'#252521'}}>Platinum</span>
              ) : (
                ""
              )}
            </div>

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
                <button
                  className={wishlistItem ? "active" : ""}
                  onClick={download_free_one}
                >
                  <i className="fa fa-download" />
                </button>
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
