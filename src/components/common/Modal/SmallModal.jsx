import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { BsFileTextFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { closeAllModals } from "../../../common/Modals/modal.slice";

const SmallModal = ({ children, styles }) => {
  const dispatch = useDispatch();

  const closeModals = () => {
    dispatch(closeAllModals());
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${styles}`}
    >
      <div
        onClick={closeModals}
        className="fixed inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-none"
      ></div>
      <div className="relative bg-white rounded text-sm w-full text-gray-800 z-60">
        {children}
      </div>
    </div>
  );
};

export default SmallModal;
