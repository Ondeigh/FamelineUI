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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f73c6f5a752a302418d97a35eea80849eb0bc4d?width=103"
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
        viewBox="0 0 1045 1026"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g opacity="0.6" filter="url(#filter0_f_2006_902)">
          <ellipse
            cx="522.351"
            cy="513.439"
            rx="322.2"
            ry="312.47"
            fill="#8CE88E"
          />
        </g>
        <g opacity="0.6" filter="url(#filter1_f_2006_902)">
          <ellipse
            cx="530.583"
            cy="545.247"
            rx="231.64"
            ry="238.001"
            fill="#111111"
          />
        </g>
        <g filter="url(#filter2_d_2006_902)">
          <rect
            x="153"
            y="186"
            width="573.685"
            height="540.368"
            fill="url(#pattern0_2006_902)"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2006_902"
            x="0.150879"
            y="0.96875"
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
              result="effect1_foregroundBlur_2006_902"
            />
          </filter>
          <filter
            id="filter1_f_2006_902"
            x="98.9438"
            y="107.246"
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
              result="effect1_foregroundBlur_2006_902"
            />
          </filter>
          <filter
            id="filter2_d_2006_902"
            x="149"
            y="186"
            width="581.685"
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
              result="effect1_dropShadow_2006_902"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2006_902"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_2006_902"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2006_902"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d89c5f5ac6e32a95b4b58ce811bd9503084c272?width=173"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/293803abaf4ff6580c97a1544d83b383a48fefb9?width=550"
          alt=""
        />
      </button>
    </div>
  );
};

export default LuvaStart;
