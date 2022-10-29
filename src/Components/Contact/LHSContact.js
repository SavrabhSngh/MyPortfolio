import { ADDRESS, EMAIL, MOBILE } from "../../Services/Constants";
const LHSContact = () => {
  return (
    <div className="contact-me">
      <div className="card">
        <div className="contact-image">
          <img src="./images/contact.png" alt="contact" draggable="false" />
        </div>
        <p>
          <i className="fas fa-home"></i> {ADDRESS}
        </p>
        <p>
          <i className="fas fa-envelope"></i> {EMAIL}
        </p>
        <p>
          <i className="fas fa-mobile"></i> {MOBILE}
        </p>
      </div>
    </div>
  );
};

export default LHSContact;
