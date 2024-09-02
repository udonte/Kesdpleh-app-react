import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../common/Modals/modal.slice";
import { IoCloseOutline } from "react-icons/io5";
import Avatar from "../../assets/avatar.png";
import { BsFileTextFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const NotifCard = () => {
  const [hasComment, setHasComment] = useState(false);
  const dispatch = useDispatch();

  const closeModals = () => {
    dispatch(closeAllModals());
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 w-[200px] md:w-[300px] bottom-[-1000%] left-[-60%] md:bottom-[-550%] md:left-[-45%] ">
      <div
        onClick={closeModals}
        className="fixed inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-none"
      ></div>
      <div className="relative bg-white rounded text-sm w-full text-gray-800 z-60 dark:bg-deskit-black-400 dark:text-white">
        <div className="p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 ">
            <p className="font-bold">Your notifications</p>
            <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-fit">
              <p className="text-deskit-orange-700 text-xs cursor-pointer">
                Mark as read
              </p>
              <div className="cursor-pointer" onClick={closeModals}>
                <IoCloseOutline />
              </div>
            </div>
          </div>
          {/* notification container */}
          <div className="flex flex-col items-start gap-2 w-full text-xs">
            {/* single notification */}
            <div className="flex items-start gap-2 w-full border-b-[1px] border-gray-200 pb-4">
              {/* icon */}
              <div className="rounded-full p-1 flex- items-center justify-center bg-[#BCBDEE33]">
                <BsFileTextFill color="#A6ABC8" size={10} />
              </div>
              {/* content */}
              <div className="flex flex-col w-full gap-1">
                <div className="flex items-center justify-between w-full">
                  <p className="dark:text-deskit-black-50">
                    New{" "}
                    <span className="underline cursor-pointer font-bold  dark:text-white">
                      ticket
                    </span>{" "}
                    approval
                  </p>
                  <div>
                    <FaCircle size={10} className="text-deskit-orange-600" />
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="font-light dark:text-deskit-black-50">
                    Thursday, 2pm
                  </p>
                  <p className="italic dark:text-deskit-black-50">
                    2 hours ago
                  </p>
                </div>
                {/* comment */}
                {hasComment && (
                  <div className="bg-[#BCBDEE33] p-2 rounded-md text-xs ">
                    <div className="flex items-start gap-1">
                      <img src={Avatar} alt="avatar" width={20} />
                      <p>
                        I thought I fixed this issue sometime, ago why do we
                        have it raised again?
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifCard;
