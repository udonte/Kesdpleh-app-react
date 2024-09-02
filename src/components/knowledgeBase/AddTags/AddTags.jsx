// src/components/AddTags.js
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const AddTags = ({
  initialTags = [], // Default empty array for initial tags
  placeholder = "Type a tag", // Default placeholder text
  className = "", // Additional class names for customization
  onAddTag = () => {}, // Callback for adding a tag
  onRemoveTag = () => {}, // Callback for removing a tag
}) => {
  const [tags, setTags] = useState(initialTags);
  const [showTagbox, setShowTagbox] = useState(false);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value.trim();
    if (!value) return;
    setTags([...tags, value]);
    e.target.value = "";
    onAddTag(value); // Notify parent component of tag addition
  }

  function removeTag(index) {
    const removedTag = tags[index];
    setTags(tags.filter((_, i) => i !== index));
    onRemoveTag(removedTag); // Notify parent component of tag removal
  }

  return (
    <div className={`${className}`}>
      {showTagbox ? (
        <div className="flex flex-col gap-4 mt-4 py-4 px-4 rounded-md w-full max-w-xl bg-[#F3F5F9] dark:bg-deskit-black-100">
          <input
            onKeyDown={handleKeyDown}
            type="text"
            className="w-full py-2 rounded-md outline-none placeholder:bg-[#F3F5F9] bg-[#F3F5F9] dark:bg-deskit-black-100 placeholder:dark:bg-deskit-black-100"
            placeholder={placeholder}
          />
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm font-medium w-fit"
              >
                <button
                  onClick={() => removeTag(index)}
                  className="mr-2 font-bold text-deskit-blue-600 hover:text-deskit-blue-300"
                >
                  <IoCloseOutline size={20} />
                </button>
                <span className="dark:text-deskit-black-500">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p
          className="text-deskit-orange-700 text-sm cursor-pointer"
          onClick={() => setShowTagbox(true)}
        >
          Add Tags
        </p>
      )}
    </div>
  );
};

export default AddTags;
