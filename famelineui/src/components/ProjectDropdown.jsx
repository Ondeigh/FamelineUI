import React, { useState, useEffect, useRef } from "react";
import "./ProjectDropdown.css";

const ProjectDropdown = ({
  placeholder,
  options = [],
  value,
  onChange,
  width = "450px",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || "");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedOption(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`project-dropdown-container ${className}`}
      style={{ width }}
    >
      <div
        className={`dropdown-trigger ${isOpen ? "open" : ""} ${selectedOption ? "selected" : ""}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={selectedOption || placeholder}
      >
        <span className="dropdown-text">{selectedOption || placeholder}</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd1a8ebd7002c095ef00f5519a431206da67da7?width=54"
          alt=""
          className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className="dropdown-options-container"
          role="listbox"
          aria-label="Select an option"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-option ${selectedOption === option ? "active" : ""}`}
              onClick={() => handleOptionSelect(option)}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOptionSelect(option);
                }
              }}
              aria-selected={selectedOption === option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDropdown;
