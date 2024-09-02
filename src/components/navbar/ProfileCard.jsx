import React from "react";
import { closeAllModals } from "../../common/Modals/modal.slice";
import { HiUser } from "react-icons/hi2";
import { IoCall, IoCloseOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import placeholder from "../../assets/adeola.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const closeModals = () => {
    dispatch(closeAllModals());
  };

  const handleLogout = () => {
    dispatch(closeAllModals());
    navigate("/login");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 w-[200px] md:w-[300px]  bottom-[-500%] left-[-350%] md:bottom-[-500%] md:left-[-30%]  ">
      <div
        onClick={closeModals}
        className="fixed inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-none"
      ></div>
      <div className="absolute top-9 left-0 bg-white rounded text-sm w-full text-gray-800 z-60 dark:bg-deskit-black-400 dark:text-white">
        <div className="py-8">
          <div className="flex items-center justify-center flex-col text-center">
            <div className="rounded-full flex items-center justify-center h-[20px] w-[20px] md:w-[40px] md:h-[40px] overflow-hidden mb-4">
              <img
                src={placeholder}
                alt={""}
                className="rounded-full h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col font-bold">
              <p className="text-sm">Adedeji Fakeye</p>
              <p className="text-[10px]">Office Assistant</p>
              <p className="text-[10px]">
                Manager - <span>Location 1</span>
              </p>
            </div>
            <p className="bg-orange-200 text-orange-500 px-4 py-1 rounded-full font-bold text-xs mt-2">
              IT Support
            </p>
          </div>
        </div>
        {userRole !== "admin" && (
          <div className="flex flex-col gap-2 bg-[#F2F2FC] dark:bg-deskit-black-150 p-4 text-xs mb-4 text-black">
            <div className="flex items-center justify-between">
              <p className="dark:text-white">Average Resolution Time</p>
              <p className="bg-[#E2E2FF]  py-1 px-2 font-bold dark:bg-deskit-black-100 text-[#5D5FEF]">
                2hr
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="dark:text-white">Satisfaction Score</p>
              <p className="bg-[#E2E2FF] py-1 px-2 font-bold text-[#5D5FEF] dark:bg-deskit-black-100">
                4.5
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 bg-[#F2F2FC] dark:bg-deskit-black-150 p-4 text-xs text-deskit-blue-300">
          <div className="flex items-center gap-2">
            <HiUser color="#A6ABC8" />
            <p className="dark:text-white">ID: GU002</p>
          </div>
          <div className="flex items-center gap-2">
            <IoCall color="#A6ABC8" />
            <p className="dark:text-white">Phone: 0903454335</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail color="#A6ABC8" />
            <p className="dark:text-white">Email: fakeyejohn@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2 text-xs cursor-pointer">
            <BiSolidLogOut color="#A6ABC8" />
            <p className="" onClick={handleLogout}>
              Logout
            </p>
          </div>
          <div className="cursor-pointer" onClick={closeModals}>
            <IoCloseOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
