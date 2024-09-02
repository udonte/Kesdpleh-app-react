import React, { useEffect } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import placeholder from "../../assets/adeola.png";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../common/Modals/modal.selectors";
import { openModalByName } from "../../common/Modals/modal.slice";
import TeamMember from "../../components/overview/TeamMember";
import { selectTheme } from "../../Theme/theme.selector";
import { useNavigate } from "react-router-dom";
import Department from "../../components/overview/Department";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const Overview = () => {
  const userRole = localStorage.getItem("userRole");
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const showMember = modals.TEAM_member;
  const showDepartment = modals.DEPARTMENT;
  const navigate = useNavigate();

  const openShowMemberModal = () => {
    dispatch(openModalByName("TEAM_member"));
  };

  const openShowDeptModal = () => {
    dispatch(openModalByName("DEPARTMENT"));
  };

  const ticketMetrics = [
    { id: 1, type: "Total Tickets", count: 120, color: "#328B91" },
    { id: 2, type: "Open Tickets", count: 30, color: "#5D5FEF" },
    { id: 3, type: "Closed Tickets", count: 80, color: "#324191" },
    { id: 4, type: "Onhold Tickets", count: 10, color: "#723291" },
    { id: 5, type: "Escalated Tickets", count: 10, color: "#3E3F3F" },
  ];
  const announcements = [
    {
      id: 1,
      title: "Public Holiday",
      description:
        "In the world of computer glitches, few issues are as frustrating as malfunctioning USB Ports. Imagine connecting your device...",
    },
    {
      id: 2,
      title: "Maintenance Update",
      description:
        "Our systems will undergo scheduled maintenance this weekend. Please save your work and log off before 12:00 AM...",
    },
    {
      id: 3,
      title: "New Features",
      description:
        "We're excited to introduce new features in our next update, including enhanced security and user-friendly interfaces...",
    },
  ];

  const departments = [
    {
      name: "IT Support",
      teamMembers: 15,
      manager: "Alice Johnson",
    },
    {
      name: "Procurement",
      teamMembers: 10,
      manager: "Bob Smith",
    },
    {
      name: "Project",
      teamMembers: 20,
      manager: "Carol Davis",
    },
    {
      name: "Project",
      teamMembers: 22,
      manager: "Bob Smith",
    },
    {
      name: "HR",
      teamMembers: 20,
      manager: "Mark Davis",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Adeola Oni",
      role: "Creative Director",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Product Manager",
    },
  ];

  const recentTickets = [
    {
      id: 1,
      ticketNumber: "#34455",
      title: "My payment is delayed",
      createdTime: "2 hours ago",
      responseDueTime: "2 hours ago",
      initial: "M",
      color: "#4FAFCB",
    },
    {
      id: 2,
      ticketNumber: "#34456",
      title: "Unable to login",
      createdTime: "3 hours ago",
      responseDueTime: "1 hour ago",
      initial: "L",
      color: "#FF5733",
    },
    {
      id: 3,
      ticketNumber: "#34457",
      title: "Error in application",
      createdTime: "4 hours ago",
      responseDueTime: "3 hours ago",
      initial: "E",
      color: "#28A745",
    },
  ];

  const feedbackTrends = [
    {
      id: 1,
      ticketNumber: "#34455",
      title: "My payment is delayed...",
      initial: "M",
      color: "#4FAFCB",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora assumenda... Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora assumenda...",
    },
    {
      id: 2,
      ticketNumber: "#34456",
      title: "Unable to login...",
      initial: "L",
      color: "#FF5733",
      feedback:
        "Login issues are preventing access to important features. The login page keeps reloading and does not allow entry...",
    },
    {
      id: 3,
      ticketNumber: "#34457",
      title: "Error in application...",
      initial: "E",
      color: "#28A745",
      feedback:
        "There is a persistent error in the application that causes it to crash unexpectedly. This has been affecting our work...",
    },
    {
      id: 4,
      ticketNumber: "#34458",
      title: "Feature request...",
      initial: "F",
      color: "#FFC107",
      feedback:
        "We would like to request a new feature that allows bulk editing of entries. This would significantly improve our workflow...",
    },
  ];

  const recentArticles = [
    {
      id: 1,
      author: "Ada Nwosu",
      createdTime: "2 hours ago",
      readTime: "5 mins read",
      title:
        "In the world of computer glitches, few issues are as frustrating as malfunctioning USB Ports. Imagine connecting your device...",
    },
    {
      id: 2,
      author: "Ada Nwosu",
      createdTime: "3 hours ago",
      readTime: "7 mins read",
      title:
        "Exploring the impact of artificial intelligence on modern technology. How AI is changing the world Imagine connecting your device...",
    },
    {
      id: 3,
      author: "John Doe",
      createdTime: "5 hours ago",
      readTime: "4 mins read",
      title:
        "A beginner's guide to understanding blockchain technology. What you need to know Imagine connecting your device...",
    },
    {
      id: 4,
      author: "John Doe",
      createdTime: "5 hours ago",
      readTime: "4 mins read",
      title:
        "A beginner's guide to understanding blockchain technology. What you need to know Imagine connecting your device...",
    },
    {
      id: 5,
      author: "John Doe",
      createdTime: "5 hours ago",
      readTime: "4 mins read",
      title:
        "A beginner's guide to understanding blockchain technology. What you need to know Imagine connecting your device...",
    },
  ];

  const paths = [
    { name: "Deskit", url: "" },
    { name: "Overview", url: "/dashboard/overview" },
  ];
  return (
    <div className="w-full text-xs dark:bg-deskit-black-500">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 dark:bg-deskit-black-500 dark:text-white flex items-start py-4">
        <div>
          <Breadcrumb paths={paths} pageTitle="Overview" />
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="w-full mt-8">
        {/* TICKET METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* each metric */}
          {ticketMetrics.map((ticket) => (
            <div
              key={ticket.id}
              className={`flex items-center py-2 px-4 shadow-lg rounded-2xl gap-4 w-[200px] h-[80px] relative overflow-hidden ${
                userRole === "admin" ? "text-[#172F51] bg-white" : "text-white"
              } dark:bg-deskit-black-400 dark:text-white`}
              style={{
                backgroundColor:
                  userRole !== "admin" ? ticket.color : undefined,
              }}
            >
              <div className="rounded-full h-14 w-14 bg-white/20 absolute top-[-25px] left-[-30px] dark:hidden"></div>
              <div className="rounded-full h-14 w-14 bg-white/20 absolute bottom-[-35px] right-[-25px] dark:hidden"></div>
              <div
                className={`dark:bg-deskit-black-400 rounded-full flex items-center justify-center p-3 ${
                  userRole === "admin"
                    ? `bg-opacity-40 bg-[#5D5FEF] text-[#172F51] dark:bg-[#5D5FEF]`
                    : `bg-[#FFFFFF33] text-[${ticket.color}] dark:bg-[#FFFFFF33]`
                }`}
              >
                <BsFileEarmarkTextFill
                  className={`dark:text-white ${
                    userRole === "admin" ? "text-black" : "text-white"
                  }`}
                  size={22}
                />
              </div>
              <div className="flex items-center gap-4 w-full md:flex-col md:items-start md:gap-0">
                <p className="font-medium">{ticket.type}</p>
                <p className="text-2xl font-black">{ticket.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ANNOUNCEMENT */}
        <div className="w-full">
          <div className="flex w-full mt-8 h-[55px] rounded-xl relative overflow-hidden">
            <div className=" w-[60%] bg-[#5D5FEF] text-white px-4 py-2 flex flex-1 items-center text-base dark:bg-deskit-black-400">
              <div className="absolute bg-white/20 dark:bg-white/5 w-[400px] h-[400px] top-[-250px] left-[-10px] rounded-full"></div>
              <div className="absolute bg-white/20 dark:bg-white/5 w-[200px] h-[200px] top-[-200%] right-[150px] rounded-full"></div>
              <Marquee
                className="w-full"
                speed={25}
                gradient={false}
                pauseOnHover={true}
              >
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="flex items-center gap-4 mx-4"
                  >
                    <p className="font-bold">{announcement.title}</p>
                    <FaCircle size={5} />
                    <p>{announcement.description}</p>
                  </div>
                ))}
              </Marquee>
            </div>
            <div
              className="text-white bg-deskit-blue-600 dark:bg-deskit-black-100 flex justify-center items-center px-2 cursor-pointer"
              onClick={() =>
                navigate("/dashboard/knowledge-base/announcements")
              }
            >
              See All
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col lg:flex-row items-start w-full gap-4 mt-8 dark:text-white">
          <>
            {userRole === "admin" ? (
              <div className="w-full lg:w-1/3 bg-white rounded-2xl py-4 px-6 shadow-md dark:bg-deskit-black-400">
                {/* departments */}
                <div>
                  <p className=" text-deskit-blue-300 dark:text-white text-base font-extrabold mb-4">
                    Departments
                  </p>
                </div>
                <div
                  className="flex flex-col gap-4 overflow-y-auto h-[275px]"
                  style={{
                    scrollbarWidth: "none" /* For Firefox */,
                    WebkitScrollbarWidth:
                      "thin" /* For WebKit-based browsers */,
                    scrollbarTrackColor:
                      "#f1f1f1" /* Background color of the scrollbar track */,
                    scrollbarColor:
                      "#888 #f1f1f1" /* Color of the scrollbar thumb and track */,
                    borderRadius: "4px" /* Radius of the scrollbar thumb */,
                  }}
                >
                  {departments.map((dept, index) => (
                    <div
                      onClick={openShowDeptModal}
                      key={index}
                      className="flex flex-col items-start py-2 px-4 bg-white dark:bg-deskit-black-150 shadow-xl rounded-2xl gap-2 h-[80px] cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-deskit-blue-600 dark:text-white font-extrabold">
                          {dept.name}
                        </p>
                        <span className="font-medium bg-gray-600/20 rounded-full w-[20px] h-[20px] flex items-center justify-center text-[10px] p-[1px]">
                          {dept.teamMembers}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="rounded-full flex items-center justify-center h-[30px] w-[30px] overflow-hidden">
                          <img
                            src={placeholder}
                            alt={"Mark"}
                            className="rounded-full h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-deskit-blue-300 text-sm dark:text-deskit-black-50">
                          Mark Grunberg :{" "}
                          <span className="dark:text-deskit-black-100">
                            Manager
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {showDepartment && <Department isOpen={showDepartment} />}
              </div>
            ) : (
              <div className="w-full lg:w-1/3 bg-white rounded-2xl py-4 px-6 shadow-md  dark:bg-deskit-black-400 dark:text-white">
                {/* team members | for employee role*/}
                <div>
                  <p className=" text-deskit-blue-300 text-base font-extrabold mb-4 dark:text-white">
                    Team Members
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {teamMembers.map((member) => (
                    <div
                      onClick={openShowMemberModal}
                      key={member.id}
                      className="flex items-center py-2 px-4 bg-white shadow-xl rounded-2xl gap-4 h-[80px] cursor-pointer dark:bg-deskit-black-150"
                    >
                      <div className="rounded-full flex items-center justify-center h-[40px] w-[40px] overflow-hidden">
                        <img
                          src={placeholder}
                          alt={member.name}
                          className="rounded-full h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base text-deskit-blue-600 font-extrabold  dark:text-white">
                          {member.name}
                        </p>
                        <p className="text-deskit-gray-400 text-sm  dark:text-deskit-black-50">
                          {member.role}
                        </p>
                      </div>
                      {userRole === "manager" && (
                        <div className="ml-auto rounded-3xl bg-[#E2E2FF] py-2 px-4 font-bold text-[#5D5FEF] ">
                          <p>5.5</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {showMember && <TeamMember isOpen={showMember} />}
              </div>
            )}
          </>
          {/* recent tickets */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl py-4 px-6 shadow-md dark:bg-deskit-black-400 dark:text-white">
            <div className="flex items-center justify-between mb-4">
              <p className=" text-deskit-blue-300 text-base font-extrabold dark:text-white">
                Recent Tickets
              </p>
              <p className=" text-deskit-orange-700 text-xs font-semibold cursor-pointer">
                See All
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex flex-col items-center md:flex-row md:items-start py-4 px-4 bg-white shadow-xl h-full md:h-[80px] rounded-2xl gap-3 dark:bg-deskit-black-150"
                >
                  <div
                    className="rounded-full flex items-center justify-center text-white text-base h-10 w-10 p-4 font-bold"
                    style={{ backgroundColor: ticket.color }}
                  >
                    {ticket.initial}
                  </div>
                  <div className="flex flex-col items-center md:items-start gap-1 w-full">
                    <div className="flex flex-col md:flex-row items-center gap-3 text-deskit-blue-600 dark:text-white">
                      <p className="italic">{ticket.ticketNumber}</p>
                      <p className="font-semibold">{ticket.title}</p>
                    </div>
                    <div className="text-[#6D7D92] flex flex-col md:flex-row items-center gap-2 text-[10px]">
                      <p className="dark:text-deskit-black-50">
                        Created {ticket.createdTime}
                      </p>
                      <FaCircle size={3} className="hidden md:block" />
                      <p className="dark:text-deskit-black-100">
                        Response due in {ticket.responseDueTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* feedback Trends */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl py-4 px-4 shadow-md overflow-hidden dark:text-white dark:bg-deskit-black-400">
            <div>
              <p className=" text-deskit-blue-300 text-base font-extrabold mb-4 dark:text-white">
                Feedback Trends
              </p>
            </div>

            <div
              className="flex flex-col gap-4 overflow-y-auto h-[275px]"
              style={{
                scrollbarWidth: "none" /* For Firefox */,
                WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
                scrollbarTrackColor:
                  "#f1f1f1" /* Background color of the scrollbar track */,
                scrollbarColor:
                  "#888 #f1f1f1" /* Color of the scrollbar thumb and track */,
                borderRadius: "4px" /* Radius of the scrollbar thumb */,
              }}
            >
              {feedbackTrends.map((trend) => (
                <div
                  key={trend.id}
                  className="flex items-start py-4 px-4 bg-white shadow-xl rounded-2xl gap-4 dark:bg-deskit-black-150"
                >
                  <div
                    className="rounded-full flex items-center justify-center text-white text-base h-10 w-10 p-4 font-bold"
                    style={{ backgroundColor: trend.color }}
                  >
                    {trend.initial}
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <div className="flex items-center gap-3 text-deskit-blue-600 dark:text-white">
                      <p className="italic">{trend.ticketNumber}</p>
                      <p className="font-semibold">{trend.title}</p>
                    </div>
                    <p className="text-[#6D7D92] overflow-hidden h-[48px] dark:text-deskit-black-50">
                      {trend.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RECENT ARTICLE */}
        <div className="w-full bg-white rounded-xl p-4 shadow-md my-8 dark:bg-deskit-black-400">
          <div className="flex items-center justify-between mb-4">
            <p className=" text-deskit-blue-300 text-base font-extrabold dark:text-white">
              Recent Articles
            </p>
            <p
              className=" text-deskit-orange-700 text-xs font-semibold cursor-pointer"
              onClick={() => navigate("/dashboard/knowledge-base")}
            >
              See All
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col lg:flex-row items-start py-4 px-4 bg-white shadow-xl rounded-2xl gap-4 lg:gap-24 dark:bg-deskit-black-150 dark:text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full flex items-center justify-center h-[40px] w-[40px] overflow-hidden">
                    <img
                      src={placeholder}
                      alt={article.author}
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:gap-3">
                      <p className="italic text-[#6D7D92] dark:text-deskit-black-50">
                        Written by
                      </p>
                      <p className="font-semibold text-base text-deskit-blue-600 dark:text-white">
                        {article.author}
                      </p>
                    </div>
                    <div className="text-[#6D7D92] flex flex-col md:flex-row md:items-center md:gap-2">
                      <p className="dark:text-deskit-black-50">
                        Created {article.createdTime}
                      </p>
                      <FaCircle size={5} className="hidden md:block" />
                      <p className="text-deskit-blue-300 font-medium dark:text-deskit-black-100">
                        {article.readTime}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] text-sm font-medium overflow-hidden h-[40px]">
                  <p className="text-xs lg:text-sm">{article.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
