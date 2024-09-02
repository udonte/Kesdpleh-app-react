import React from "react";
import SearchContainer from "./SearchContainer";
import { MdKeyboard } from "react-icons/md";
import Button from "../../components/common/Button/Button";
import emptyStateview from "../../assets/knowledgeBase/mantakesbook.png";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import Mailbox from "../../assets/knowledgeBase/Mailbox.svg";

import { useNavigate } from "react-router-dom";
import { BsMailbox2Flag } from "react-icons/bs";

const baseData = [
  { name: "IT Support", articles: 20, writers: 5, bgColor: "#F2DDCA" },
  { name: "Facility", articles: 15, writers: 3, bgColor: "#C6DAF6" },
  { name: "Logistics", articles: 10, writers: 4, bgColor: "#D6D6F7" },
  { name: "Procurement", articles: 25, writers: 6, bgColor: "#C8EFEA" },
  { name: "Finance", articles: 18, writers: 4, bgColor: "#F2C8E1" },
  { name: "Human Resource", articles: 22, writers: 5, bgColor: "#DCF0D1" },
  { name: "Project", articles: 12, writers: 3, bgColor: "#D9DBDC" },
  { name: "Others", articles: 5, writers: 2, bgColor: "#E7CCCE" },
];

const MainContent = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
  ];
  return (
    <div>
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Knowledge Base" />
        </div>

        <Button
          className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 flex items-center gap-2"
          type="submit"
          onClick={() => navigate("/dashboard/knowledge-base/announcements")}
        >
          <BsMailbox2Flag />
          <span>Announcements</span>
        </Button>
      </div>
      {/* MAIN CONTENT */}
      <div className="w-full mt-8">
        {/* SEARCH CONTAINER */}
        <SearchContainer />
        {/* CATEGORIES */}
        <div className="mt-12 w-full">
          <div className="flex items-start justify-between">
            <p className="font-bold text-base dark:text-white">Department</p>
            <Button
              size="md"
              className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
              type="submit"
              onClick={() =>
                navigate("/dashboard/knowledge-base/create-article")
              }
            >
              Write an Article
            </Button>
          </div>
        </div>
        <>
          {baseData.length > 0 ? (
            <div className="grid grid-cols-4 mt-8 gap-12 w-full">
              {/* cards */}
              {baseData.map((department, index) => (
                <div
                  key={index}
                  className="relative"
                  onClick={() =>
                    navigate("/dashboard/knowledge-base/category/:id")
                  }
                >
                  <div
                    className="h-[200px] relative z-10 rounded-sm p-4 flex flex-col justify-start gap-4 text-sm cursor-pointer"
                    style={{ backgroundColor: department.bgColor }}
                  >
                    <div>
                      <MdKeyboard size={25} />
                    </div>
                    <p className="font-bold text-base">{department.name}</p>
                    <p>
                      <span className="font-bold">{department.articles}</span>{" "}
                      Articles
                    </p>
                    <div className="border-[1px] border-gray-400 w-full"></div>
                    <div className="flex items-center justify-between">
                      <p className="italic">Writers: </p>
                      <p className="font-bold">{department.writers}</p>
                    </div>
                  </div>
                  <div className="w-full h-[200px] border-2 border-gray-300 absolute top-[6px] left-[6px] rounded-sm"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              <div className="flex flex-col justify-center items-center gap  mx-auto h-[400px] gap-4">
                <div>
                  <img src={emptyStateview} alt="empty state" />
                </div>
                <p className="text-sm text-center w-[25%]">
                  No article in the Knowledge base yet, click “Write an Article”
                  button to begin
                </p>
                <Button
                  size="md"
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  type="submit"
                >
                  Write an Article
                </Button>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MainContent;
