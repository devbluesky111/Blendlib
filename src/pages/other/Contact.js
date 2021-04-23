import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect} from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const Contact = ({ location }) => {
  const { pathname } = location;
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
  }, [pathname]);

  return (
    <Fragment>
      <MetaTags>
        <title>BlendLib | Help</title>
        <meta
          name="description"
          content="Contact of BlendLib minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Help
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <Tab.Container defaultActiveKey="contactUs">
              <div className="custom-row-2">
                <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                    <Nav variant="pills" className="product-tab-list pb-55 text-center flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="contactUs">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-phone" />
                            </div>
                            <div className="contact-info-dec">
                              <p>Contact Us</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="licensing">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-book" />
                            </div>
                            <div className="contact-info-dec">
                              <p>Licensing &amp; Usage</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="usingAssets">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-share-alt-square" />
                            </div>
                            <div className="contact-info-dec">
                              <p>Using Our Assets</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="subscription">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-shopping-bag" />
                            </div>
                            <div className="contact-info-dec">
                              <p>Subscription Plans</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      {membership && (membership === 'platinum') ?
                      <Nav.Item>
                        <Nav.Link eventKey="platinum" href="/blend-guide">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-user-plus" />
                            </div>
                            <div className="contact-info-dec">
                              <p>Blender Guide &amp; Tools</p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>:<></>
                      }
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <Tab.Content>
                    <Tab.Pane eventKey="contactUs">
                      <div className="contact-form">
                        <div className="contact-title mb-30">
                          <h2>Get In Touch</h2>
                        </div>
                        <form className="contact-form-style">
                          <div className="row">
                            <div className="col-lg-6">
                              <input name="name" placeholder="Name*" type="text" />
                            </div>
                            <div className="col-lg-6">
                              <input name="email" placeholder="Email*" type="email" />
                            </div>
                            <div className="col-lg-12">
                              <input
                                name="subject"
                                placeholder="Subject*"
                                type="text"
                              />
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                name="message"
                                placeholder="Your Massege*"
                                defaultValue={""}
                              />
                              <button className="submit" type="submit">
                                SEND
                              </button>
                            </div>
                          </div>
                        </form>
                        <p className="form-messege" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="licensing">
                      <div className="contact-form">
                        <div className="contact-title mb-30">
                          <h2>Licensing and Usage</h2>
                        </div>
                        <div className="row mb-30 ml-10">
                          <h4>What are the guidelines for ...........</h4>
                          <p>You can what ever you want, this is an example test, final text to come later</p>
                        </div>
                        <div className="row ml-10">
                          <h4>What are the guidelines for using our .........</h4>
                          <p>.............. this is a simple text to be developed later</p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="usingAssets">
                      <div className="contact-form">
                        <div className="contact-title mb-30">
                          <h2>Using Our Assets</h2>
                        </div>
                        <div className="row mb-30 ml-10">
                          <h4>What are the guidelines for using our free assets</h4>
                          <p>You can what ever you want, this is an example test, final text to come later</p>
                        </div>
                        <div className="row ml-10">
                          <h4>What are the guidelines for using our PRO assets</h4>
                          <p>Our pro assets can be used here and there, this is a simple text to be developed later</p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="subscription">
                      <div className="contact-form">
                        <div className="contact-title mb-30">
                          <h2>Subscription</h2>
                        </div>
                        <div className="row mb-30 ml-10">
                          <h4>What are the guidelines for ..........</h4>
                          <p>You can what ever you want, this is an example test, final text to come later</p>
                        </div>
                        <div className="row ml-10">
                          <h4>What are the guidelines for using our .........</h4>
                          <p>......... this is a simple text to be developed later</p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="platinum">
                      <div className="contact-form">
                        <div className="contact-title mb-50">
                          <h2>Blender Guide and Tool</h2>
                        </div>
                        <div className="row mb-30 ml-10">
                          <h4 className="mb-30">You can find the full content on the google doc link page</h4>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
