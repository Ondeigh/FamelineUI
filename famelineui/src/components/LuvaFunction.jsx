import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDropdown from "./ProjectDropdown";
import "./LuvaFunction.css";

const LuvaFunction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    performancePriority: "",
    technicalGuidance: "",
  });

  const performancePriorityOptions = [
    "Max airflow",
    "High weather protection",
    "Balanced cost/performance",
    "Cost-effective",
  ];

  const handleDropdownChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      performancePriority: value,
    }));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      technicalGuidance: e.target.value,
    }));
  };

  const handleBackClick = () => {
    navigate("/luva-context");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/luva-aesthetics");
  };

  return (
    <div className="luva-function-container">
      {/* Black Border */}
      <div className="function-border" />

      {/* Background Gradient */}
      <div className="function-background-gradient" />

      {/* Top Left Icon - Back to LuvaContext */}
      <button
        className="function-back-icon"
        onClick={handleBackClick}
        aria-label="Go back to context"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f73c6f5a752a302418d97a35eea80849eb0bc4d?width=103"
          alt=""
        />
      </button>

      {/* Progress Bar */}
      <div className="function-progress-bar-container">
        <svg
          width="575"
          height="59"
          viewBox="0 0 575 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.0186 2.5C43.6643 2.5 55.5371 14.3728 55.5371 29.0186C55.5371 43.6643 43.6643 55.5371 29.0186 55.5371C14.3728 55.5371 2.5 43.6643 2.5 29.0186C2.5 14.3728 14.3728 2.5 29.0186 2.5Z"
            fill="#CCFFCD"
            fillOpacity="0.2"
            stroke="#CCFFD9"
            strokeWidth="5"
          />
          <g filter="url(#filter0_d_2001_893)">
            <rect
              x="15.5684"
              y="15.5684"
              width="26.7368"
              height="24.9793"
              fill="url(#pattern0_2001_893)"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            d="M133.019 2.5C147.664 2.5 159.537 14.3728 159.537 29.0186C159.537 43.6643 147.664 55.5371 133.019 55.5371C118.373 55.5371 106.5 43.6643 106.5 29.0186C106.5 14.3728 118.373 2.5 133.019 2.5Z"
            fill="#CCFFCD"
            fillOpacity="0.2"
            stroke="#CCFFD9"
            strokeWidth="5"
          />
          <g filter="url(#filter1_d_2001_893)">
            <rect
              x="119.568"
              y="15.5684"
              width="26.7368"
              height="24.9793"
              fill="url(#pattern1_2001_893)"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            d="M237.019 2.5C251.664 2.5 263.537 14.3728 263.537 29.0186C263.537 43.6643 251.664 55.5371 237.019 55.5371C222.373 55.5371 210.5 43.6643 210.5 29.0186C210.5 14.3728 222.373 2.5 237.019 2.5Z"
            fill="#CCFFCD"
            fillOpacity="0.2"
            stroke="#CCFFD9"
            strokeWidth="5"
          />
          <g filter="url(#filter2_d_2001_893)">
            <rect
              x="223.568"
              y="15.5684"
              width="26.7368"
              height="24.9793"
              fill="url(#pattern2_2001_893)"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            d="M545.897 2.5C560.543 2.5 572.416 14.3728 572.416 29.0186C572.416 43.6643 560.543 55.5371 545.897 55.5371C531.252 55.5371 519.379 43.6643 519.379 29.0186C519.379 14.3728 531.252 2.5 545.897 2.5Z"
            fill="black"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M442.618 2.5C457.264 2.5 469.137 14.3728 469.137 29.0186C469.137 43.6643 457.264 55.5371 442.618 55.5371C427.972 55.5371 416.1 43.6643 416.1 29.0186C416.1 14.3728 427.972 2.5 442.618 2.5Z"
            fill="black"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M339.339 2.5C353.985 2.5 365.857 14.3728 365.857 29.0186C365.857 43.6643 353.985 55.5371 339.339 55.5371C324.693 55.5371 312.82 43.6643 312.82 29.0186C312.82 14.3728 324.693 2.5 339.339 2.5Z"
            fill="black"
            stroke="white"
            strokeWidth="5"
          />
          <defs>
            <filter
              id="filter0_d_2001_893"
              x="11.5684"
              y="15.5684"
              width="34.7368"
              height="32.9795"
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
                result="effect1_dropShadow_2001_893"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2001_893"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern0_2001_893"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2001_893"
                transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
              />
            </pattern>
            <filter
              id="filter1_d_2001_893"
              x="115.568"
              y="15.5684"
              width="34.7368"
              height="32.9795"
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
                result="effect1_dropShadow_2001_893"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2001_893"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern1_2001_893"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2001_893"
                transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
              />
            </pattern>
            <filter
              id="filter2_d_2001_893"
              x="219.568"
              y="15.5684"
              width="34.7368"
              height="32.9795"
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
                result="effect1_dropShadow_2001_893"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2001_893"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern2_2001_893"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2001_893"
                transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
              />
            </pattern>
          </defs>
        </svg>
      </div>

      {/* Top Right Icon - Go to HomePage */}
      <button
        className="function-home-icon"
        onClick={handleHomeClick}
        aria-label="Go to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d89c5f5ac6e32a95b4b58ce811bd9503084c272?width=173"
          alt=""
        />
      </button>

      {/* Main Content */}
      <div className="function-main-content">
        <h1 className="function-main-title">Performance Preferences</h1>

        <div className="function-questions-container">
          {/* Performance Priority Section */}
          <div className="function-question-section">
            <h2 className="function-question-title">
              What is your performance priority?
            </h2>
            <ProjectDropdown
              placeholder="Choose priority"
              options={performancePriorityOptions}
              value={formData.performancePriority}
              onChange={handleDropdownChange}
              width="553px"
              className="priority-dropdown"
            />
          </div>

          {/* Technical Guidance Section */}
          <div className="function-question-section">
            <h2 className="function-guidance-title">
              Further technical guidance{" "}
              <span className="optional-text">(Optional)</span>
            </h2>
            <div className="function-input-container">
              <input
                type="text"
                className="function-input"
                placeholder="E.g. <1000CFM Airflow, ..."
                value={formData.technicalGuidance}
                onChange={handleInputChange}
                aria-label="Technical guidance input"
              />
            </div>
            <p className="function-guidance-subtitle">
              This helps us understand your technical needs
              but is not required at this stage.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Right Image */}
      <div className="function-bottom-decoration">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/847a1056398cd76a0bd3d553df5b5c8c61a01103?width=549"
          alt=""
        />
      </div>

      {/* Bottom Right Navigation Button */}
      <button
        className="function-next-icon"
        onClick={handleNextClick}
        aria-label="Continue to next step"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f4cf8838a857ff92280f4887a45169e91281f1e?width=338"
          alt=""
        />
      </button>
    </div>
  );
};

export default LuvaFunction;
