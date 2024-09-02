import React, { useEffect } from "react";
import { GoClockFill } from "react-icons/go";
import laptop from "../../assets/knowledgeBase/laptop.png";
import placeholder from "../../assets/adeola.png";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Button from "../../components/common/Button/Button";
import Mailbox from "../../assets/knowledgeBase/Mailbox.svg";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { BsMailbox2Flag } from "react-icons/bs";

const Category = () => {
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();

  const articles = [
    {
      category: "IT Support",
      title: "Fixing the USB Port",
      description:
        "In the world of computer glitches, few issues are as frustrating as a malfunctioning USB port.",
      readTime: "5 min read",
      date: "March 6, 2024",
      author: "Amaka Johnson",
      imageUrl: "url/to/laptop-image.jpg",
      authorImage: "url/to/author-image.jpg",
    },
    {
      category: "IT Support",
      title: "Building Maintenance Tips",
      description:
        "Regular building maintenance ensures a safe and efficient workplace.",
      readTime: "3 min read",
      date: "April 5, 2024",
      author: "John Doe",
      imageUrl: "url/to/maintenance-image.jpg",
      authorImage: "url/to/author-image-2.jpg",
    },
    {
      category: "IT Support",
      title: "Optimizing Delivery Routes",
      description:
        "Effective delivery route optimization can save time and reduce costs.",
      readTime: "4 min read",
      date: "February 20, 2024",
      author: "Jane Smith",
      imageUrl: "url/to/delivery-image.jpg",
      authorImage: "url/to/author-image-3.jpg",
    },
  ];
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Category", url: "/dashboard/knowledge-base/category/:id" },
  ];
  return (
    <div className="w-full text-xs my-8">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Category" />
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
      <div className="w-full mt-8">
        {/* search container */}
        <SearchContainer />
        {/* cards */}
        <div className="mt-12 w-full">
          <div className="flex items-start justify-between">
            <p className="font-bold text-base dark:text-white">
              IT Support{" "}
              <span className="rounded-md bg-gray-300 py-[2px] px-[3px] text-deskit-blue-300 text-[10px] font-medium ml-1">
                30
              </span>{" "}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer text-xl hover:text-2xl"
                onClick={() => navigate("/dashboard/knowledge-base")}
              >
                <IoReturnUpBackSharp />
              </div>
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
        </div>

        <div className="grid grid-cols-3 mt-8 gap-6 w-full">
          {articles.map((article, index) => {
            return (
              <div
                className="bg-white p-4 rounded-3xl flex flex-col justify-start gap-4 dark:bg-deskit-black-100 dark:text-white"
                key={index}
              >
                <div className="h-[130px] overflow-hidden rounded-md relative">
                  <img
                    src={laptop}
                    alt={"laptop"}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className="absolute z-10 bottom-4 left-4 bg-white px-2 py-1 rounded-lg font-bold text-sm dark:bg-white dark:text-deskit-blue-300">
                    {article.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-medium text-sm mt-auto">
                  <GoClockFill className="text-deskit-blue-300 dark:text-deskit-black-50" />
                  <p>{article.readTime}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-bold">{article.title}</p>
                  <p className="text-sm">{article.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full flex items-center justify-center h-[30px] w-[30px] overflow-hidden">
                    <img
                      src={placeholder}
                      alt={"adeola"}
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col dark:text-deskit-black-50">
                    <p className="text-xs font-bold">{article.author}</p>
                    <p className="text-[10px]">{article.date}</p>
                  </div>
                  <p
                    className="text-deskit-orange-700 ml-auto cursor-pointer font-semibold text-xs"
                    onClick={() =>
                      navigate(
                        "/dashboard/knowledge-base/category/:id/article/:id"
                      )
                    }
                  >
                    Read More
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
