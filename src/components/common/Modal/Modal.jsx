import React from "react";
import { useDispatch } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { closeAllModals } from "../../../common/Modals/modal.slice";

const Modal = ({
  isOpen,
  title,
  children,
  width = "md",
  position = "center",
  showHeader = false, // Add a new prop to control header visibility
  showCloseIcon = false, // Add a new prop to control close icon visibility
}) => {
  const widths = {
    sm: "w-[35%]",
    md: "w-1/2",
    lg: "w-[65%]",
  };
  const dispatch = useDispatch();

  const closeModals = () => {
    dispatch(closeAllModals());
  };

  const modalStyleRight = {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s ease-in-out",
  };

  const modalStyleCenter = {
    display: isOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="relative h-full w-full transition-all">
      {/* right */}
      {position === "right" ? (
        <div
          className={`fixed inset-y-0 right-6 z-50 ${widths[width]} bg-white  dark:bg-deskit-black-100  transition-all rounded-2xl `}
          style={modalStyleRight}
        >
          {showHeader && ( // Conditionally render header based on prop
            <div className="px-8 mt-8">
              <div className="flex justify-between items-center h-8 w-full border-b border-gray-200 py-6">
                <h1 className="font-bold text-lg text-deskit-blue-300  dark:text-white ">
                  {title}
                </h1>
                {showCloseIcon && (
                  <div
                    className="p-2 rounded-lg bg-deskit-gray-200 dark:bg-deskit-black-100 flex items-center justify-center cursor-pointer"
                    onClick={closeModals}
                  >
                    <CgClose />
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="h-full p-8">{children}</div>
        </div>
      ) : (
        // center
        <div
          className="fixed inset-0 flex items-center justify-center z-50 "
          style={modalStyleCenter}
        >
          <div
            onClick={closeModals}
            className={`fixed inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-none ${
              isOpen ? "block" : "hidden"
            }`}
          ></div>
          <div className="bg-white rounded-xl z-50 px-8 py-4  dark:bg-deskit-black-300 transition-all ">
            {showHeader && ( // Conditionally render header based on prop
              <div className="flex justify-between items-center h-8">
                <div className="w-full">
                  <h1 className="font-bold text-lg text-deskit-blue-300  dark:text-white">
                    {title}
                  </h1>
                </div>
                <div
                  className="p-2 rounded-lg bg-deskit-gray-200 dark:bg-deskit-black-100 flex items-center justify-center cursor-pointer"
                  onClick={closeModals}
                >
                  <CgClose />
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
      <div
        onClick={closeModals}
        className={`inset-0 bg-gray-600 backdrop-blur fixed transition-all ${
          isOpen
            ? "block opacity-30 backdrop-blur-none"
            : "opacity-0 hidden -z-10"
        }`}
      />
    </div>
  );
};

export default Modal;
