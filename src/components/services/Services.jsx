import React, { useState } from "react";
import "./services.css";
// import fordsvg from '../../assets/Ford_logo_flat.svg';
// import infosyssvg from '../../assets/Infosys_logo.svg';
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Where I’ve Worked</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <i className="uil uil-briefcase-alt qualification__icon"></i>
            <h3 className="services__title">Ford Motor Company</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Ford Motor Company</h3>
              <p className="services__modal-description">
                RPA/Full-Stack Developer
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    • Redesigned processes and identified areas that can be
                    automated using RPA tools such as UiPath and PEGA, resulting
                    in 90% reduction in manual effort and 97% increase in
                    accuracy.
                    <br />• Contributed in creating more than 15 Bots for
                    websites in downloading data and creating reports to reduce
                    time and Manual Error by 97%.
                    <br />• Devised around 10 bots to save 6 hours of daily
                    repetitive task to decided based on training data.
                    <br />• Associated in creating C# and python script to
                    automate websites which cannot be done using PEGA.
                    <br />• Revamped a manual process in sending reports to
                    dealers across US by developing a bot which sends accurate
                    reports to Dealers across US which saves 3-4 million
                    monthly.
                    <br />• Restructured dealer page with new components and
                    functionality for retrieving instant data and report in-turn
                    saving time by 95%, Built a RESTful API using Node.js to
                    provide a secure connection between front-end and backend
                    services.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i className="uil uil-briefcase-alt qualification__icon"></i>
            <h3 className="services__title">Infosys Limited</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Infosys Limited</h3>
              <p className="services__modal-description">
                Full Stack Developer
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <br />• Create front-end features, components, and libraries
                    by turning designs and wireframes into high-quality,
                    reusable code and optimized for maximum performance on a
                    range of web-capable devices and browsers.
                    <br />• Implemented user authentication and authorization
                    features using JSON Web Token and improved the performance
                    of the web application by 32% through optimization of
                    codebase.
                    <br />• Developed scalable database design and optimized
                    database queries along with the implementation of caching
                    strategies, resulting in over 40% efficiency.
                  </p>
                </li>
                {/* 
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
