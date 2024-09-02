import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const CustomDropDown = ({
  options,
  onSelect,
  placeHolder = "Select",
  label = "Label",
  size = "md", // Default size is medium
  inputClasses = "", // Custom input classes
  name, // Add name prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue, optionLabel) => {
    setSelectedOption(optionLabel);
    setIsOpen(false);
    onSelect(name, optionValue); // Include name in onSelect callback
  };

  const dropdownSizeClass =
    size === "xs"
      ? "h-7 text-xs"
      : size === "sm"
      ? "h-10 text-sm"
      : size === "md"
      ? "h-14 text-base"
      : size === "lg"
      ? "h-16 text-lg"
      : "h-14 text-base"; // Default size class

  return (
    <div className="relative">
      <p className="font-bold">{label}</p>
      <div
        onClick={toggleDropdown}
        className={`flex items-center px-6 text-black bg-[#F3F5F9] rounded-md focus:outline-none focus:bg-blue-600 dark:bg-deskit-black-100 dark:text-white ${dropdownSizeClass} ${inputClasses}`}
      >
        {!selectedOption ? (
          <div className="flex justify-between items-center w-full">
            <p>{placeHolder} </p>
            {isOpen ? (
              <MdOutlineArrowDropUp size={25} color="#172F51" />
            ) : (
              <MdOutlineArrowDropDown size={25} color="#172F51" />
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full cursor-pointer">
            <p>{selectedOption}</p>{" "}
            {isOpen ? (
              <MdOutlineArrowDropUp size={25} color="#172F51" />
            ) : (
              <MdOutlineArrowDropDown size={25} color="#172F51" />
            )}
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute mt-2 w-full max-h-[350px] overflow-auto bg-white border border-gray-300 shadow-lg rounded-lg z-10"
          style={{
            scrollbarWidth: "thin" /* For Firefox */,
            WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
            scrollbarTrackColor:
              "#f1f1f1" /* Background color of the scrollbar track */,
            scrollbarColor:
              "#E2E4E8 #ffffff" /* Color of the scrollbar thumb and track */,
            borderRadius: "8px" /* Radius of the scrollbar thumb */,
          }}
        >
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.value, option.label)}
              className={`flex items-center w-full border-b-2 px-4 py-2 gap-x-6 hover:bg-gray-100 cursor-pointer ${
                size === "sm" ? "h-10" : size === "lg" ? "h-16" : "h-14"
              }`}
            >
              <div className="text-sm">{option.label}</div>
              {option.img && (
                <img className="w-[25px]" src={option.img} alt={option.label} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
