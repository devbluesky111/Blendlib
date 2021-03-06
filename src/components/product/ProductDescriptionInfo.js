import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Backend from '../../@utils/BackendUrl';
import swal from 'sweetalert';

const ProductDescriptionInfo = ({
  product,
  membership,
}) => {

  const download = async (target, type) => {
    if (type === 'free') {
      if (membership === 'no') {
        swal({
          title: "Oops!",
          text: "Log In to BlendLib",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/login-register";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      } else {
        window.open(
          Backend.URL + '/blends/' + target,
          '_blank'
        );
      }
    } else if (type === 'pro') {
      if (membership === 'no') {
        swal({
          title: "Oops!",
          text: "Log In to BlendLib",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/login-register";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      } else {
        if (membership === 'free') {
          swal({
            title: "Oops!",
            text: "You have to upgrade your membership to pro to download this file!",
            icon: "error",
            buttons: true,
          })
          .then((isConfirmed) => {
            if (isConfirmed) {
              swal("You will be our Pro user!", {
                icon: "success",
              });
              window.location.href = process.env.PUBLIC_URL + "/about";
            } else {
              swal("You can dive further, enjoy!");
            }
          });
          
        } else {
          window.open(
            Backend.URL + '/blends/' + target,
            '_blank'
          );
        }
      } 
    } else if (type === 'platinum') {
      if (membership === 'platinum') {
        window.open(
          Backend.URL + '/blends/' + target,
          '_blank'
        );
      } else {
        swal({
          title: "Oops!",
          text: "You have to upgrade your membership to platinum to download this file!",
          icon: "error",
          buttons: true,
        })
        .then((isConfirmed) => {
          if (isConfirmed) {
            swal("You will be our Premium user!", {
              icon: "success",
            });
            window.location.href = process.env.PUBLIC_URL + "/about";
          } else {
            swal("You can dive further, enjoy!");
          }
        });
      }
    }
  }

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="pro-details-list">
        <p>{product.short_description}</p>
      </div>

      <div className="mt-5 mb-5">
        {product.platinum === 'on' ? 
          <>
            {product.local_blend ? product.local_blend.split('|').map((lb, _i)=>{
              return (
                <div className="mt-2" key={_i}>
                  <Link to="#" onClick={() => {download(lb, 'platinum')}} > <Badge style={{color:'white', backgroundColor:'#252521'}}>Platinum</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {lb.split('/').pop()}</Link>
                </div>
              )
            }) : <></>}
          </>          
        :
          <>
            {product.free_blend ? product.free_blend.split('|').map((fb, _i)=>{
              return (
                <div className="mt-2" key={_i}>
                  <Link to="#" onClick={() => {download(fb, 'free')}} > <Badge style={{color:'white',backgroundColor:'#587175'}}>Free</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {fb.split('/').pop()}  </Link>
                </div>
              )
            }) : <></>}
            {product.pro_blend ? product.pro_blend.split('|').map((pb, _i)=>{
              return (
                <div className="mt-2" key={_i}>
                  <Link to="#" onClick={() => {download(pb, 'pro')}} > <Badge style={{color:'white',backgroundColor:'#33434e'}}> &nbsp;Pro&nbsp;&nbsp; </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {pb.split('/').pop()}  </Link>
                </div>
              )
            }) : <></>}
          </> 
        }
      </div>

      <div className="pro-details-social">
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
  );
};

export default ProductDescriptionInfo;
