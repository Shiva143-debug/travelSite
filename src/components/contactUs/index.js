import Slidebar from "../Slidebar";
import "./index.css";

const ContactUs = () => (
  <div className="contact-page">
    <Slidebar />
    <div className="contact d-flex flex-column justify-content-center align-items-center py-5">
      <h1 className="mb-4">Contact Us</h1>
      <ul className="contact-list list-unstyled ">
        <li className="mb-3">
          <strong>Email:</strong> <a href="mailto:ck@travelunbounded.com">ck@travelunbounded.com</a><br />
          <strong>Phone:</strong> <a href="tel:+919845090014">+91 98450 90014</a>
        </li>
        <li className="mb-3">
          <strong>Email:</strong> <a href="mailto:sk@travelunbounded.com">sk@travelunbounded.com</a><br />
          <strong>Phone:</strong> <a href="tel:+919739255255">+91 97392 55255</a>
        </li>
        <li className="mb-3">
          <strong>Email:</strong> <a href="mailto:sg@travelunbounded.com">sg@travelunbounded.com</a><br />
          <strong>Phone:</strong> <a href="tel:+919884023028">+91 98840 23028</a>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactUs;
