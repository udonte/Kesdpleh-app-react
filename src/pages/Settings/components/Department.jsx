import React from "react";
import Button from "../../../components/common/Button/Button";
import { HiTrash } from "react-icons/hi2";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../common/Modals/modal.selectors";
import { openModalByName } from "../../../common/Modals/modal.slice";
import AddDepartment from "../../../components/settings/departments/AddDepartment";
import DeleteDepartment from "../../../components/settings/departments/DeleteDepartment";
import EditDepartment from "../../../components/settings/departments/EditDepartment";

const Department = () => {
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const addDepartmentModal = modals.ADD_department;
  const deleteDepartmentModal = modals.DELETE_department;
  const editDepartmentModal = modals.EDIT_department;

  const openAddDepartment = () => {
    dispatch(openModalByName("ADD_department"));
  };

  const openDeleteDepartment = () => {
    dispatch(openModalByName("DELETE_department"));
  };

  const openEditDepartment = () => {
    dispatch(openModalByName("EDIT_department"));
  };

  const departments = [
    {
      title: "IT Support",
      color: "#FF573322",
      categories: [
        "Account Management",
        "Hardware",
        "Software",
        "Networking",
        "Database",
        "Inquiry/Help",
        "Others",
      ],
    },
    {
      title: "Procurement",
      color: "#33FF5722",
      categories: [
        "Vendor Info",
        "Budget Allocation",
        "Required Quantity and Quality",
        "Vendor Recommendation",
        "Receipt, Image and Document",
        "Budget",
        "Inquiry",
        "Audit Trail",
        "Others",
      ],
    },
    {
      title: "Facility",
      color: "#3357FF22",
      categories: [
        "Energy Consumption Tracking",
        "Mobile Access",
        "Cleaning & Janitorial Services",
        "Project",
        "Others",
      ],
    },
    {
      title: "HR",
      color: "#FF33A622",
      categories: [
        "CVs and Application Letters",
        "Onboarding and Off-boarding of Employees",
        "Business KPIs",
        "Office Correspondence",
        "Auditors' Engagement",
        "Project",
        "Others",
      ],
    },
    {
      title: "Finance",
      color: "#33FFF622",
      categories: [
        "Payroll",
        "Financial Statement",
        "Financial Report Payee",
        "Tax and Pension",
        "Others",
      ],
    },
    {
      title: "Logistics",
      color: "#FFAF3322",
      categories: [
        "Ride Hailing & Mobilization",
        "Ride Hailing & Order",
        "Public Transport & Mobilization",
        "Public Transport - Order",
        "Others",
      ],
    },
    {
      title: "Project",
      color: "#9D33FF22",
      categories: [
        "Xcel",
        "Supreme",
        "Exceed",
        "DeskIT",
        "PSJ",
        "OCIL",
        "Others",
      ],
    },
  ];

  return (
    <div className="text-deskit-blue-600 font-bold text-sm dark:bg-deskit-black-400 dark:text-white">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200 dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Department & Category</div>
      </div>
      {/* CONTENT */}
      <div className="lg:px-16 px-6 py-6">
        {/* alert */}
        <div className="">
          <p className="bg-orange-50  dark:bg-deskit-black-150 text-orange-500 px-8 py-2 rounded-md font-normal text-center flex flex-col lg:flex-row items-center justify-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 p-2 bg-orange-100 text-orange-500 text-sm ">
              !
            </span>
            You have a total of 7 departments already in the system, with 13
            more slots of new department to be added
          </p>
        </div>
        {/* add new location */}
        <div className="w-full flex justify-center lg:justify-end my-8">
          <Button
            onClick={openAddDepartment}
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
          >
            Add Department
          </Button>
        </div>
        {/* departments */}
        <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {departments.map((department, index) => (
            <div
              key={index}
              className="py-4 px-6 shadow-xl shadow-slate-100  dark:shadow-deskit-black-500 rounded-lg text-lg"
              style={{ backgroundColor: department.color }}
            >
              <div className="flex flex-col-reverse lg:flex-row gap-2 items-center justify-between">
                <p>{department.title}</p>
                <div className="flex gap-2">
                  <div
                    className="bg-white/30 rounded-full p-2 cursor-pointer"
                    onClick={openDeleteDepartment}
                  >
                    <HiTrash />
                  </div>
                  <div
                    className="bg-white/50 rounded-full p-2 cursor-pointer"
                    onClick={openEditDepartment}
                  >
                    <BiSolidEditAlt />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-medium text-sm mt-4">
                {department.categories.map((category, idx) => (
                  <p key={idx} className="mb-2 text-center md:text-left">
                    {category}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {addDepartmentModal && <AddDepartment isOpen={addDepartmentModal} />}
        {deleteDepartmentModal && (
          <DeleteDepartment isOpen={deleteDepartmentModal} />
        )}
        {editDepartmentModal && <EditDepartment isOpen={editDepartmentModal} />}
      </div>
    </div>
  );
};

export default Department;
