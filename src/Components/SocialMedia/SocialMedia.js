import {
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  WHATSAPP,
} from "../../Services/Constants";
import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <div className="socail-media">
      <div
        className="media-element"
        onClick={() => window.open(LINKEDIN, "_self")}
      >
        <i className="fab fa-linkedin"></i>
      </div>
      <div
        className="media-element"
        onClick={() => window.open(WHATSAPP, "_self")}
      >
        <i className="fab fa-whatsapp"></i>
      </div>
      <div
        className="media-element"
        onClick={() => window.open(INSTAGRAM, "_self")}
      >
        <i className="fab fa-instagram"></i>
      </div>
      <div
        className="media-element"
        onClick={() => window.open(FACEBOOK, "_self")}
      >
        <i className="fab fa-facebook-square"></i>
      </div>
    </div>
  );
};

export default SocialMedia;
