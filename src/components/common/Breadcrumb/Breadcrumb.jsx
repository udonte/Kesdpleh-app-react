import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths, pageTitle }) => {
  const userRole = localStorage.getItem("userRole");
  const userDepartment = "Procurement";

  return (
    <div className="w-fit text-xs dark:bg-deskit-black-500 dark:text-white ">
      {/* Breadcrumb Paths */}
      <div className="font-medium dark:text-deskit-black-50 ">
        {paths?.map((path, index) => (
          <span key={index} className="text-deskit-blue-300  dark:text-white">
            {path.url ? (
              <Link
                to={path.url}
                className="hover:underline  dark:text-deskit-black-50"
              >
                {path.name}
              </Link>
            ) : (
              <span>{path.name}</span>
            )}
            {index < paths.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </div>

      {/* Page Title and User Info */}
      <div className="flex gap-3 items-center font-medium">
        <p className="text-xl font-bold dark:text-white">{pageTitle}</p>
        <FaCircle
          size={5}
          className="text-deskit-blue-300 dark:text-deskit-black-50"
        />
        <p className="dark:text-deskit-black-50">
          {userRole === "admin" ? "Admin" : userDepartment}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
