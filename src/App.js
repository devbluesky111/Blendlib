import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
const HomeSumish = lazy(() => import("./pages/home/HomeSumish"));

// shop pages
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));


// product pages
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);

// blog pages
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = props => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
          ar: require("./translations/arabic.json")
        }
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeSumish}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/collection"}
                  component={ShopGridFilter}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/collection/:id"}
                  component={ShopGridFilter}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/collection/:mid/:sid"}
                  component={ShopGridFilter}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  component={ProductTabRight}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog"}
                  component={BlogRightSidebar}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
