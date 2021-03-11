import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://12452456012">(1245) 2456 012 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="//facebook.com" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="//telegram.com" title="telegram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="//instagram.com" title="Instagram">
          <i className="fa fa-paper-plane"></i>
        </a>
        <a href="//whatsapp.com" title="whatsapp">
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
