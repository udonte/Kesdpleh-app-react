import React, { useState } from "react";
import Table from "../../../components/common/Table/Table";
import TableRow from "../../../components/common/Table/TableRow";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidTrash } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import placeholder from "../../../assets/adeola.png";
import EmployeeCard from "./EmployeeCard";
import TablePagination from "../../../components/common/Table/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModalByName } from "../../../common/Modals/modal.slice";
import ViewDetails from "./Modals/ViewDetails";
import DeactivateEmp from "./Modals/DeactivateEmp";
import Permissions from "./Modals/Permissions";
import { selectModalsSlice } from "../../../common/Modals/modal.selectors";

const InactiveEmployees = ({ showListview }) => {
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);

  const viewDetails = modals.VIEW_details;
  const deactivateEmployee = modals.DEACTIVATE_employee;
  const navigate = useNavigate();

  const openViewDetailsModal = () => {
    dispatch(openModalByName("VIEW_details"));
  };
  const openDeactivateEmployeeModal = () => {
    dispatch(openModalByName("DEACTIVATE_employee"));
  };

  const tableHeaders = ["Employee ID", "Name", "Email", "Phone", "Role"];

  const dotOptions = [
    {
      text: "View Details",
      icon: <IoEyeSharp />,
      callBack: () => {
        openViewDetailsModal();
      },
    },
    {
      text: "Deactivate Employee",
      icon: <BiSolidTrash />,
      callBack: () => {
        openDeactivateEmployeeModal();
        // dispatch(deleteAssetById(id))
        //   .unwrap()
        //   .then((payload) => {
        //     console.log(payload);
        //     if (payload.data.id && payload.data.created_at) {
        //       dispatch(closeAllModals());
        //       dispatch(fetchAssets());
        //     }
        //   });
        return;
      },
    },
  ];

  const employees = [
    {
      id: "GU001",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "9876543210",
      role: "Project Manager",
    },
    {
      id: "GU002",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "2345678901",
      role: "Software Engineer",
    },
    {
      id: "GU003",
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      phone: "3456789012",
      role: "UX Designer",
    },
    {
      id: "GU004",
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "4567890123",
      role: "HR Specialist",
    },
    {
      id: "GU005",
      name: "Ella White",
      email: "ella.white@example.com",
      phone: "5678901234",
      role: "Marketing Manager",
    },
    {
      id: "GU006",
      name: "Frank Green",
      email: "frank.green@example.com",
      phone: "6789012345",
      role: "Sales Executive",
    },
    {
      id: "GU007",
      name: "Grace Adams",
      email: "grace.adams@example.com",
      phone: "7890123456",
      role: "Business Analyst",
    },
    {
      id: "GU008",
      name: "Hannah Clark",
      email: "hannah.clark@example.com",
      phone: "8901234567",
      role: "Customer Support",
    },
    {
      id: "GU009",
      name: "Ian Lee",
      email: "ian.lee@example.com",
      phone: "9012345678",
      role: "DevOps Engineer",
    },
    {
      id: "GU010",
      name: "Julia Turner",
      email: "julia.turner@example.com",
      phone: "1234567809",
      role: "Data Scientist",
    },
    {
      id: "GU011",
      name: "Kevin Harris",
      email: "kevin.harris@example.com",
      phone: "2345678012",
      role: "Network Engineer",
    },
    {
      id: "GU012",
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      phone: "3456789021",
      role: "QA Engineer",
    },
    {
      id: "GU013",
      name: "Michael Davis",
      email: "michael.davis@example.com",
      phone: "4567890132",
      role: "Product Manager",
    },
    {
      id: "GU014",
      name: "Natalie Thompson",
      email: "natalie.thompson@example.com",
      phone: "5678901243",
      role: "Content Writer",
    },
    {
      id: "GU015",
      name: "Oliver Walker",
      email: "oliver.walker@example.com",
      phone: "6789012354",
      role: "Graphic Designer",
    },
    {
      id: "GU016",
      name: "Patricia Hall",
      email: "patricia.hall@example.com",
      phone: "7890123465",
      role: "Financial Analyst",
    },
    {
      id: "GU017",
      name: "Quentin Young",
      email: "quentin.young@example.com",
      phone: "8901234576",
      role: "System Administrator",
    },
    {
      id: "GU018",
      name: "Rachel King",
      email: "rachel.king@example.com",
      phone: "9012345687",
      role: "Operations Manager",
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / rowsPerPage);
  const currentData = employees.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="mt-8 bg-white dark:bg-deskit-black-400 shadow-lg rounded-xl min-h-[800px] overflow-hidden mb-8 p-8 dark:text-white">
      <div>
        <p className="mb-8 font-bold">All Archived Employees</p>
        {showListview ? (
          <div>
            <Table
              pagination={true}
              data={currentData}
              tableHeaders={tableHeaders}
              checkbox={true}
              dotOption={true}
              rowsPerPage={rowsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            >
              {currentData.map((item, id) => (
                <TableRow
                  key={id}
                  className="px-6 w-[30px]"
                  dotOptions={dotOptions}
                  id={id}
                  checkbox={true}
                >
                  <td className="px-6 py-4 whitespace-nowrap ">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={placeholder}
                        alt="profile"
                        className="w-[35px] h-[35px] object-cover rounded-full"
                      />
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                </TableRow>
              ))}
            </Table>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-4 gap-4">
              {currentData.map((item, id) => (
                <EmployeeCard
                  key={id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                  role={item.role}
                  dotOptions={dotOptions}
                />
              ))}
            </div>
            <TablePagination
              rowsPerPage={rowsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </div>
        )}
      </div>

      {viewDetails && <ViewDetails isOpen={viewDetails} />}
      {deactivateEmployee && <DeactivateEmp isOpen={deactivateEmployee} />}
    </div>
  );
};

export default InactiveEmployees;
