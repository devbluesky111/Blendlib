import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const FooterSumish = ({
  backgroundColorClass,
  copyrightColorClass,
  spaceLeftClass,
  spaceRightClass,
  footerTopBackgroundColorClass,
  footerTopSpaceTopClass,
  footerTopSpaceBottomClass,
  footerLogo
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area pt-5 footer-dark ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""} ${
        spaceRightClass ? spaceRightClass : ""
      }`}
    >
      <div
        className={`footer-top text-center ${
          footerTopBackgroundColorClass ? footerTopBackgroundColorClass : ""
        } ${footerTopSpaceTopClass ? footerTopSpaceTopClass : ""}  ${
          footerTopSpaceBottomClass ? footerTopSpaceBottomClass : ""
        }`}
      >
        <div className="container">
          <div className="footer-logo">
            <Link to={process.env.PUBLIC_URL}>
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL +
                  `${footerLogo ? footerLogo : "/assets/img/logo/logo-2.png"}`
                }
              />
            </Link>
          </div>
          <a href="m.me/blend.lib">
            <p>Call Us</p>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
          <div className="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/blend.lib">
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
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div
            className={`copyright-2 ${
              copyrightColorClass ? copyrightColorClass : ""
            }`}
          >
            <p>
              © 2021{" "}
              <a
                href="//www.sumish.herokuapp.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sumish
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterSumish.propTypes = {
  backgroundColorClass: PropTypes.string,
  copyrightColorClass: PropTypes.string,
  footerLogo: PropTypes.string,
  footerTopBackgroundColorClass: PropTypes.string,
  footerTopSpaceBottomClass: PropTypes.string,
  footerTopSpaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterSumish;
