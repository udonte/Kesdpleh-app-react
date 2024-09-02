import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import CustomCheckbox from "../CustomCheckbox";

const TableRow = ({ children, dotOptions, id, checkbox }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleDotOptionClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <tr className="rounded-lg  dark:bg-deskit-black-150 dark:text-white">
      {checkbox && (
        <td className="px-6 py-4 whitespace-nowrap ">
          <CustomCheckbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            name="customCheckbox"
            size="sm"
            className={
              "accent-deskit-blue-600 checked:bg-deskit-blue-600 dark:checked:bg-deskit-black-400 dark:accent-deskit-black-400 "
            }
          />
        </td>
      )}

      {children}
      {dotOptions && (
        <td
          onClick={() => handleDotOptionClick()}
          className="relative pr-12 w-[80px] px-6 py-4 whitespace-nowrap text-center font-medium"
        >
          <div className="flex items-center justify-center w-full">
            <button className="action-button flex justify-center items-center">
              <BsThreeDotsVertical size={20} />
            </button>
          </div>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setShowDropDown(!showDropDown);
              }}
              className="absolute z-50 top-[40px] text-deskit-blue-300 w-fit  min-w-max right-[60px] top border rounded bg-white shadow-lg"
            >
              {dotOptions?.map((item, index) => (
                <div
                  onClick={() => {
                    item.callBack(id);
                  }}
                  key={index}
                  className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100  flex items-center shrink-0 hover:bg-gurugeeks-dark-100 cursor-pointer"
                >
                  {item.icon} <p className="text-left">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </td>
      )}
    </tr>
  );
};

export default TableRow;
