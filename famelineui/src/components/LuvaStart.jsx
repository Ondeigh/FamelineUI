import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LuvaStart.css";

const LuvaStart = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/luva-location");
  };

  return (
    <div className="luva-start-container">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={handleBackClick}
        aria-label="Go back"
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 13L19.5 26L32.5 39"
            stroke="#8CE88E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Top Left Logo */}
      {/* <img
        className="top-left-logo"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6e7244d56dd83755aecc8b48ba838061dd162a?width=102"
        alt="Luva Logo"
      /> */}

      {/* Main Content */}
      <div className="main-content">
        <div className="intro-text">
          <span className="intro-white">I'm </span>
          <span className="intro-green">Luva</span>
          <span className="intro-white">,</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="question-text">What is your name?</label>
            <div className="input-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="user-input"
                placeholder="E.g. John Doe"
              />
            </div>
          </div>

          <div className="form-section">
            <label className="question-text">What is your email?</label>
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="user-input"
                placeholder="E.g. johndoe@gmail.com"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Background Graphics */}
      <div className="background-graphics">
        {/* Green Blur Effects */}
        <div className="green-blur-1"></div>
        <div className="green-blur-2"></div>

        {/* 3D Graphics Pattern */}
        <div className="graphics-container">
          <svg
            className="graphics-svg"
            viewBox="0 0 1045 1025"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6" filter="url(#filter0_f_186_25)">
              <ellipse
                cx="522.351"
                cy="512.53"
                rx="322.2"
                ry="312.47"
                fill="#8CE88E"
              />
            </g>
            <g opacity="0.6" filter="url(#filter1_f_186_25)">
              <ellipse
                cx="530.584"
                cy="544.338"
                rx="231.64"
                ry="238.001"
                fill="#111111"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_186_25"
                x="0.151123"
                y="0.0595398"
                width="1044.4"
                height="1024.94"
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
                  result="effect1_foregroundBlur_186_25"
                />
              </filter>
              <filter
                id="filter1_f_186_25"
                x="98.9441"
                y="106.337"
                width="863.279"
                height="876.002"
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
                  result="effect1_foregroundBlur_186_25"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Home Button */}
      <button
        className="home-button"
        onClick={handleHomeClick}
        aria-label="Go to home"
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7 43.3333V28.1667H30.3V43.3333H41.1667V23.8333H47.6667L26 4.33337L4.33337 23.8333H10.8334V43.3333H21.7Z"
            fill="#8CE88E"
          />
        </svg>
      </button>

      {/* Bottom Decorative Images */}
      {/* <img
        className="bottom-left-decoration"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9c73a385c82973c353796e91c80e60496af3f5?width=338"
        alt="Decorative element"
      />

      <img
        className="top-right-decoration"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7905617f36f9f2509e87a55ae2ffbddac246c717?width=172"
        alt="Decorative element"
      /> */}

      {/* Next Button */}
      <button
        className="next-button"
        onClick={handleNextClick}
        aria-label="Continue to next step"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill="#8CE88E" />
          <path
            d="M24 18L36 30L24 42"
            stroke="#000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default LuvaStart;
