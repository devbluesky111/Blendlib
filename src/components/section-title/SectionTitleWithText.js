import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Backend from "../../@utils/BackendUrl";
import axios from "axios";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const init = async () => {
      const res = await axios.post(Backend.URL + '/get_count', {data: 0}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
      setCount(res.data.count);
    }
    init();
  }, []);
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h1>{count} <sup>+</sup></h1>
          <h2>Welcome To BlendLib</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
