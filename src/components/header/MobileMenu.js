import React, { useEffect } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileLangCurChange from "./sub-components/MobileLangCurrChange";
import MobileWidgets from "./sub-components/MobileWidgets";

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
      <button
        className="offcanvas-menu-close"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="pe-7s-close"></i>
      </button>
      <div className="offcanvas-wrapper">
        <div className="offcanvas-inner-content">
          {/* mobile search */}
          <MobileMenuSearch />

          {/* mobile nav menu */}
          <MobileNavMenu />

          {/* mobile language and currency */}
          <MobileLangCurChange />

          {/* mobile widgets */}
          <MobileWidgets />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
