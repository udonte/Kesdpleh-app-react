import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import placeholder from "../../assets/adeola.png";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import Button from "../../components/common/Button/Button";

const relatedAnnouncements = [
  {
    title: "Maximising Collaboration",
    snippet: "In the era of remote work and collaborative initiatives...",
    timeAgo: "1 week ago",
    author: "Amaka Fadipe",
  },
  {
    title: "Efficient Project Management",
    snippet: "Learn the top strategies for managing projects...",
    timeAgo: "2 weeks ago",
    author: "John Doe",
  },
  {
    title: "Boosting Productivity",
    snippet: "Discover tools and techniques to enhance your productivity...",
    timeAgo: "3 weeks ago",
    author: "Jane Smith",
  },
];

const popularAnnouncements = [
  {
    title: "Embracing Remote Work",
    snippet: "How to adapt and thrive in a remote work environment...",
    timeAgo: "1 month ago",
    author: "Mike Johnson",
  },
  {
    title: "Team Building Activities",
    snippet: "Explore fun and engaging team-building activities...",
    timeAgo: "2 months ago",
    author: "Sarah Lee",
  },
  {
    title: "Effective Communication",
    snippet: "Tips for improving communication within your team...",
    timeAgo: "3 months ago",
    author: "David Brown",
  },
];

const AnnouncementDetails = () => {
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();
  const renderAnnouncement = (announcement) => (
    <div className="flex flex-col gap-4 shadow-xl p-4 rounded-lg  dark:bg-deskit-black-150">
      <p className="font-bold text-sm text-deskit-blue-300/70 dark:text-white">
        {announcement.title}
      </p>
      <p className="border-b-2 border-gray-200 pb-4">{announcement.snippet}</p>
      <div className="flex items-center justify-between mt-1  dark:text-deskit-black-50">
        <p>{announcement.timeAgo}</p>
        <div className="flex items-center gap-2 ">
          <div className="rounded-full flex items-center justify-center h-[20px] w-[20px] overflow-hidden">
            <img
              src={placeholder}
              alt={announcement.author}
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <p className="font-bold">{announcement.author}</p>
        </div>
      </div>
    </div>
  );
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Announcement", url: "/dashboard/knowledge-base/announcements" },
    { name: "Post", url: "" },
  ];
  return (
    <div className="w-full text-xs my-8">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500">
        <div>
          <Breadcrumb paths={paths} pageTitle="Knowledge Base" />
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
      <div className="w-full flex items-start gap-6 dark:text-white ">
        <div className="w-3/4 bg-white min-h-[500px] px-8 py-4 rounded-lg shadow-xl dark:bg-deskit-black-300 dark:text-white">
          {/* HEAD */}
          <div className="border-b-[1px] border-gray-200 py-2 space-y-4 dark:bg-deskit-black-300 dark:text-white">
            <div className="flex items-start justify-between">
              <p className=" text-xl font-bold">Public Holiday</p>
              <div
                className="cursor-pointer text-xl hover:text-2xl"
                onClick={() =>
                  navigate("/dashboard/knowledge-base/announcements")
                }
              >
                <IoReturnUpBackSharp />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm  dark:text-deskit-black-50">
              <p className="font-semibold">5 Months ago</p>
              <FaCircle className="text-gray-400" size={5} />
              <p>5 mins read</p>
              <FaCircle className="text-gray-400" size={5} />
              <p>20 viewed</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="mt-6 text-base dark:bg-deskit-black-300 dark:text-white">
            <p>
              In the ever-evolving landscape of digital workflows, the key to
              seamless efficiency lies in harnessing the right software
              solutions. "Streamlining Efficiency" is your compass through the
              realm of cutting-edge software, offering insights into optimizing
              workflow integration. From intuitive project management tools to
              collaborative platforms that bridge communication gaps, this
              article unveils the transformative software solutions that empower
              organizations to work smarter, not harder. Discover how embracing
              the latest in software technology can revolutionize your workflow,
              enhance collaboration, and pave the way for unparalleled
              efficiency in the digital age. Embrace the future of work with the
              right software solutions at your fingertips! In the ever-evolving
              landscape of digital workflows, the key to seamless efficiency
              lies in harnessing the right software solutions. "Streamlining
              Efficiency" is your compass through the realm of cutting-edge
              software, offering insights into optimizing workflow integration.
              From intuitive project management tools to collaborative platforms
              that bridge communication gaps, this article unveils the
              transformative software solutions that empower organizations to
              work smarter, not harder. Discover how embracing the latest in
              software technology can revolutionize your workflow, enhance
              collaboration, and pave the way for unparalleled efficiency in the
              digital age. Embrace the future of work with the right software
              solutions at your fingertips! In the ever-evolving landscape of
              digital workflows, the key to seamless efficiency lies in
              harnessing the right software solutions. "Streamlining Efficiency"
              is your compass through the realm of cutting-edge software,
              offering insights into optimizing workflow integration. From
              intuitive project management tools to collaborative platforms that
              bridge communication gaps.
            </p>
          </div>
        </div>
        <div className="w-1/4 min-h-[800px] flex flex-col gap-8">
          {/* Related Announcements */}
          <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-lg shadow-xl  dark:bg-deskit-black-300">
            <p className="font-bold mb-4 text-base">Related Announcements</p>
            <div className="flex flex-col justify-start gap-4 ">
              {relatedAnnouncements.map((announcement, index) => (
                <React.Fragment key={index}>
                  {renderAnnouncement(announcement)}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Popular Announcements */}
          <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-lg shadow-xl  dark:bg-deskit-black-300">
            <p className="font-bold mb-4 text-base">Popular Announcements</p>
            <div className="flex flex-col justify-start gap-4">
              {popularAnnouncements.map((announcement, index) => (
                <React.Fragment key={index}>
                  {renderAnnouncement(announcement)}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
