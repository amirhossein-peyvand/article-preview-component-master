import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
import "../sass/DesktopShareCard.scss";

const DesktopShareCard = () => {
  return (
    <div className="dekstopShareCard">
      <p>SHARE</p>
      <div className="socialIcons">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.pinterest.com/">
          <img src={pinterest} alt="pinterest" />
        </a>
      </div>
    </div>
  );
};

export default DesktopShareCard;
