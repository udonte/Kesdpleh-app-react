import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="flex h-screen bg-white text-deskit-blue-300 flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="flex-1 px-5 mt-12 bg-deskit-gray-200 overflow-y-scroll dark:bg-deskit-black-500  "
          style={{
            scrollbarWidth: "none" /* For Firefox */,
            WebkitScrollbarWidth: "none" /* For WebKit-based browsers */,
            scrollbarTrackColor:
              "#f1f1f1" /* Background color of the scrollbar track */,
            scrollbarColor:
              "#888 #f1f1f1" /* Color of the scrollbar thumb and track */,
            borderRadius: "4px" /* Radius of the scrollbar thumb */,
          }}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
