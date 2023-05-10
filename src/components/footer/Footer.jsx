import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adithya</h1>

        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>
        </ul> */}

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/AdithyaVenkatesh"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          {/* <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-"></i>
          </a> */}
        </div>

        {/* <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
