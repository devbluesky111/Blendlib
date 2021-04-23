import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { Modal } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Backend from '../../@utils/BackendUrl';
import swal from 'sweetalert';
import axios from 'axios';

function ProductModal(props) {
  const { product } = props;
  const pathname = window.location.pathname;
  const [membership, setMembership] = useState('no');
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  // const wishlistItem = props.wishlistitem;
  // const addToWishlist = props.addtowishlist;

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  useEffect(() => {
    const init = async () => {

        const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
        
        if(user.data.status === 'success') {
            let user_data = user.data.data[0][0];
            setMembership(user_data.membership);
        }
    }
    init(); 
  }, [pathname]);

  const download = async (target, type) => {
    if (type === 'free') {
      if (membership === 'no') {
        swal({
          title: "Oops!",
          text: "Log In to BlendLib",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/login-register";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      } else {
        window.open(
          Backend.URL + '/blends/' + target,
          '_blank'
        );
      }
    } else if (type === 'pro') {
      if (membership === 'no') {
        swal({
          title: "Oops!",
          text: "Log In to BlendLib",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/login-register";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      } else {
        if (membership === 'free') {
          swal({
            title: "Oops!",
            text: "You have to upgrade your membership to pro to download this file!",
            icon: "error",
            buttons: true,
          })
          .then((isConfirmed) => {
            if (isConfirmed) {
              swal("You will be our Pro user!", {
                icon: "success",
              });
              window.location.href = process.env.PUBLIC_URL + "/about";
            } else {
              swal("You can dive further, enjoy!");
            }
          });
          
        } else {
          window.open(
            Backend.URL + '/blends/' + target,
            '_blank'
          );
        }
      } 
    } else if (type === 'platinum') {
      if (membership === 'platinum') {
        window.open(
          Backend.URL + '/blends/' + target,
          '_blank'
        );
      } else {
        swal({
          title: "Oops!",
          text: "You have to upgrade your membership to platinum to download this file!",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our Premium user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/about";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      }
    }
  }

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-large-image-wrapper">
                <Swiper {...gallerySwiperParams}>
                  {product.featured_images &&
                    product.featured_images.split('|').map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={Backend.URL + '/images/' + single}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                  {product.featured_images &&
                    product.featured_images.split('|').map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={Backend.URL + '/images/' + single}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{product.name}</h2>
                
                <div className="pro-details-list">
                  <p>{product.short_description}</p>
                </div>

                {/* <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover">
                      <button
                      >
                        {" "}
                        Download{" "}
                      </button>
                  </div>
                  <div className="pro-details-wishlist">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => addToWishlist(product)}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                </div> */}

              <div className="mt-5 mb-5">
                {product.platinum === 'on' ? 
                  <>
                    {product.local_blend ? product.local_blend.split('|').map((lb, _i)=>{
                      return (
                        <div className="mt-2" key={_i}>
                          <Link to="#" onClick={() => {download(lb, 'platinum')}} > <Badge style={{color:'white', backgroundColor:'#252521'}}>Platinum</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {lb.split('/').pop()}</Link>
                        </div>
                      )
                    }) : <></>}
                  </>          
                :
                  <>
                    {product.free_blend ? product.free_blend.split('|').map((fb, _i)=>{
                      return (
                        <div className="mt-2" key={_i}>
                          <Link to="#" onClick={() => {download(fb, 'free')}} > <Badge style={{color:'white', backgroundColor:'#587175'}}>Free</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {fb.split('/').pop()}  </Link>
                        </div>
                      )
                    }) : <></>}
                    {product.pro_blend ? product.pro_blend.split('|').map((pb, _i)=>{
                      return (
                        <div className="mt-2" key={_i}>
                          <Link to="#" onClick={() => {download(pb, 'pro')}} > <Badge style={{color:'white', backgroundColor:'#33434e'}}> &nbsp;Pro&nbsp;&nbsp; </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {pb.split('/').pop()}  </Link>
                        </div>
                      )
                    }) : <></>}
                  </> 
                }
              </div>

              <div className="pro-details-social">
                <ul>
                  <li>
                    <a href="//facebook.com">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/blend.lib">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="t.me/blend.lib">
                      <i className="fa fa-paper-plane" />
                    </a>
                  </li>
                  <li>
                    <a href="https://chat.whatsapp.com/CEH5XuK5r3sJPnFEfYVepw">
                      <i className="fa fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@blendlib.com">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>

              </div>
              {/* Instead of the div above, put the ProductDescriptionInfo component with props */}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ProductModal;
