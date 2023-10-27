import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import avatar from "../assets/avatar-michelle.jpg";
import drawers from "../assets/drawers.jpg";
import share from "../assets/icon-share.svg";
import "../sass/Card.scss";
import DesktopShareCard from "./DesktopShareCard";

import twitter from "../assets/icon-twitter.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  const isGreaterThan1000px = useMediaQuery({ query: "(min-width: 1000px)" });
  const desktopShareCard = (
    <div className="shareDesktop">
      <DesktopShareCard />
    </div>
  );

  const mobileShareCard = (
    <div className="mobileShareCard">
      <div>
        <p>SHARE</p>
        <div className="socialIcons">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.pinterest.com">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
      <div className="shareContainer" onClick={() => setClicked(!clicked)}>
        <img src={share} alt="share" />
      </div>
    </div>
  );

  return (
    <article className="card">
      <section className="imageContainer">
        <img src={drawers} alt="drawers" />
      </section>
      <section className="contentContainer">
        <p className="contentHeading">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="contentDesc">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <section className="profile">
          {clicked && isGreaterThan1000px
            ? desktopShareCard
            : clicked && !isGreaterThan1000px
            ? mobileShareCard
            : ""}
          <div className="profileInfo">
            <img className="avatar" src={avatar} alt="michelle" />
            <div>
              <span>Michelle Appleton</span>
              <span>28 Jun 2020</span>
            </div>
          </div>
          <div className="shareContainer" onClick={() => setClicked(!clicked)}>
            <img src={share} alt="shareIcon" />
          </div>
        </section>
      </section>
    </article>
  );
};

export default Card;
