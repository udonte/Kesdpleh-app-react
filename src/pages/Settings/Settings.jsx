import React, { useState } from "react";
import {
  FaCircle,
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaMapMarkerAlt,
  FaTags,
  FaShieldAlt,
} from "react-icons/fa";
import Profile from "./components/Profile";
import Security from "./components/Security";
import Notification from "./components/Notification";
import Themes from "./components/Themes";
import Location from "./components/Location";
import DepartmentCategory from "./components/Department";
import Permissions from "./components/Permissions";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../features/user/user.selectors";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const Settings = () => {
  const userRole = localStorage.getItem("userRole");
  const [activeTab, setActiveTab] = useState("Profile");

  let tabs = [
    { name: "Profile", icon: <FaUser /> },
    { name: "Security", icon: <FaLock /> },
    { name: "Notification", icon: <FaBell /> },
    { name: "Themes", icon: <FaPalette /> },
  ];

  if (userRole === "admin") {
    const adminTabs = [
      { name: "Permissions", icon: <FaShieldAlt /> },
      { name: "Location", icon: <FaMapMarkerAlt /> },
      { name: "Department & Category", icon: <FaTags /> },
    ];
    const themesIndex = tabs.length - 1;

    tabs.splice(themesIndex, 0, ...adminTabs);
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Security":
        return <Security />;
      case "Notification":
        return <Notification />;
      case "Themes":
        return <Themes />;
      case "Permissions":
        return <Permissions />;
      case "Location":
        return <Location />;
      case "Department & Category":
        return <DepartmentCategory />;
      default:
        return null;
    }
  };
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Settings", url: "/dashboard/settings" },
  ];
  return (
    <div className="w-full text-xs">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500">
        <Breadcrumb paths={paths} pageTitle="Overview" />
      </div>

      {/* PAGE CONTENT */}
      <div className="flex mt-8 bg-white shadow-lg rounded-xl min-h-[800px] overflow-hidden mb-8">
        {/* Tabs */}
        <div className="w-1/5 bg-white border-r border-gray-200 dark:border-deskit-black-100 dark:bg-deskit-black-400 ">
          <ul className="space-y-3 p-6">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button
                  className={`w-full text-left md:px-2 md:py-1 font-bold text-sm rounded-md flex items-center gap-2 transition-all ${
                    activeTab === tab.name
                      ? "text-deskit-blue-300 bg-deskit-gray-200 dark:bg-deskit-black-100 dark:text-white"
                      : "text-deskit-blue-300 dark:text-deskit-black-100"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <span
                    className={`lg:hidden text-xl ${
                      activeTab === tab.name
                        ? "text-deskit-blue-600"
                        : "text-gray-300"
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <span className="hidden lg:block">{tab.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab content */}
        <div className="w-4/5 text-deskit-blue-300 md:p-6 dark:bg-deskit-black-400">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
