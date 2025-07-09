import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LuvaLocation.css";

const LuvaLocation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    environment: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const environmentOptions = [
    "City center",
    "Suburban",
    "Coastal (near water)",
    "Rural (open)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackClick = () => {
    navigate("/luva-start");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEnvironmentSelect = (environment) => {
    setFormData((prev) => ({ ...prev, environment }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="luva-location-container">
      {/* Background Gradient */}
      <div className="background-gradient" />

      {/* Top Left Icon - Back to LuvaStart */}
      <button
        className="back-icon"
        onClick={handleBackClick}
        aria-label="Go back to previous step"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6e7244d56dd83755aecc8b48ba838061dd162a?width=102"
          alt=""
        />
      </button>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <svg
            width="575"
            height="59"
            viewBox="0 0 575 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0186 2.5C43.6643 2.5 55.5371 14.3728 55.5371 29.0186C55.5371 43.6643 43.6644 55.5371 29.0186 55.5371C14.3728 55.5371 2.5 43.6643 2.5 29.0186C2.5 14.3728 14.3728 2.5 29.0186 2.5Z"
              fill="#CCFFCD"
              fillOpacity="0.2"
              stroke="#CCFFD9"
              strokeWidth="5"
            ></path>
            <g filter="url(#filter0_d_318_2817)">
              <rect
                x="15.5684"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern0_318_2817)"
                shapeRendering="crispEdges"
              ></rect>
            </g>
            <path
              d="M133.019 2.5C147.664 2.5 159.537 14.3728 159.537 29.0186C159.537 43.6643 147.664 55.5371 133.019 55.5371C118.373 55.5371 106.5 43.6643 106.5 29.0186C106.5 14.3728 118.373 2.5 133.019 2.5Z"
              stroke="white"
              strokeWidth="5"
            ></path>
            <path
              d="M236.059 2.5C250.704 2.5 262.577 14.3728 262.577 29.0186C262.577 43.6643 250.704 55.5371 236.059 55.5371C221.413 55.5371 209.54 43.6643 209.54 29.0186C209.54 14.3728 221.413 2.5 236.059 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            ></path>
            <path
              d="M545.898 2.5C560.544 2.5 572.417 14.3728 572.417 29.0186C572.417 43.6643 560.544 55.5371 545.898 55.5371C531.252 55.5371 519.379 43.6643 519.379 29.0186C519.379 14.3728 531.252 2.5 545.898 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            ></path>
            <path
              d="M442.618 2.5C457.264 2.5 469.137 14.3728 469.137 29.0186C469.137 43.6643 457.264 55.5371 442.618 55.5371C427.972 55.5371 416.1 43.6643 416.1 29.0186C416.1 14.3728 427.972 2.5 442.618 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            ></path>
            <path
              d="M339.338 2.5C353.984 2.5 365.857 14.3728 365.857 29.0186C365.857 43.6643 353.984 55.5371 339.338 55.5371C324.693 55.5371 312.82 43.6643 312.82 29.0186C312.82 14.3728 324.693 2.5 339.338 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            ></path>
            <defs>
              <filter
                id="filter0_d_318_2817"
                x="11.5684"
                y="15.5681"
                width="34.9009"
                height="32.9793"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_318_2817"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2817"
                  result="shape"
                ></feBlend>
              </filter>
              <pattern
                id="pattern0_318_2817"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2817"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                ></use>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>

      {/* Top Right Icon - Back to HomePage */}
      <button
        className="home-icon"
        onClick={handleHomeClick}
        aria-label="Go to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5026a8eca5519d393f77ca50a98d51d6ff255c80?width=172"
          alt=""
        />
      </button>

      {/* Main Phone Image */}
      <div className="phone-image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/362ce2a740624797d39c586e1daec53860ea9614?width=850"
          alt=""
          className="phone-image"
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="main-title">Location</h1>

        <div className="form-section">
          <label className="question-label">Where is your project?</label>
          <div className="input-container location-input">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c192d8c4302d65ceadf2d5e8d54ef337eebd3c?width=88"
              alt=""
              className="input-icon"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="text-input"
              placeholder="E.g. Upper Changi, Singapore"
            />
          </div>
        </div>

        <div className="form-section">
          <label className="question-label">What is the environment?</label>
          <div className="dropdown-container">
            <div className="dropdown-input" onClick={handleDropdownToggle}>
              <span
                className={`dropdown-placeholder ${formData.environment ? "selected" : ""}`}
              >
                {formData.environment || "Choose environment"}
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd1a8ebd7002c095ef00f5519a431206da67da7?width=54"
                alt=""
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-options">
                {environmentOptions.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-option"
                    onClick={() => handleEnvironmentSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Right Decorative Image */}
      <div className="bottom-decoration">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f4cf8838a857ff92280f4887a45169e91281f1e?width=338"
          alt=""
        />
      </div>
    </div>
  );
};

export default LuvaLocation;
