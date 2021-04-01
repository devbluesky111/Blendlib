import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';
import swal from 'sweetalert';

const MyAccount = ({ location }) => {
  const { pathname } = location;

  const [form, setForm] = useState({
    id: 0,
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
    membership: '',
    pending: '',
    status: '',
    created: '',
    last_login: ''
  });

  const [conpsw, setConPsw] = useState('');

  const init = async () => {
    const res = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true });
    if(res.data.status === 'fail') {
      window.location.href = process.env.PUBLIC_URL + "/";
    } else {
      setForm(res.data.data[0][0]);
    }
  }

  useEffect(()=>{
    init();
  }, []);

  const ask_pro = async (e) => {
    e.preventDefault();
    await axios.post(Backend.URL + '/pending_membership', {id: form.id, type:"ask", value:"pro"}, { withCredentials: true });
    init();
  }

  const cancel_pro = async (e) => {
    e.preventDefault();
    await axios.post(Backend.URL + '/pending_membership', {id: form.id, type:"cancel", value:"pro"}, { withCredentials: true });
    init();
  }

  const ask_platinum = async (e) => {
    e.preventDefault();
    await axios.post(Backend.URL + '/pending_membership', {id: form.id, type:"ask", value:"platinum"}, { withCredentials: true });
    init();
  }

  const cancel_platinum = async (e) => {
    e.preventDefault();
    await axios.post(Backend.URL + '/pending_membership', {id: form.id, type:"cancel", value:"platinum"}, { withCredentials: true });
    init();
  }

  const save_user_data = async (e) => {
    e.preventDefault();
    const res = await axios.post(Backend.URL + '/edit_user', form, { withCredentials: true });
    if(res.data.id) {
      swal("Success!", "User data updated successfully!", "success");
    } else {
      swal("Oops!", "Failed!", "error");
    }
  }

  const save_password = async (e) => {
    e.preventDefault();
    // const res = await axios.post(Backend.URL + '/edit_user', form, { withCredentials: true });
    if(form.password.length < 6) {
      swal("Oops!", "Password must be 6 letter at least!", "error");
      return false;
    } else if (form.password !== conpsw) {
      swal("Oops!", "Please check confirm password again!", "warning");
      return false;
    }

    const res = await axios.post(Backend.URL + '/edit_user', form, { withCredentials: true });
    if(res.data.id) {
      swal("Success!", "Password updated successfully!", "success");
    } else {
      swal("Oops!", "Failed!", "error");
    }
    
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Sumish | My Account</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Account
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Edit your account information{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                              <h5>Your Personal Details</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input type="text" value={form.name} onChange={e=>{setForm({...form, name:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" value={form.lastName} onChange={e=>{setForm({...form, lastName:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Nick Name</label>
                                  <input type="text" value={form.nickname} onChange={e=>{setForm({...form, nickname:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Birthday</label>
                                  <input type="date" value={form.birthday} onChange={e=>{setForm({...form, birthday:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="text" value={form.email} onChange={e=>{setForm({...form, email:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Phone</label>
                                  <input type="text" value={form.phone} onChange={e=>{setForm({...form, phone:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Company</label>
                                  <input type="text" value={form.company} onChange={e=>{setForm({...form, company:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Job Title</label>
                                  <input type="text" value={form.jobTitle} onChange={e=>{setForm({...form, jobTitle:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Address</label>
                                  <input type="text" value={form.address} onChange={e=>{setForm({...form, address:e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>notes</label>
                                  <textarea type="text" value={form.notes} onChange={e=>{setForm({...form, notes:e.target.value})}} style={{resize:'none', height:'150px'}} ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button onClick={save_user_data}>Save</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input type="password" value={form.password} onChange={e=> {setForm({...form, password: e.target.value})}} />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password Confirm</label>
                                  <input type="password" value={conpsw} onChange={e=> {setConPsw(e.target.value)}} />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button onClick={save_password}>Save</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>3 .</span> Modify your membership{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Membership Entries</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <h2> Free Membership </h2>
                                    <p> Search free and pro collections </p>
                                    <p> Download free collections </p>
                                    <p> Free forever </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    {form.membership === 'free' ? <p>My current membership!</p> : <></> }
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="entries-wrapper mt-3">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <h2> Pro Membership </h2>
                                    <p> Search free and pro collections </p>
                                    <p> Download free and pro collections </p>
                                    <p> 1$ / month </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    {form.membership === 'pro' ? <p>My current membership!</p> : <></> }
                                    {form.pending === 'no' && form.membership === 'free' ? <button className="info" onClick={ask_pro}>Ask to join pro</button> : <></> }
                                    {form.pending === 'pro' && form.membership === 'free' ? <><p>Pro Membership Pending...</p><button className="info" onClick={cancel_pro}>Cancel to join pro</button></> : <></> }                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="entries-wrapper mt-3">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <h2> Platinum Membership </h2>
                                    <p> Search all collections </p>
                                    <p> Download all collections </p>
                                    <p> Order platinum collections </p>
                                    <p> 100$ / year </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    {form.membership === 'platinum' ? <p>My current membership!</p> : <></> }
                                    {form.pending === 'no' && form.membership !== 'platinum' ? <button className="edit" onClick={ask_platinum}>Ask to join platinum</button> : <></> }
                                    {form.pending === 'platinum' && form.membership !== 'platinum' ? <><p>Platinum Membership Pending...</p><button className="edit" onClick={cancel_platinum}>Cancel to join platinum</button></> : <></> }                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};

export default MyAccount;
