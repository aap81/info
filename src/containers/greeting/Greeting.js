import React, {useContext, useState, useEffect} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {openSource} from "../../portfolio";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [profile, setProfile] = useState(null);

  function setProfileFunction(user) {
    setProfile(user);
  }

  useEffect(() => {
  if (openSource.showGithubProfile === "true") {
    const getProfileData = () => {
      fetch(process.env.PUBLIC_URL + "/profile.json")
        .then(result => {
          if (!result.ok) {
            throw new Error("Network response was not ok");
          }
          return result.json();
        })
        .then(response => {
          // response.data.user from your JSON structure
          setProfileFunction(response.data.user);
        })
        .catch(function (error) {
          console.error(`${error} (cannot fetch github avatar)`);
          setProfileFunction(null);
          openSource.showGithubProfile = "false";
        });
    };
    getProfileData();
  }
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="profile-row">
                {profile && (
                  <div className="image-content-profile">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name || "Profile avatar"}
                      className="profile-image"
                    />
                  </div>
                )}
                <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                  {" "}
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
              </div>
              <p className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
              }>
                {greeting.subTitle}
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
