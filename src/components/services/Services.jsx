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
            <h3 className="services__title">UWorld LLC</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
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

              <h3 className="services__modal-title">UWorld LLC</h3>
              <h3 className="services__modal-title">
                Software Developer 
              </h3>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    • Revamped legacy ASP.NET components into an Angular-based system, leveraging NPM for dependency management and TypeScript for type-safe development, 
                    boosting user experience and increasing system performance and scalability by 20%.
                    <br />• Architected a course-building component integrating video media, lectures, and lessons, 
                    simplifying course creation for 90% of the internal team and reducing assembly time by 30% for course delivery.
                    <br />• Elevated content consistency and delivery timelines by 30%, reducing post-release updates by 20% and supporting efficient, 
                    scalable course launches across the organization.
                    <br />• Spearheaded the development of an HTML editor module, now used by over 80% of the team, 
                    increasing content formatting accuracy by 25%.
                  </p>
                </li>
              </ul>
              <h3 className="services__modal-title">Software Developer Intern</h3>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    • Integrated and customized third-party applications like Aspose and CKEditor, 
                    boosting content management efficiency by 25%.
                    <br />• Built and unified components for converting Word and PDF documents to HTML, 
                    increasing system efficiency by 15% with enhanced content accessibility and presentation using ASP.NET.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                Software Engineer
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    • Designed and implemented a modular dealer page with reusable components, 
                    enabling real-time data retrieval and reporting, improving data access efficiency by 95%.
                    <br />• Automated the VIN update workflow for vehicles with expired or renewed warranties,
                     seamlessly integrating it into the warranty management system and enhancing data accuracy by 40%.
                    <br />• Created a dynamic reporting component to generate and export custom warranty reports, 
                    reducing manual data consolidation efforts by 30%.
                    <br />• Integrated lazy-loading for individual components to enhance application scalability, 
                    improving overall loading performance by 20%.
                    <br />• Built flexible and reusable React components to standardize the app’s UI, 
                    accelerating development and ensuring a consistent design across the application.
                    <br />• Ensured development best practices by implementing unit and integration tests, 
                    while producing comprehensive documentation to support scalable and maintainable systems.
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
