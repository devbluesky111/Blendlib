import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const BlogSidebar = () => {
  const [blogs, setBlogs] = useState([]);

  const init = async () => {
		const res = await axios.post(Backend.URL + '/get_blogs', { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
		setBlogs(res.data);
	}
	useEffect(() => {
		init();
	}, []);

  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Search </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Posts </h4>
        <div className="sidebar-project-wrap mt-30">
          {blogs.length > 0 && blogs.map(blog => {
            return(
              <div className="single-sidebar-blog" key={blog.id}>
                <div className="sidebar-blog-img">
                  <Link to="#">
                    <img
                      src={
                        Backend.URL + '/blogs/' + blog.image
                      }
                      alt="blog"
                    />
                  </Link>
                </div>
                <div className="sidebar-blog-content">
                  <span>{blog.name}</span>
                  <h4>
                    <Link to="#">
                      {blog.title}
                    </Link>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
