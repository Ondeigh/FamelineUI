import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState(2); // Third toggle is active by default

  const handleFindLouverClick = () => {
    navigate("/luva-start");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleToggleClick = (index) => {
    setActiveToggle(index);
  };

  return (
    <div className="hero-page">
      {/* Background Effects */}
      <div className="background-effects">
        <svg
          className="green-blur"
          width="861"
          height="835"
          viewBox="0 0 1261 1235"
          fill="none"
        >
          <g opacity="0.6" filter="url(#filter0_f_246_73)">
            <ellipse
              cx="630.5"
              cy="617.5"
              rx="430.5"
              ry="417.5"
              fill="#8CE88E"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_246_73"
              x="0"
              y="0"
              width="1261"
              height="1235"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_246_73"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="yellow-gradient"
          width="2073"
          height="1564"
          viewBox="0 0 2073 1564"
          fill="none"
        >
          <g filter="url(#filter0_f_191_328)">
            <path
              d="M105.343 105.671L1967.77 447.562L1430.24 1458.51L105.343 105.671Z"
              fill="url(#paint0_linear_191_328)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_191_328"
              x="0.343201"
              y="0.670654"
              width="2072.43"
              height="1562.84"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="52.5"
                result="effect1_foregroundBlur_191_328"
              />
            </filter>
            <linearGradient
              id="paint0_linear_191_328"
              x1="105.343"
              y1="105.671"
              x2="2230.23"
              y2="1235.49"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FAFFA4" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="gold-blur"
          width="1405"
          height="1352"
          viewBox="0 0 1405 1352"
          fill="none"
        >
          <g filter="url(#filter0_f_188_740)">
            <ellipse
              cx="702.185"
              cy="676.438"
              rx="514.413"
              ry="461.729"
              transform="rotate(-30 702.185 676.438)"
              fill="url(#paint0_linear_188_740)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_188_740"
              x="0.319946"
              y="0.932129"
              width="1403.73"
              height="1351.01"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_188_740"
              />
            </filter>
            <linearGradient
              id="paint0_linear_188_740"
              x1="702.185"
              y1="214.708"
              x2="702.185"
              y2="1138.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C3C67F" />
              <stop offset="0.879808" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="dark-blur"
          width="1019"
          height="1036"
          viewBox="0 0 1019 1036"
          fill="none"
        >
          <g opacity="0.6" filter="url(#filter0_f_146_59)">
            <ellipse cx="509.5" cy="518" rx="309.5" ry="318" fill="#111111" />
          </g>
          <defs>
            <filter
              id="filter0_f_146_59"
              x="0"
              y="0"
              width="1019"
              height="1036"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_146_59"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={scrollToTop}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/691b4ce4126b21a2b826b1369a540af253ae50a2?width=1107"
            alt="Logo"
          />
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            about
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="nav-link"
          >
            products
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="nav-link"
          >
            reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            contact
          </button>
        </div>
      </nav>

      {/* Header Image */}
      <div className="header-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ff101f3a1004b6e009ad38913b3c343e28fce1?width=5120"
          alt="Header Background"
        />
      </div>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <h1 className="performance-title">Performance Louvers.</h1>
          <h2 className="beautiful-facade">More than a beautiful facade.</h2>
          <p className="hero-description">
            Our efficient performer louvers can improve airflow to building
            systems while protecting them against rain and resolve noise
            propagation.
          </p>
          <button className="find-louver-btn" onClick={handleFindLouverClick}>
            Find your louver
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59fb04924a63966305088bd99fa47e1c2a28e664?width=1637"
            alt="Performance Louver"
          />
        </div>
      </section>

      {/* Why Performance Louvers Section */}
      <section className="why-performance-section" id="why-performance">
        <h2 className="section-title">
          Why <span className="highlight-green">Performance Louvers</span>?
        </h2>
        <p className="section-description">
          Performance louvers serve multiple functions: regulating ventilation,
          preventing rain ingress, controlling natural light, and managing
          acoustic levels.
        </p>

        <div className="louver-showcase">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69eb2619c35c7dfe7010afe7b49e58129aa59e0d?width=918"
            alt="Louver Showcase"
          />
        </div>

        {/* Toggle Controls */}
        <div className="toggle-controls">
          <div
            className={`toggle-item ${activeToggle === 0 ? "active" : ""}`}
            onClick={() => handleToggleClick(0)}
          >
            <div className="toggle-circle">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4e09a8e0ee189e969d9eaf6faf0bbb379d841f?width=256"
                alt="Icon 1"
              />
            </div>
          </div>
          <div
            className={`toggle-item ${activeToggle === 1 ? "active" : ""}`}
            onClick={() => handleToggleClick(1)}
          >
            <div className="toggle-circle">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/231ee1d424f2f8e16b5b03a1d2c51f694b2f1686?width=180"
                alt="Icon 2"
              />
            </div>
          </div>
          <div
            className={`toggle-item ${activeToggle === 2 ? "active" : ""}`}
            onClick={() => handleToggleClick(2)}
          >
            <div className="toggle-circle">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c56743208f56be9a50f75d9e48c552e11dfceaee?width=190"
                alt="Icon 3"
              />
            </div>
          </div>
          <div
            className={`toggle-item ${activeToggle === 3 ? "active" : ""}`}
            onClick={() => handleToggleClick(3)}
          >
            <div className="toggle-circle">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c5b8ae4c0ea646044cebf50621e18c3cfe5ea9a?width=218"
                alt="Icon 4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Luva Section */}
      <section className="about-luva-section" id="about">
        <div className="about-content">
          <h2 className="about-title">
            About <span className="highlight-green">Luva</span>
          </h2>
          <p className="about-description">
            The challenge lies in specification. Each project demands a unique
            balance influenced by factors ranging from local climate conditions
            to specific building requirements.
            <br />
            <br />
            Our AI-powered optimization engine,{" "}
            <span className="highlight-green">Luva</span> simplifies this
            complex specification process. By analyzing your project parameters
            and aesthetic preferences,{" "}
            <span className="highlight-green">Luva</span> computes the best
            louver configuration for you from our comprehensive product range.
            This AI-driven approach ensures architects receive precise,
            performance-validated recommendations tailored to their specific
            application.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bea5d2394232db60ec4b1d948960138f62cee89?width=1533"
            alt="Luva AI System"
          />
        </div>
      </section>

      {/* Our Performance Louvers Section */}
      <section className="our-louvers-section" id="products">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="highlight-green">Performance Louvers</span>
          </h2>
          <button className="filter-button" onClick={toggleFilter}>
            <div className="filter-line"></div>
            <div className="filter-line"></div>
            <div className="filter-line"></div>
          </button>
        </div>

        {/* Filter Popup */}
        {isFilterOpen && (
          <div className="filter-popup">
            <div className="filter-content">
              <div className="filter-header">
                <h3>Select filters:</h3>
                <button className="filter-close" onClick={toggleFilter}>
                  <div className="filter-line"></div>
                  <div className="filter-line"></div>
                  <div className="filter-line"></div>
                </button>
              </div>

              <div className="filter-section">
                <h4>bank</h4>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>single</span>
                </label>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>double</span>
                </label>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>triple</span>
                </label>
              </div>

              <div className="filter-section">
                <h4>orientation</h4>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>horizontal</span>
                </label>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>vertical</span>
                </label>
              </div>

              <div className="filter-section">
                <h4>frame</h4>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>hidden mullion</span>
                </label>
                <label className="filter-option">
                  <div className="radio-circle"></div>
                  <span>visible mullion</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aac772528e59ba40d33b5cbf65fc3d810d1770?width=495"
              alt="PL-1050 CB"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9709b79204162a452c32bc205ae5e58efc089f82?width=526"
              alt="PL-2050(CB)"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31a249ce65b0955ddf7983ed7590f7bf3dfd2b1d?width=432"
              alt="PL-2250"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25799b9da473823bc9b8387ebdbb6ceca9d993ec?width=486"
              alt="PL-1075(CB)"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c9530ad7ca58d32b28766730dc0ee6a9f8c9f4?width=584"
              alt="PL-2075(STB)"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2728d3ef59cf55d55de17146b6e889a2aade707f?width=535"
              alt="PL-3075(CB)"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da81a2b376fe2b159a68a12e52d978ff6f7e8f5a?width=416"
              alt="PL-2150V"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8df33ffb45dccec008eb9853e59f8d7eccd96b?width=509"
              alt="PL-2170f"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcd9d17aa9876f83cf2b8622c605c84e82b4b16?width=424"
              alt="PL-2250"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aac772528e59ba40d33b5cbf65fc3d810d1770?width=495"
              alt="PL-1050 CB Featured"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c40118dd42ea08d5032e2fb4873a2104195c0dd0?width=484"
              alt="PL-2250 V"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d79ae5e6811094536cebdcac39962789ce93eedd?width=526"
              alt="PL-3050(CB)"
            />
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects-section" id="reviews">
        <h2 className="section-title">
          Explore <span className="highlight-green">Performance Louvers</span>
          <br />
          in Recent Projects
        </h2>

        <div className="project-showcase">
          <div className="project-images">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe41e430aea2b3a6dcdbe9db6a77028e38bea45f?width=1786"
              alt="Main Project"
              className="main-project-image"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2db2f56804944954343c66296b3e0228ebfecca?width=1468"
              alt="Project Detail 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f00a4945dff387b4c43f605e68c1b1cd053dcf5?width=1468"
              alt="Project Detail 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c84294eb88ec877b017284d214e36e96e1bdd7?width=1122"
              alt="Project Detail 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84931a16090db0a705a7c85efc5fa9c807c46ff5?width=1122"
              alt="Project Detail 4"
            />
          </div>

          <div className="project-info">
            <div className="project-details">
              <div className="location">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac84a0f21581a5f03abc37f57aed21260c464b8b?width=66"
                  alt="Location Icon"
                />
                <span>Kansas City, Utopia</span>
              </div>
              <h3>UPT02 House</h3>
              <p>
                Installation of PL-3070 and PL-3070V double bank louvers for
                rain defense and airflow control in data centre.
              </p>
            </div>

            <div className="product-highlight">
              <div className="product-info-card">
                <h4 className="product-name">PL-3070</h4>
                <p className="product-type">Double bank louver with mullion</p>
                <div className="client-info">
                  <strong>Client/Company</strong>
                  <span>BitConnectX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator active-indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>

        <div className="project-nav-arrows">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/374e89b38d1ac95b1d9084d51b6da2729667b6ce?width=73"
            alt="Previous"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dd19a65b17a47d5fee0a1858f9ec0ea661775a4?width=73"
            alt="Next"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">
          Ready to find the perfect{" "}
          <span className="highlight-green">Performance Louver</span>?
        </h2>
        <button
          className="find-louver-btn cta-btn"
          onClick={handleFindLouverClick}
        >
          Find your louver
        </button>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/691b4ce4126b21a2b826b1369a540af253ae50a2?width=1107"
              alt="Fameline Logo"
            />
          </div>
          <div className="footer-contact">
            <p>Get in touch with us.</p>
            <div className="social-links">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/874780fdae3873b40bcc1852318ed6320cdb6977?width=160"
                alt="Social 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c416fc71842302268e4f771e6184ea6c18d6bc5?width=164"
                alt="Social 2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a733384a11b736f1e1dc906559f454d5989d2b?width=154"
                alt="Social 3"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e22febd130ff1084bc82dd56244a6e1607893aa1?width=163"
                alt="Social 4"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Fameline APSG Pte Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
