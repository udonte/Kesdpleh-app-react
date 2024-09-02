import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import { RiSearchLine } from "react-icons/ri";
import background from "../../assets/knowledge.jpg";

const SearchContainer = () => {
  return (
    <div className="h-[240px] overflow-hidden w-full rounded-md flex flex-col items-center justify-center gap-4 relative  dark:bg-deskit-black-400">
      <div className="flex flex-col items-center gap-8 z-10 w-full">
        <p className="text-2xl text-white font-bold">
          Get your Questions answered quickly here!
        </p>
        <div className="w-[50%] relative">
          <CustomInput
            placeholder={"Search Knowledge Base"}
            inputClassName={`rounded-xl px-4 py-2 pr-10 text-sm text-[#F3F5F9] dark:text-deskit-black-50 bg-deskit-blue-600 dark:bg-deskit-black-150`}
          />
          <div className="absolute top-5 right-4 text-[#F3F5F9] font-thin">
            <RiSearchLine size={18} />
          </div>
        </div>
      </div>

      <img
        src={background}
        alt="knowledge base background"
        className="object-cover w-full h-full absolute top-0 left-0 z-0 dark:hidden"
      />
    </div>
  );
};

export default SearchContainer;
