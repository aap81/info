import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {Fade} from "react-reveal";

export default function GithubProfileCard() {
  return (
    <Fade bottom duration={800} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">Discuss a project or just want to say hi?</p>
            </div>
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: Yes
              </span>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Fade>
  );
}
