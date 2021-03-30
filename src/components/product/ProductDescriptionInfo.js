import React from "react";
import Backend from '../../@utils/BackendUrl';
import { Badge } from "react-bootstrap";

const ProductDescriptionInfo = ({
  product
}) => {

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
                  <a target='_blank' rel='noopener noreferrer' href={Backend.URL + '/blends/' + lb} download> <Badge variant="danger" style={{color:'white'}}>Platinum</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {lb.split('/').pop()}  </a>
                </div>
              )
            }) : <></>}
          </>          
        :
          <>
            {product.free_blend ? product.free_blend.split('|').map((fb, _i)=>{
              return (
                <div className="mt-2" key={_i}>
                  <a target='_blank' rel='noopener noreferrer' href={Backend.URL + '/blends/' + fb} download> <Badge variant="primary" style={{color:'white'}}>Free</Badge>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {fb.split('/').pop()}  </a>
                </div>
              )
            }) : <></>}
            {product.pro_blend ? product.pro_blend.split('|').map((pb, _i)=>{
              return (
                <div className="mt-2" key={_i}>
                  <a target='_blank' rel='noopener noreferrer' href={Backend.URL + '/blends/' + pb} download> <Badge variant="danger" style={{color:'white'}}> Pro </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-download"></i> {pb.split('/').pop()}  </a>
                </div>
              )
            }) : <></>}
          </> 
        }
      </div>

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//www.instagram.com">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="//www.telegram.com">
              <i className="fa fa-paper-plane" />
            </a>
          </li>
          <li>
            <a href="//www.whatsapp.com">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="mailto:info@yourdomain.com">
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescriptionInfo;
