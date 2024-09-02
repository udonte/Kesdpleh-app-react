import React from "react";
import CustomInput from "../common/CustomInput/CustomInput";
import { FaBell, FaCircle, FaSearch } from "react-icons/fa";
import DeskitWhiteLogo from "../../assets/DeskIt.svg";
import DeskitBlackLogo from "../../assets/DeskitBlackLogo.svg";

import DeskitMiniLogo from "../../assets/DeskitMiniLogo.png";
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../common/Modals/modal.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../common/Modals/modal.slice";

import ProfileCard from "./ProfileCard";
import NotifCard from "./NotifCard";
import placeholder from "../../assets/adeola.png";

const Navbar = () => {
  const userRole = localStorage.getItem("userRole");
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const isProfileModalOpen = modals.MANAGER_profilecard;
  const isNotifModalOpen = modals.NOTIFICATION_card;

  const openProfileModal = () => {
    dispatch(openModalByName("MANAGER_profilecard"));
  };

  const openNotifModal = () => {
    dispatch(openModalByName("NOTIFICATION_card"));
  };

  return (
    <nav
      className={`px-4 py-2 dark:bg-deskit-black-500 dark:text-white  dark:border-b-[1px]  dark:border-deskit-black-150 ${
        userRole === "admin" ? "bg-white" : "bg-deskit-blue-300"
      } text-gray-200 fixed z-10 w-full`}
    >
      <div className="flex w-full items-center gap-4 md:gap-24">
        <Link
          to="/"
          className="flex items-center justify-center md:justify-start space-x-2 px-4"
        >
          <span className="text-2xl font-extrabold lg:hidden md:hidden">
            <img src={DeskitMiniLogo} alt="Deskit" width={25} />
          </span>
          <span className="text-2xl font-extrabold hidden md:block dark:block">
            <img src={DeskitWhiteLogo} alt="Deskit" />
          </span>
          <div className="dark:hidden">
            {userRole === "admin" ? (
              <span className="text-2xl font-extrabold hidden md:block">
                <img src={DeskitBlackLogo} alt="Deskit" />
              </span>
            ) : (
              <span className="text-2xl font-extrabold hidden md:block">
                <img src={DeskitWhiteLogo} alt="Deskit" />
              </span>
            )}
          </div>
        </Link>
        <div className="flex items-center justify-between w-full ">
          <div className="w-full md:w-[30%] relative mr-4 md:mr-0">
            <div className="w-full">
              <CustomInput
                size={"small"}
                placeholder={"Search"}
                inputClassName={`rounded-xl px-4 py-2 pr-4 text-sm ${
                  userRole === "admin" ? "text-gray-700" : "bg-deskit-blue-600"
                } `}
              />
              <div className="absolute top-2 right-3 text-gray-500 font-thin">
                <FaSearch />
              </div>
            </div>
          </div>
          <div
            className={`relative ${
              userRole === "admin" ? "text-deskit-blue-300" : "text-white"
            }`}
          >
            <div
              className={`flex items-center gap-2 md:gap-4 text-sm dark:text-white `}
            >
              <p className={`${userRole === "admin" ? "font-bold" : ""}`}>
                Company
              </p>
              <div className="font-thin"> | </div>
              <div className="relative cursor-pointer" onClick={openNotifModal}>
                <FaBell size={20} />
                <FaCircle
                  color="#DB0000"
                  size={10}
                  className="absolute bottom-3 left-2"
                />
              </div>
              {isNotifModalOpen && <NotifCard />}
              <div className="font-thin"> | </div>
              <div className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer relative"
                  onClick={openProfileModal}
                >
                  <div className="rounded-full flex items-center justify-center h-[20px] w-[20px] md:w-[30px] md:h-[30px] overflow-hidden">
                    <img
                      src={placeholder}
                      alt={""}
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <p
                    className={`hidden md:block ${
                      userRole === "admin" ? "font-bold" : ""
                    }`}
                  >
                    Samuel Adesanya{" "}
                    <span
                      className={`dark:text-gray-500 ${
                        userRole === "admin" ? "font-bold" : "font-extralight"
                      }`}
                    >
                      ({userRole})
                    </span>
                  </p>
                  <GoChevronDown />
                </div>
                {isProfileModalOpen && <ProfileCard />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
