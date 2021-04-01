import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';
import swal from 'sweetalert';

const LoginRegister = ({ location }) => {
  const { pathname } = location;
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    nickname: '',
    phone: '',
    email: '',
    company: '',
    jobTitle: '',
    birthday: '',
    address:'',
    notes: '',
    password: '',
    confirm_password: '',
    membership: 'free',
    pending: 'no',
    status: 'on'
  });

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const register = async (e) => {
    e.preventDefault();
    if (!form.name || !form.lastName || !form.email) {
      swal("Oops!", "Please fill out all input fields!", "info");
      return false;
    }
    if (!form.password || form.password !== form.confirm_password) {
      swal("Oops!", "Please check password fields again!", "info");
      return false;
    }
    const res = await axios.post(Backend.URL + '/add_user', form, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    if(res.data.status === 'fail') {
      swal("Oops!", "Email duplicated. Please use other email!", "error");
    } else {
      window.location.reload();
    }
  }

  const login_user = async (e) => {
    e.preventDefault();
    const res = await axios.post(Backend.URL + '/login', login, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    if(res.data.status === 'fail') {
      swal("Sorry!", "Your email and password does not match. \n Please try again!", "warning");
    } else if(res.data.status === 'restrict') {
      swal("Opps!", "Your account has been restricted. \n Please contact the administrator!", "error");
    } else {
      window.location.href = process.env.PUBLIC_URL + "/my-account";
    }
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Sumish | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="email"
                                name="user-email"
                                placeholder="Email"
                                value={login.email}
                                onChange={e=>{
                                  setLogin({...login, email:e.target.value});
                                }}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={login.password}
                                onChange={e=>{
                                  setLogin({...login, password:e.target.value});
                                }}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button
                                  onClick={login_user}
                                >
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="first-name"
                                placeholder="First Name"
                                value={form.name}
                                onChange={e=>{
                                  setForm({...form, name:e.target.value});
                                }}
                              />
                              <input
                                type="text"
                                name="last-name"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={e=>{
                                  setForm({...form, lastName:e.target.value});
                                }}
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={form.email}
                                onChange={e=>{
                                  setForm({...form, email:e.target.value});
                                }}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={form.password}
                                onChange={e=>{
                                  setForm({...form, password:e.target.value});
                                }}
                              />
                              <input
                                type="password"
                                name="confirm-password"
                                placeholder="Confirm Password"
                                value={form.confirm_password}
                                onChange={e=>{
                                  setForm({...form, confirm_password:e.target.value});
                                }}
                              />
                              <div className="button-box">
                                <button
                                  onClick={register}
                                >
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
