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

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleNextToLocation = () => {
    navigate("/luva-location");
  };

  return (
    <div className="luva-start-container">
      {/* Top Left Icon - Back to HomePage */}
      <button
        className="top-left-icon"
        onClick={handleBackToHome}
        aria-label="Go back to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6e7244d56dd83755aecc8b48ba838061dd162a?width=102"
          alt=""
        />
      </button>

      {/* Main Content */}
      <div className="main-content">
        {/* I'm Luva Text */}
        <div className="intro-text">
          <span className="intro-white">I'm </span>
          <span className="intro-green">Luva</span>
          <span className="intro-white">,</span>
        </div>

        {/* Name Section */}
        <div className="form-section">
          <div className="question-text">What is your name?</div>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="E.g. John Doe"
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="form-section">
          <div className="question-text">What is your email?</div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="E.g. johndoe@gmail.com"
            />
          </div>
        </div>
      </div>

      {/* Green Gradient Orb SVG */}
      <svg
        className="gradient-orb"
        width="692"
        height="640"
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
        <g filter="url(#filter2_d_186_25)">
          <rect
            x="153"
            y="185.091"
            width="574.047"
            height="540.368"
            fill="url(#pattern0_186_25)"
            shapeRendering="crispEdges"
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
          <filter
            id="filter2_d_186_25"
            x="149"
            y="185.091"
            width="582.047"
            height="548.368"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_186_25"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_186_25"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_186_25"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_186_25"
              transform="matrix(0.000907441 0 0 0.000963391 -0.501589 -0.257225)"
            />
          </pattern>
        </defs>
      </svg>

      {/* Top Right Icon - Back to HomePage */}
      <button
        className="top-right-icon"
        onClick={handleBackToHome}
        aria-label="Go back to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5026a8eca5519d393f77ca50a98d51d6ff255c80?width=172"
          alt=""
        />
      </button>

      {/* Bottom Right Icon - Go to LuvaLocation */}
      <button
        className="bottom-right-icon"
        onClick={handleNextToLocation}
        aria-label="Continue to location"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f4cf8838a857ff92280f4887a45169e91281f1e?width=338"
          alt=""
        />
      </button>
    </div>
  );
};

export default LuvaStart;
