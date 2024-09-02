import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import placeholder from "../../../assets/adeola.png";
import CustomCheckbox from "../../../components/common/CustomCheckbox";

const EmployeeCard = ({ id, name, email, phone, role, dotOptions }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleDotOptionClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="dark:bg-deskit-black-500 shadow-lg shadow-slate-200 dark:shadow-deskit-black-100 py-8 px-8 rounded-xl flex flex-col justify-between gap-4 h-[300px] relative">
      {/* top */}
      <div className="flex items-center justify-between">
        <div>
          <CustomCheckbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            name="customCheckbox"
            className={
              "accent-deskit-blue-600 checked:bg-deskit-blue-600  dark:checked:bg-deskit-black-500 dark:accent-black"
            }
            size="md"
          />
        </div>
        <button
          className="action-button flex justify-center items-center"
          onClick={handleDotOptionClick}
        >
          <BsThreeDotsVertical size={20} />
        </button>
      </div>
      {/* middle */}
      <div className="flex flex-col items-center gap-1 border-b border-gray-200 pb-2 ">
        <div className="rounded-full flex items-center justify-center h-[60px] w-[60px] overflow-hidden mb-4">
          <img
            src={placeholder}
            alt={"adeola"}
            className="rounded-full h-full w-full object-cover"
          />
        </div>
        <p className="font-bold">{name}</p>
        <p className="text-xs font-medium">{email}</p>
        <p className="text-xs">{role}</p>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between font-medium">
        <div>
          <p className="text-xs">ID</p>
          <p className="text-sm">{id}</p>
        </div>
        <div>
          <p className="text-xs">Phone</p>
          <p className="text-sm">{phone}</p>
        </div>
      </div>
      {showDropDown && (
        <div
          onMouseLeave={() => {
            setShowDropDown(!showDropDown);
          }}
          className="absolute z-50 top-[50px] text-deskit-blue-300 w-fit  min-w-max right-[40px] border rounded bg-white shadow-lg"
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
    </div>
  );
};

export default EmployeeCard;
