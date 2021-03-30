import React, { Fragment, useEffect, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";
import Backend from '../../@utils/BackendUrl';

const ProductImageGalleryLeftThumb = ({ product }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    let imgs = product.featured_images;
    if(imgs)
      setImages(imgs.split('|'));

  }, [product]);

  // swiper slider settings
  const gallerySwiperParams = {
    loop: true,
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  return (
    <Fragment>
      {images.length > 0 ?
      <div className="row row-5">
        <div
          className="col-xl-12"
        >
          <div className="product-large-image-wrapper">  
            <div className="product-img-badges">          
              {product.created && product.created.includes(today) ? (
                  <span className="purple">New</span>
              ) : (
                ""
              )}
              {product.platinum === 'on' ? (
                  <span className="pink">Platinum</span>
              ) : (
                ""
              )}
            </div>
            <LightgalleryProvider>
              <Swiper {...gallerySwiperParams}>
                {images &&
                  images.map((single, key) => {
                    return (
                      <div key={key}>
                        <LightgalleryItem
                          group="any"
                          src={Backend.URL + '/images/' + single}
                        >
                          <button>
                            <i className="pe-7s-expand1"></i>
                          </button>
                        </LightgalleryItem>
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
            </LightgalleryProvider>
          </div>
        </div>
      </div>
      : <></> }
    </Fragment>
  );
};

export default ProductImageGalleryLeftThumb;
