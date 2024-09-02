import React, { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { FaLock } from "react-icons/fa";
import ActiveEmployees from "./components/ActiveEmployees";
import InactiveEmployees from "./components/InactiveEmployees";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillInboxesFill, BsGridFill, BsListNested } from "react-icons/bs";
import Button from "../../components/common/Button/Button";
import { IoDownload } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../common/Modals/modal.selectors";
import { openModalByName } from "../../common/Modals/modal.slice";
import ImportEmployee from "./components/Modals/ImportEmployee";
import CreateEmployee from "./components/Modals/CreateEmployee";
import { VscListFilter } from "react-icons/vsc";

const Employees = () => {
  const userRole = localStorage.getItem("userRole");
  const [activeTab, setActiveTab] = useState(true);
  const [showListview, setShowListview] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const importEmployee = modals.IMPORT_employee;
  const createEmployee = modals.CREATE_employee;

  const openImportEmployeeModal = () => {
    dispatch(openModalByName("IMPORT_employee"));
  };
  const openCreateEmployeeModal = () => {
    dispatch(openModalByName("CREATE_employee"));
  };

  const paths = [
    { name: "Deskit", url: "" },
    { name: "Employee", url: "/dashboard/employee" },
  ];

  const filterOptions = [
    {
      text: "IT Support",
      callBack: () => {
        return;
      },
    },
    {
      text: "Facility",
      callBack: () => {
        return;
      },
    },
    {
      text: "Logistics",
      callBack: () => {
        return;
      },
    },
  ];

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-start justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Employee" />
        </div>
        <div className="flex items-center gap-4">
          <Button
            className=" bg-transparent font-bold border-2 border-gray-400 text-deskit-orange-700 flex items-center justify-center gap-2 hover:bg-gray-100  dark:hover:bg-deskit-black-150"
            type="submit"
            onClick={() => openImportEmployeeModal()}
          >
            <IoDownload
              size={20}
              className="text-deskit-blue-300 dark:text-white"
            />
            Import Employee
          </Button>
          <Button
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
            type="submit"
            onClick={() => openCreateEmployeeModal()}
          >
            Create Employee
          </Button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="mt-4">
        <div className="my-2 flex items-start justify-between">
          {/* Tabs */}
          <div className="flex items-end gap-6">
            {/* active tab */}
            <div
              onClick={() => setActiveTab(true)}
              className={`flex items-center justify-center gap-2 py-2 px-3 cursor-pointer relative  dark:text-white  ${
                activeTab
                  ? "font-bold border-b-[1px] border-deskit-blue-300 dark:border-deskit-black-100"
                  : "font-normal border-none"
              }`}
            >
              <span className="">All Employees</span>
              <span
                className="font-bold"
                onClick={() => setShowFilter((prev) => !prev)}
              >
                <MdKeyboardArrowDown size={20} />
              </span>
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#172F5133] dark:bg-deskit-black-300 text-deskit-blue-300 font-medium text-sm dark:text-white">
                200
              </span>

              {showFilter && (
                <div
                  onMouseLeave={() => {
                    setShowFilter((prev) => !prev);
                  }}
                  className="absolute z-10 top-[40px] text-deskit-blue-300 min-w-[200px] left-[10px] top border rounded-lg bg-white shadow-lg overflow-hidden"
                >
                  {filterOptions?.map((item, index) => (
                    <div
                      onClick={() => {
                        item.callBack(id);
                      }}
                      key={index}
                      className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 flex items-center shrink-0 hover:bg-gurugeeks-dark-100 cursor-pointer border border-gray-100"
                    >
                      <p className="text-left font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* inactive tab */}
            <div
              onClick={() => setActiveTab(false)}
              className={`flex items-center justify-center gap-2 py-2 px-3 cursor-pointer  dark:text-white ${
                !activeTab
                  ? "font-bold border-b-[1px] border-deskit-blue-300  dark:border-deskit-black-100"
                  : "font-normal border-none"
              }`}
            >
              <span className="font-bold p-1 rounded-md dark:text-white">
                <BsFillInboxesFill size={20} />
              </span>
              <span className="">Inactive</span>
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#172F5133] text-deskit-blue-300 font-medium text-sm dark:text-white  dark:bg-deskit-black-300">
                20
              </span>
            </div>
          </div>

          {/* views */}
          <div className="flex items-center gap-2">
            <span
              className={`py-4 px-2 rounded text-xl  ${
                showListview
                  ? "bg-deskit-blue-300 text-white dark:bg-deskit-black-150 dark:text-deskit-black-50"
                  : "text-deskit-blue-300 dark:text-deskit-black-150 bg-gray-300 cursor-pointer"
              }`}
              onClick={() => setShowListview(true)}
            >
              <VscListFilter />
            </span>
            <span
              className={`py-4 px-2 rounded text-xl  ${
                showListview
                  ? "text-deskit-blue-300 dark:text-deskit-black-150 bg-gray-300 cursor-pointer "
                  : "bg-deskit-blue-300 text-white  dark:bg-deskit-black-150 dark:text-deskit-black-50"
              }`}
              onClick={() => setShowListview(false)}
            >
              <BsGridFill />
            </span>
          </div>
        </div>
        {/* Tab content */}
        {activeTab ? (
          <ActiveEmployees showListview={showListview} />
        ) : (
          <InactiveEmployees showListview={showListview} />
        )}
      </div>

      {importEmployee && <ImportEmployee isOpen={importEmployee} />}
      {createEmployee && <CreateEmployee isOpen={createEmployee} />}
    </div>
  );
};

export default Employees;
