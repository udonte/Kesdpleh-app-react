import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdFilterAlt } from "react-icons/md";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import Button from "../../components/common/Button/Button";
import { CgSortAz } from "react-icons/cg";
import emptyStateview from "../../assets/knowledgeBase/mantakesbook.png";
import AnnoucementCard from "./AnnoucementCard";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import TablePagination from "../../components/common/Table/TablePagination";

const Announcements = () => {
  const userRole = localStorage.getItem("userRole");
  const [showFilterDropDown, setShowFilterDropDown] = useState(false);
  const [showSortDropDown, setShowSortDropDown] = useState(false);
  const navigate = useNavigate();

  const handleShowFilter = () => {
    setShowFilterDropDown((prev) => !prev);
    setShowSortDropDown(false);
  };

  const handleShowSort = () => {
    setShowSortDropDown((prev) => !prev);
    setShowFilterDropDown(false);
  };
  const deptFilters = ["IT Support", "HR", "Procurement"];

  const announcements = [
    {
      title: "Public Holiday",
      message:
        "The Federal Government of Nigeria has declared Tuesday, April 9th, and Wednesday, April 10th, 2024, as public holidays to commemorate this year's Eid El-Fitr celebration.",
      lengthOfRead: "5 min read",
      dateCreated: "March 6, 2024",
    },
    {
      title: "Maintenance Notice",
      message:
        "Please be informed that there will be a scheduled maintenance on our servers on Friday, April 12th, 2024, from 10:00 PM to 2:00 AM.",
      lengthOfRead: "3 min read",
      dateCreated: "April 1, 2024",
    },
    {
      title: "New Policy Update",
      message:
        "Effective from May 1, 2024, the new remote work policy will be in place. Please check your emails for more details.",
      lengthOfRead: "4 min read",
      dateCreated: "April 3, 2024",
    },
    {
      title: "Office Renovation",
      message:
        "The office will undergo renovations starting from April 20th, 2024. Employees are advised to work from home during this period.",
      lengthOfRead: "2 min read",
      dateCreated: "March 25, 2024",
    },
    {
      title: "Team Building Event",
      message:
        "Join us for a team-building event on April 15th, 2024, at the city park. It will be a day filled with fun activities and bonding.",
      lengthOfRead: "3 min read",
      dateCreated: "March 28, 2024",
    },
    {
      title: "Quarterly Meeting",
      message:
        "The next quarterly meeting will be held on April 18th, 2024. All department heads are required to prepare their reports.",
      lengthOfRead: "6 min read",
      dateCreated: "April 5, 2024",
    },
    {
      title: "New Hire Orientation",
      message:
        "New hire orientation will take place on April 10th, 2024. Please welcome our new colleagues and help them get settled.",
      lengthOfRead: "4 min read",
      dateCreated: "March 30, 2024",
    },
    {
      title: "Security Update",
      message:
        "A new security protocol will be implemented starting April 8th, 2024. Please ensure your devices are updated accordingly.",
      lengthOfRead: "2 min read",
      dateCreated: "April 2, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
    {
      title: "Health and Wellness Program",
      message:
        "We are launching a new health and wellness program starting April 11th, 2024. Join us for a healthier lifestyle.",
      lengthOfRead: "5 min read",
      dateCreated: "April 4, 2024",
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(announcements.length / rowsPerPage);
  const currentData = announcements.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Announcement", url: "" },
  ];
  return (
    // announcement page -------------------- /
    <div className="w-full text-xs my-8 dark:bg-deskit-black-500 dark:text-white">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500">
        <div>
          <Breadcrumb paths={paths} pageTitle="Knowledge Base" />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer text-xl hover:text-2xl"
            onClick={() => navigate("/dashboard/knowledge-base")}
          >
            <IoReturnUpBackSharp />
          </div>
          <Button
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
            onClick={() =>
              navigate("/dashboard/knowledge-base/create-announcement")
            }
          >
            Create New Announcement
          </Button>
        </div>
      </div>
      <div className="w-full mt-8">
        {/* top announcement bar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-base text-deskit-blue-600 dark:text-deskit-black-50 font-extrabold">
              Announcements
            </p>
            <span className="font-medium bg-gray-600/20 rounded-md w-[20px] h-[20px] flex items-center justify-center text-[10px] p-[1px]">
              20
            </span>
          </div>
          <div className="w-[30%] relative">
            <CustomInput
              size={"small"}
              placeholder={"Search Announcement"}
              inputClassName={`rounded px-4 py-2 pl-10 text-sm text-deskit-blue-300 dark:text-deskit-black-50 bg-deskit-gray-400/20`}
            />
            <div className="absolute top-2 left-3">
              <RiSearchLine size={18} color="#9D9D9D55" />
            </div>
          </div>

          {/* filter and sort */}
          <div className="ml-auto flex items-center justify-center gap-3 relative">
            <div
              className="font-medium bg-deskit-gray-400/30 rounded-md w-[40px] h-[40px] p-1 text-lg flex items-center justify-center cursor-pointer"
              onClick={handleShowFilter}
            >
              <MdFilterAlt />
            </div>
            <div
              className="font-medium bg-deskit-gray-400/30 rounded-md w-[40px] h-[40px] p-1 text-lg flex items-center justify-center cursor-pointer"
              onClick={handleShowSort}
            >
              <CgSortAz />
            </div>
            {showFilterDropDown && (
              <div
                onMouseLeave={() => {
                  setShowFilterDropDown((prev) => !prev);
                }}
                className="absolute z-50 top-[-1px] text-deskit-blue-300 w-[300px]  right-[50px] top border rounded-lg bg-white shadow-lg"
              >
                <div className="px-3 py-2 gap-x-3 w-full min-w-max text-sm  flex items-center shrink-0  cursor-pointer">
                  <p className="text-left">All</p>
                </div>
              </div>
            )}
            {showSortDropDown && (
              <div
                onMouseLeave={() => {
                  setShowSortDropDown((prev) => !prev);
                }}
                className=" absolute z-50 top-[-1px]  text-deskit-blue-300 w-[300px]  min-w-max right-[1px] top border rounded-lg bg-white shadow-lg"
              >
                <div className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100  flex items-center shrink-0 hover:bg-gurugeeks-dark-100 cursor-pointer">
                  <p className="text-left">man</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full">
          {announcements.length > 0 ? (
            <div className="grid grid-cols-3 mt-8 gap-3 w-full">
              {currentData.map((announcement, index) => (
                <AnnoucementCard
                  key={index}
                  announcementDetails={announcement}
                />
              ))}
            </div>
          ) : (
            <div className="w-full">
              <div className="flex flex-col justify-center items-center gap  mx-auto h-[400px] gap-4">
                <div>
                  <img src={emptyStateview} alt="empty state" />
                </div>
                <p className="text-sm text-center w-[25%]">
                  No announcement yet, click "Create New Announcement” button to
                  begin
                </p>
                <Button
                  size="md"
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  type="submit"
                >
                  Create New Announcement
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="text-sm ">
          <TablePagination
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Announcements;
