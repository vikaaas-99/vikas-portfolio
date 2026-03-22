import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-section-inner section-container">
        <div className="contact-container">
          <div className="contact-flex">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:vikassharma6888@gmail.com" data-cursor="disable">
                  vikassharma6888@gmail.com
                </a>
              </p>
              <h4>Education</h4>
              <p>
                M.Sc. in Machine Learning & AI
                <br />
                B.Tech in Computer Science Engineering
              </p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/vikaaas-99"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-sharma-6888/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box">
              <h2>
                Re-Designed and Re-Developed <br /> by <span>Vikas Sharma</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
