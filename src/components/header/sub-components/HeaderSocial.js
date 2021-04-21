import React from "react";

const HeaderSocial = () => {
  return (
    <div className="side-social">
      <div className="pt-4 pb-4">
        <a href="m.me/blend.lib">
          <p>Call Us</p>
        </a>
      </div>
      <ul>
        <li>
          <a
            className="facebook"
            href="https://www.facebook.com/blend.lib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a
            className="instagram"
            href="https://www.instagram.com/blend.lib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a
            className="telegram"
            href="t.me/blend.lib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-paper-plane" />
          </a>
        </li>
        <li>
          <a
            className="whatsapp"
            href="https://chat.whatsapp.com/CEH5XuK5r3sJPnFEfYVepw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" />
          </a>
        </li>
        <li>
          <a
            className="email"
            href="mailto:hello@blendlib.com"
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
