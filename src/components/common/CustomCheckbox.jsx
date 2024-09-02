import React from "react";

const CustomCheckbox = ({
  checked,
  className,
  onChange,
  label = "",
  name,
  size = "md", // Default size is medium
}) => {
  const checkboxSizeClass =
    size === "xs"
      ? "w-3 h-3"
      : size === "sm"
      ? "w-4 h-4"
      : size === "md"
      ? "w-5 h-5"
      : size === "lg"
      ? "w-6 h-6"
      : "w-5 h-5"; // Default size class

  return (
    <label className="flex items-center gap-x-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`checked:border-transparent transition-all cursor-pointer ${className} ${checkboxSizeClass}`}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
