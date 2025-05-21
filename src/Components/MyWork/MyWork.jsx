import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data"
import comingSoonImg from '../../assets/comingsoon.png';
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork section">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-banner">
        <img src={comingSoonImg} alt="Coming Soon" />
      </div>
      {/* Original grid implementation for future use
      <div className="mywork-container">
        {mywork_data.map((work,index) => {
            return <img key={index} src={work.w_img} alt=""/>
        })}
      </div> */}
    </div>
  );
};

export default MyWork;
