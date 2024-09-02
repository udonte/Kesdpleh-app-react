import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdInsertChart } from "react-icons/md";
import { HiMiniDocumentText } from "react-icons/hi2";
import { PiFolderMinusFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { TbChartPieFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { selectUserRole } from "../../features/user/user.selectors";

const Sidebar = () => {
  const dispatch = useDispatch();

  const userRole = localStorage.getItem("userRole");
  console.log(userRole);

  const location = useLocation();

  const links = [
    {
      path: `/dashboard/overview`,
      label: "Overview",
      icon: MdInsertChart,
    },
    {
      path: `/dashboard/tickets`,
      label: "Tickets",
      icon: HiMiniDocumentText,
    },
    {
      path: `/dashboard/knowledge-base`,
      label: "Knowledge Base",
      icon: PiFolderMinusFill,
    },
    {
      path: `/dashboard/settings`,
      label: "Settings",
      icon: IoMdSettings,
    },
  ];

  if (userRole === "admin") {
    const adminLinks = [
      {
        path: `/dashboard/employee`,
        label: "Employee",
        icon: BiSolidUser,
      },
      {
        path: `/dashboard/reports`,
        label: "Reports",
        icon: TbChartPieFilled,
      },
    ];
    const knowlegebaseIndex = links.findIndex(
      (link) => link.label === "Knowledge Base"
    );
    links.splice(knowlegebaseIndex, 0, ...adminLinks);
  } else if (userRole === "manager") {
    const managerLinks = [
      {
        path: `/dashboard/report`,
        label: "Report",
        icon: TbChartPieFilled,
      },
    ];
    const knowlegebaseIndex = links.findIndex(
      (link) => link.label === "Knowledge Base"
    );
    links.splice(knowlegebaseIndex, 0, ...managerLinks);
    console.log(links);
  }

  return (
    <aside className="w-20 md:w-[247px] space-y-6 py-7 px-2 inset-y-0 left-0 transition duration-200 ease-in-out dark:bg-deskit-black-500 dark:border-r-deskit-black-100 dark:border-r-[1px]">
      <nav className="mt-16 fixed">
        <ul>
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <li key={index} className="w-full">
                <Link
                  to={`${link.path}`}
                  className={`px-4 py-1 mb-8 transition duration-200 flex items-center justify-center md:justify-start w-full ${
                    isActive
                      ? "dark:text-white text-deskit-blue-600 border-r-[3px] border-deskit-blue-600 dark:border-white font-extrabold"
                      : "text-deskit-gray-400 dark:text-deskit-black-100"
                  }`}
                >
                  <IconComponent
                    className={`text-2xl ${
                      isActive
                        ? "text-deskit-blue-600 dark:text-white"
                        : "text-deskit-gray-400 dark:text-deskit-black-100"
                    }`}
                  />
                  <span
                    className={`ml-4 hidden md:inline text-deskit-blue-300 ${
                      isActive
                        ? "dark:text-white"
                        : " dark:text-deskit-black-100"
                    } `}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
