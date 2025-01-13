import faceIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import instagramIcon from "../../images/icon-instagram.svg";

import "./SocialLinks.css";
function SocialLinks() {
  return (
    <div className="social-logo-container">
      <img src={faceIcon} alt="facebook" className="social-logo" />
      <img src={twitterIcon} alt="twitter" className="social-logo" />
      <img src={pinterestIcon} alt="pinterest" className="social-logo" />
      <img src={instagramIcon} alt="instagram" className="social-logo" />
    </div>
  );
}

export default SocialLinks;
