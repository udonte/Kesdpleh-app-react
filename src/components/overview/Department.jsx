import React from "react";
import Modal from "../common/Modal/Modal";
import placeholder from "../../assets/adeola.png";
import Table from "../common/Table/Table";
import TableRow from "../common/Table/TableRow";

const Department = ({ isOpen }) => {
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
  ];
  return (
    <Modal
      isOpen={isOpen}
      position="center"
      title={"Procurement"}
      showCloseIcon={true}
      showHeader={true}
    >
      <div className="py-6 px-2 min-w-[700px]">
        <div className="flex items-center gap-2 text-sm mb-8">
          <p className="font-bold">Manager: </p>
          <img
            src={placeholder}
            alt="profile"
            className="w-[20px] h-[20px] object-cover rounded-full"
          />
          <p className="font-bold">Sam Manyo</p>
          <p className="font-bold ml-auto">32 Total team members</p>
        </div>

        {/* table */}
        <div
          className="max-h-[300px] overflow-y-scroll border border-deskit-gray-100"
          style={{
            scrollbarWidth: "thin" /* For Firefox */,
            WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
            scrollbarTrackColor:
              "#f1f1f1" /* Background color of the scrollbar track */,
            scrollbarColor:
              "#E2E4E8 #ffffff" /* Color of the scrollbar thumb and track */,
            borderRadius: "8px" /* Radius of the scrollbar thumb s*/,
          }}
        >
          <Table>
            {employees.map((item, id) => (
              <TableRow key={id} className="px-6 w-[30px]" id={id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={placeholder}
                      alt="profile"
                      className="w-[20px] h-[20px] object-cover rounded-full"
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
      </div>
    </Modal>
  );
};

export default Department;
