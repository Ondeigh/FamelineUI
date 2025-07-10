import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LuvaAesthetics.css";

const LuvaAesthetics = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mullionVisibility: true, // true = visible, false = non-visible
    bladeOrientation: true, // true = horizontal, false = vertical
    colorHex: "",
    furtherCustomisation: "",
  });

  const handleToggleChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBackClick = () => {
    navigate("/luva-function");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    console.log("Navigate to next step", formData);
    // Navigation to next page will be implemented later
  };

  return (
    <div className="luva-aesthetics-container">
      {/* Background Gradient */}
      <div className="aesthetics-background-gradient" />

      {/* Green Glow Effect */}
      <div className="aesthetics-green-glow" />

      {/* Top Left Icon - Back to LuvaFunction */}
      <button
        className="aesthetics-back-icon"
        onClick={handleBackClick}
        aria-label="Go back to function"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6e7244d56dd83755aecc8b48ba838061dd162a?width=102"
          alt=""
        />
      </button>

      {/* Progress Bar */}
      <div className="aesthetics-progress-bar-container">
        <div className="aesthetics-progress-bar">
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
            <g filter="url(#filter0_d_318_2814)">
              <rect
                x="15.5684"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern0_318_2814)"
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
            <g filter="url(#filter1_d_318_2814)">
              <rect
                x="119.568"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern1_318_2814)"
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
            <g filter="url(#filter2_d_318_2814)">
              <rect
                x="223.568"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern2_318_2814)"
                shapeRendering="crispEdges"
              />
            </g>
            <path
              d="M340.019 2.5C354.664 2.5 366.537 14.3728 366.537 29.0186C366.537 43.6643 354.664 55.5371 340.019 55.5371C325.373 55.5371 313.5 43.6643 313.5 29.0186C313.5 14.3728 325.373 2.5 340.019 2.5Z"
              fill="#CCFFCD"
              fillOpacity="0.2"
              stroke="#CCFFD9"
              strokeWidth="5"
            />
            <g filter="url(#filter3_d_318_2814)">
              <rect
                x="326.568"
                y="15.5681"
                width="26.9008"
                height="24.9793"
                fill="url(#pattern3_318_2814)"
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
            <defs>
              <filter
                id="filter0_d_318_2814"
                x="11.5684"
                y="15.5681"
                width="34.9004"
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
                  result="effect1_dropShadow_318_2814"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2814"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0_318_2814"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2814"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
              <filter
                id="filter1_d_318_2814"
                x="115.568"
                y="15.5681"
                width="34.9004"
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
                  result="effect1_dropShadow_318_2814"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2814"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern1_318_2814"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2814"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
              <filter
                id="filter2_d_318_2814"
                x="219.568"
                y="15.5681"
                width="34.9004"
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
                  result="effect1_dropShadow_318_2814"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2814"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern2_318_2814"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2814"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
              <filter
                id="filter3_d_318_2814"
                x="322.568"
                y="15.5681"
                width="34.9004"
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
                  result="effect1_dropShadow_318_2814"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_2814"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern3_318_2814"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_318_2814"
                  transform="matrix(0.0013986 0 0 0.00149701 -1.06993 -0.684132)"
                />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>

      {/* Top Right Icon - Go to HomePage */}
      <button
        className="aesthetics-home-icon"
        onClick={handleHomeClick}
        aria-label="Go to home"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5026a8eca5519d393f77ca50a98d51d6ff255c80?width=172"
          alt=""
        />
      </button>

      {/* Main Title */}
      <h1 className="aesthetics-main-title">Aesthetics</h1>

      {/* Central Preview Image */}
      <div className="aesthetics-preview-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5afbda61e0049be59d14cef27da37a9859c339e4?width=988"
          alt="Louver preview"
        />
      </div>

      {/* Left Section */}
      <div className="aesthetics-left-section">
        {/* Mullion Visibility Section */}
        <div className="aesthetics-section">
          <h2 className="section-title">Mullion visibility</h2>
          <div className="toggle-container">
            <div
              className="toggle-switch"
              onClick={() => handleToggleChange("mullionVisibility")}
            >
              <div className="toggle-track"></div>
              <div
                className={`toggle-thumb ${formData.mullionVisibility ? "visible" : "non-visible"}`}
              ></div>
              <div className="toggle-icon-left">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25ed1f94a90bae0261aacf3e154d17a6591d2df?width=162"
                  alt="Visible"
                />
              </div>
              <div className="toggle-icon-right">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ff1a3dfbcda2ba1b3b6ebe353aff1b72c101ee?width=157"
                  alt="Non-visible"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blade Orientation Section */}
        <div className="aesthetics-section">
          <h2 className="section-title">Blade orientation</h2>
          <div className="toggle-container">
            <div
              className="toggle-switch"
              onClick={() => handleToggleChange("bladeOrientation")}
            >
              <div className="toggle-track"></div>
              <div
                className={`toggle-thumb ${formData.bladeOrientation ? "horizontal" : "vertical"}`}
              ></div>
              <div className="toggle-icon-left">
                <div className="orientation-icon horizontal-icon">
                  <div className="horizontal-line"></div>
                  <div className="horizontal-line"></div>
                  <div className="horizontal-line"></div>
                  <div className="horizontal-line"></div>
                </div>
              </div>
              <div className="toggle-icon-right">
                <div className="orientation-icon vertical-icon">
                  <div className="vertical-line"></div>
                  <div className="vertical-line"></div>
                  <div className="vertical-line"></div>
                  <div className="vertical-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="aesthetics-right-section">
        {/* Color Section */}
        <div className="aesthetics-section">
          <h2 className="section-title color-title">
            Colour <span className="hex-text">(Hex)</span>
          </h2>
          <div>
            <input
              type="text"
              className="color-input"
              placeholder="E.g. #808080"
              value={formData.colorHex}
              onChange={(e) => handleInputChange("colorHex", e.target.value)}
              aria-label="Color hex value input"
            />
          </div>
        </div>

        {/* Further Customisation Section */}
        <div className="aesthetics-section">
          <h2 className="section-title">Further customisation</h2>
          <div>
            <textarea
              className="customisation-input"
              placeholder="E.g. Dimensions, material, aesthetics, blade thickness, blade-to-blade distance."
              value={formData.furtherCustomisation}
              onChange={(e) =>
                handleInputChange("furtherCustomisation", e.target.value)
              }
              aria-label="Further customisation input"
            />
          </div>
        </div>
      </div>

      {/* Disclaimer Text */}
      <div className="aesthetics-disclaimer">
        This is a drafted visual of your aesthetic and design needs, and is not
        a final representation of your louver.
      </div>

      {/* Bottom Right Navigation Button */}
      <button
        className="aesthetics-bottom-navigation"
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

export default LuvaAesthetics;
