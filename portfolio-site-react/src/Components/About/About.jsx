import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_pic.jpg";

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a self-taught Front-End Developer with a strong passion for learning and building user-focused experiences. I've become proficient in HTML, CSS, JavaScript, and React through dedicated study and hands-on practice.
            </p>
            <p>
              I have over 8 years of experience in operations management and customer success, where I developed strong skills in project management, cross-functional collaboration, and relationship-building. These experiences have shaped my approach to development—ensuring I create solutions that are not only functional but also aligned with user and business needs.
            </p>
            <p>
              What began as a hobby quickly grew into a true passion. Today, front-end development is where I channel my curiosity, creativity, and drive. I bring enthusiasm and commitment to every project, always striving to learn more and improve with each iteration.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> 
      </div>*/}
    </div>
  );
};

export default About;
