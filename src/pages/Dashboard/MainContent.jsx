import React from "react";
import Overview from "../Overview/Overview";
import Tickets from "../Tickets/Tickets";
import KnowledgeBase from "../KnowledgeBase/KnowledgeBase";
import Settings from "../Settings/Settings";
import Employees from "../Employees/Employees";
import Report from "../Report/Report";

const MainContent = ({ currentTab = "index" }) => {
  return (
    <div className="flex-1 py-8 px-4 bg-deskit-gray-200">
      {currentTab === "overview" && <Overview />}
      {currentTab === "tickets" && <Tickets />}
      {currentTab === "knowledge-base" && <KnowledgeBase />}
      {currentTab === "settings" && <Settings />}
      {currentTab === "employees" && <Employees />}
      {currentTab === "reports" && <Report />}
    </div>
  );
};

export default MainContent;
