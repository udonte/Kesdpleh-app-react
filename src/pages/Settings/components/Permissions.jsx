import React, { useState } from "react";
import EmployeePermissions from "./permissions/EmployeePermissions";
import ManagerPermissions from "./permissions/ManagerPermissions";
import DepartmentPermissions from "./permissions/DepartmentPermissions";

const Permissions = () => {
  const [activeTab, setActiveTab] = useState("Employee Permissions");

  const tabs = [
    "Employee Permissions",
    "Manager Permissions",
    "Department Permissions",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Employee Permissions":
        return <EmployeePermissions />;
      case "Manager Permissions":
        return <ManagerPermissions />;
      case "Department Permissions":
        return <DepartmentPermissions />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full text-xs  dark:bg-deskit-black-400 dark:text-white">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200 dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Permissions</div>
      </div>

      {/* PAGE CONTENT */}
      <div className="px-8 py-6">
        {/* Tabs */}
        <div className="rounded-xl shadow-xl shadow-slate-200 bg-[#F3F5F9] border-[12px] dark:border-deskit-black-100 border-white mb-10 p-1 overflow-hidden  dark:bg-deskit-black-500 dark:text-deskit-black-500 dark:shadow-deskit-black-500">
          <ul className="flex flex-col lg:flex-row items-center gap-8 rounded-md overflow-hidden w-full ">
            {tabs.map((tab) => (
              <li className="rounded-md overflow-hidden" key={tab}>
                <button
                  className={`block w-full text-left px-4 py-2 font-bold text-sm rounded-md transition ${
                    activeTab === tab
                      ? "text-deskit-blue-300 bg-white dark:text-white dark:bg-deskit-black-500"
                      : "text-deskit-gray-400 dark:text-deskit-black-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab content */}
        <div className=" text-deskit-blue-300">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Permissions;
