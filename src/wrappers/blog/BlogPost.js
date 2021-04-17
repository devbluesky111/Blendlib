import React, { Fragment, useState, useEffect  } from "react";
import { Link, useParams } from "react-router-dom";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const BlogPost = () => {
  const routeParams = useParams();

  const [blog, setBlog] = useState({
		id: 0,
		name: "",
		title: "",
		short_description: "",
		long_description: "",
		image: "",
		created: ""
	});

  useEffect(()=>{
		const init = async () => {
		
				const resp = await axios.post(Backend.URL + '/get_blog_id', {id: routeParams.blogId}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
				let data = resp.data[0];
				if (data) {
					setBlog({...data});
				}
		}

		init();
	}, [routeParams]);
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          {blog.image !== '' && <img
            alt="Blog detail"
            src={Backend.URL + '/blogs/' + blog.image}
          />}
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>20 April, 2021</li>
              <li>
                <Link to="#">
                  4 <i className="fa fa-heart-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>{blog.title}</h3>
          <p>
            {blog.long_description}
          </p>
        </div>
      </div>
      <div className="tag-share">
        <div className="blog-share">
          <span>share :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
