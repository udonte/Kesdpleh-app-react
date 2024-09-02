// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";
import { selectTheme } from "./Theme/theme.selector";

const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`bg-black`}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <div className="h-screen">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
