import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Juan Vallejo - Customer Experience.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero section">
      <h1>
        <span>I'm Juan Vallejo,</span> a Front-end developer based in New York, USA.
      </h1>
      <p>
        I am a Front-end Developer with a passion for creating
        innovative and user-friendly websites. This is my first website, created
        from scratch and improved upon as I've learned HTML, CSS, Javascript and React. Feel free to explore my projects and contact
        me to learn more about my work or collaborate.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href={resume} download className="hero-resume">My resume</a>
      </div>
    </div>
  );
};

export default Hero;
