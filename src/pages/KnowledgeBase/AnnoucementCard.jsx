import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import AnnouncementDetails from "./AnnouncementDetails";
import { useNavigate } from "react-router-dom";

const AnnoucementCard = ({ announcementDetails }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start gap-4 bg-white py-6 px-6 rounded-md shadow-lg dark:bg-deskit-black-300">
      <p className="text-base text-deskit-blue-600 font-extrabold dark:text-white">
        {announcementDetails.title}
      </p>
      <p className="text-sm font-medium h-[80px] overflow-hidden">
        {announcementDetails.message}
      </p>
      <div className="flex items-center justify-center gap-2 font-semibold text-[10px] mt-auto dark:text-deskit-black-50">
        <GoClockFill size={15} color="#A6ABC8" />
        <p>{announcementDetails.lengthOfRead}</p>
        <FaCircle
          size={5}
          className="text-deskit-blue-300 dark:text-deskit-black-50"
        />
        <p>
          Date created: <span>{announcementDetails.dateCreated}</span>
        </p>
        <p
          className="text-deskit-orange-700 ml-auto cursor-pointer text-xs"
          onClick={() =>
            navigate("/dashboard/knowledge-base/announcements/:id")
          }
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default AnnoucementCard;
