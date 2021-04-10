import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import HeroSliderSumishSingle from "../../components/hero-slider/HeroSliderSumishSingle.js";
import axios from "axios";
import Backend from "../../@utils/BackendUrl";

const HeroSliderSumish = () => {
  const [cover, setCover] = useState([]);
  useEffect(() => {
      const init = async () => {
          const res = await axios.post(Backend.URL + '/get_covers', { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
          setCover(res.data);
      }
      init();
  },[]);
  const params = {
    effect: "fade",
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
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

  return (
    <div className="slider-area">
      <div className="slider-active-2 nav-style-3">
        <Swiper {...params}>
          {cover &&
            cover.map((single, key) => {
              return (
                <HeroSliderSumishSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderSumish;
