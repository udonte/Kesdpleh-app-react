import React, { useState } from "react";

import MainContent from "./MainContent";
import { Outlet } from "react-router-dom";

const KnowledgeBase = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="w-full text-xs my-8">
      <Outlet />
    </div>
  );
};

export default KnowledgeBase;
