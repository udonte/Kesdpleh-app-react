import React from "react";
import SmallModal from "../common/Modal/SmallModal";
import placeholder from "../../assets/adeola.png";
import { HiUser } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Modal from "../common/Modal/Modal";
import { PiBuildingsFill } from "react-icons/pi";
import { setUserRole } from "../../features/user/user.slice";

const TeamMember = ({ isOpen }) => {
  const userRole = localStorage.getItem("userRole");
  return (
    <Modal isOpen={isOpen} position="center">
      <div className=" h-[165px]">
        <div className="flex items-center gap-3 px-1 py-1 w-full h-full">
          <div className="flex flex-col gap-2">
            {userRole === "manager" && (
              <div className="rounded-3xl bg-[#E2E2FF] py-1 px-4 font-bold text-[#5D5FEF] w-fit">
                <p>5.5</p>
              </div>
            )}

            <div className="rounded-full flex items-center justify-center h-[40px] w-[40px] overflow-hidden">
              <img
                src={placeholder}
                alt={"adeola"}
                className="rounded-full h-full w-full object-cover"
              />
            </div>
            <div className="text-deskit-blue-300 w-fit mt-2">
              <p className="font-bold">Ethan Hunt</p>
              <p className=" text-black">Creative Director</p>
              {userRole === "manager" && (
                <div className="">
                  <p className="">
                    Last Login: <span>March 6, 2024 </span> <span>11.55pm</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 bg-[#F2F2FC] text-sm text-deskit-blue-300 py-2 px-4 rounded-md h-full">
            <div className="flex items-center gap-2">
              <PiBuildingsFill color="#A6ABC8" size={16} />
              <p className="bg-[#DC6900]/20 text-[#DC6900] px-4 py-1 rounded-full font-medium text-xs mt-2">
                IT Support
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HiUser color="#A6ABC8" size={16} />
              <p className="">ID: GU002</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCall color="#A6ABC8" size={16} />
              <p className="">Phone: 0903454335</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail color="#A6ABC8" size={16} />
              <p className="">Email: fakeyejohn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TeamMember;
