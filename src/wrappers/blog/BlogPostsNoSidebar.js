import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';
const BlogPostsNoSidebar = () => {
  const [blogs, setBlogs] = useState([]);

  const init = async () => {
		const res = await axios.post(Backend.URL + '/get_blogs', { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
		setBlogs(res.data);
	}

	useEffect(() => {
		init();
	}, []);
  return (
    <Fragment>
      {blogs.map(blog => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-12" key={blog.id}>
          <div className="blog-wrap-2 mb-30">
            <div className="blog-img-2">
              <Link to="#">
                <img
                  src={Backend.URL + '/blogs/' + blog.image}
                  alt="blog"
                />
              </Link>
            </div>
            <div className="blog-content-2">
              <div className="blog-meta-2">
                <ul>
                  <li>22 April, 2021</li>
                  <li>
                    <Link to="#">
                      4 <i className="fa fa-heart-o" />
                    </Link>
                  </li>
                </ul>
              </div>
              <h4>
                <Link to="#">
                  {blog.title}
                </Link>
              </h4>
              <p>
                {blog.short_description}
              </p>
              <div className="blog-share-comment">
                <div className="blog-btn-2">
                  <Link to={process.env.PUBLIC_URL + "/blog-detail/" + blog.id }>
                    read more
                  </Link>
                </div>
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
            </div>
          </div>
        </div>
      );
      })}
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
