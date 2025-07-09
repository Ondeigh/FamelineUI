import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDropdown from "./ProjectDropdown";
import "./LuvaContext.css";

const LuvaContext = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    purpose: "",
    buildingType: "",
    buildingHeight: "",
  });

  const purposeOptions = [
    "Fresh air intake",
    "Exhaust air outlet",
    "Natural ventilation",
    "Equipment screening",
    "Architectural feature",
  ];

  const buildingTypeOptions = [
    "Commercial",
    "Residential",
    "Industrial",
    "Institutional",
    "Warehouse",
  ];

  const buildingHeightOptions = [
    "Low-rise (1-3 floors)",
    "Mid-rise (4-12 floors)",
    "High-rise (>12 floors)",
  ];

  const handleDropdownChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBackClick = () => {
    navigate("/luva-location");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="luva-context-container">
      {/* Background Gradient */}
      <div className="context-background-gradient" />

      {/* Top Left Icon - Back to LuvaLocation */}
      <button
        className="context-back-icon"
        onClick={handleBackClick}
        aria-label="Go back to location"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6e7244d56dd83755aecc8b48ba838061dd162a?width=102"
          alt=""
        />
      </button>

      {/* Progress Bar */}
      <div className="context-progress-bar-container">
        <div className="context-progress-bar">
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
            />
            <g filter="url(#filter0_d_318_2816)">
              <rect
                x="15.5684"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern0_318_2816)"
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
            <g filter="url(#filter1_d_318_2816)">
              <rect
                x="119.568"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern1_318_2816)"
                shapeRendering="crispEdges"
              />
            </g>
            <path
              d="M236.059 2.5C250.704 2.5 262.577 14.3728 262.577 29.0186C262.577 43.6643 250.704 55.5371 236.059 55.5371C221.413 55.5371 209.54 43.6643 209.54 29.0186C209.54 14.3728 221.413 2.5 236.059 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            />
            <path
              d="M545.898 2.5C560.544 2.5 572.417 14.3728 572.417 29.0186C572.417 43.6643 560.544 55.5371 545.898 55.5371C531.252 55.5371 519.379 43.6643 519.379 29.0186C519.379 14.3728 531.252 2.5 545.898 2.5Z"
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
              d="M339.338 2.5C353.984 2.5 365.857 14.3728 365.857 29.0186C365.857 43.6643 353.984 55.5371 339.338 55.5371C324.693 55.5371 312.82 43.6643 312.82 29.0186C312.82 14.3728 324.693 2.5 339.338 2.5Z"
              fill="black"
              stroke="white"
              strokeWidth="5"
            />
            <defs>
              <filter
                id="filter0_d_318_2816"
                x="11.5684"
                y="15.5681"
                width="34.9009"
                height="32.9793"
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
                  result="effect1_dropShadow_318_2816"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2816"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0_318_2816"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2816"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
              <filter
                id="filter1_d_318_2816"
                x="115.568"
                y="15.5681"
                width="34.9009"
                height="32.9793"
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
                  result="effect1_dropShadow_318_2816"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2816"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern1_318_2816"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2816"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
            </defs>
          </svg>
        </div>

        {/* Progress indicator lines */}
        <div className="progress-indicators">
          <div className="progress-line green" style={{ left: "735px" }}></div>
          <div
            className="progress-line green-light"
            style={{ left: "839px" }}
          ></div>
          <div className="progress-line white" style={{ left: "942px" }}></div>
          <div className="progress-line white" style={{ left: "1045px" }}></div>
          <div className="progress-line white" style={{ left: "1149px" }}></div>
        </div>
      </div>

      {/* Top Right Icon - Go to HomePage */}
      <button
        className="context-home-icon"
        onClick={handleHomeClick}
        aria-label="Go to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5026a8eca5519d393f77ca50a98d51d6ff255c80?width=172"
          alt=""
        />
      </button>

      {/* Main Content */}
      <div className="context-main-content">
        <h1 className="context-main-title">Project Context</h1>

        <div className="questions-container">
          {/* Purpose Section */}
          <div className="question-section">
            <h2 className="question-title">What is the purpose?</h2>
            <ProjectDropdown
              placeholder="Choose purpose"
              options={purposeOptions}
              value={formData.purpose}
              onChange={(value) => handleDropdownChange("purpose", value)}
              width="553px"
              className="purpose-dropdown"
            />
          </div>

          {/* Building Type Section */}
          <div className="question-section">
            <h2 className="question-title">What is the building?</h2>
            <ProjectDropdown
              placeholder="Choose building type"
              options={buildingTypeOptions}
              value={formData.buildingType}
              onChange={(value) => handleDropdownChange("buildingType", value)}
              width="450px"
              className="building-dropdown"
            />
          </div>

          {/* Building Height Section */}
          <div className="question-section">
            <h2 className="question-title">What is the building height?</h2>
            <ProjectDropdown
              placeholder="Choose height"
              options={buildingHeightOptions}
              value={formData.buildingHeight}
              onChange={(value) =>
                handleDropdownChange("buildingHeight", value)
              }
              width="460px"
              className="height-dropdown"
            />
          </div>
        </div>
      </div>

      {/* Bottom Right Navigation Button */}
      <button
        className="context-bottom-navigation"
        onClick={() => console.log("Navigate to next step", formData)}
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

export default LuvaContext;
