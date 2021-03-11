import React from "react";

const HeaderSocial = () => {
  return (
    <div className="side-social">
      <div className="pt-4 pb-4">
        <p>Call Us 3965410</p>
      </div>
      <ul>
        <li>
          <a
            className="facebook"
            href="//www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a
            className="instagram"
            href="//www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a
            className="telegram"
            href="//www.telegram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-paper-plane" />
          </a>
        </li>
        <li>
          <a
            className="whatsapp"
            href="//www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" />
          </a>
        </li>
        <li>
          <a
            className="email"
            href="mailto:info@yourdomain.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSocial;
