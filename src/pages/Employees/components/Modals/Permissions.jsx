import React, { useState } from "react";
import Modal from "../../../../components/common/Modal/Modal";
import CustomCheckbox from "../../../../components/common/CustomCheckbox";
import Table from "../../../../components/common/Table/Table";
import TableRow from "../../../../components/common/Table/TableRow";
import placeholder from "../../../../assets/adeola.png";
import ChangePosition from "./ChangePosition";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../common/Modals/modal.selectors";
import { openModalByName } from "../../../../common/Modals/modal.slice";

const Permissions = ({ isOpen }) => {
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const openChangePositionModal = () => {
    dispatch(openModalByName("CHANGE_position"));
  };

  const tableHeaders = [
    "Department",
    "See Ticket",
    "Treat Ticket",
    "Move Ticket",
  ];
  const [permissions, setPermissions] = useState([
    {
      name: "IT Support",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Facility",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Logistics",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Finance",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Procurement",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Human Resource",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
    {
      name: "Project",
      isSeeTicket: false,
      isTreatTicket: false,
      isMoveTicket: false,
    },
  ]);

  const handleCheckboxChange = (id, name) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((dept, index) =>
        index === id ? { ...dept, [name]: !dept[name] } : dept
      )
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      position="center"
      title={"Access"}
      showCloseIcon={true}
      showHeader={true}
    >
      <div className=" py-6 px-2">
        <div className="items-center gap-2">
          <div className="flex items-center gap-2 text-sm mb-8">
            <p className="font-bold">Employee: </p>
            <img
              src={placeholder}
              alt="profile"
              className="w-[25px] h-[25px] object-cover rounded-full"
            />
            <p>Sam Manyo</p>
            <p
              className="font-medium text-deskit-orange-700 cursor-pointer border-b border-deskit-orange-700"
              onClick={() => openChangePositionModal()}
            >
              (Change employee's position from employee to manager)
            </p>
          </div>
        </div>
        <div
          className="max-h-[300px] overflow-y-scroll border border-deskit-gray-100"
          style={{
            scrollbarWidth: "none" /* For Firefox */,
            WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
            scrollbarTrackColor:
              "#f1f1f1" /* Background color of the scrollbar track */,
            scrollbarColor:
              "#E2E4E8 #ffffff" /* Color of the scrollbar thumb and track */,
            borderRadius: "8px" /* Radius of the scrollbar thumb s*/,
          }}
        >
          <Table tableHeaders={tableHeaders}>
            {permissions.map((dept, id) => (
              <TableRow key={id} className="px-6 w-[30px]" id={id}>
                <td className="px-6 py-4 whitespace-nowrap">{dept.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full flex items-center justify-center">
                    <CustomCheckbox
                      checked={dept.isSeeTicket}
                      onChange={() => handleCheckboxChange(id, "isSeeTicket")}
                      name="isSeeTicket"
                      size="md"
                      className={
                        "accent-deskit-orange-600 checked:bg-deskit-orange-600"
                      }
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full flex items-center justify-center">
                    <CustomCheckbox
                      checked={dept.isTreatTicket}
                      onChange={() => handleCheckboxChange(id, "isTreatTicket")}
                      name="isTreatTicket"
                      size="md"
                      className={
                        "accent-deskit-orange-600 checked:bg-deskit-orange-600"
                      }
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full flex items-center justify-center">
                    <CustomCheckbox
                      checked={dept.isMoveTicket}
                      onChange={() => handleCheckboxChange(id, "isMoveTicket")}
                      name="isMoveTicket"
                      size="md"
                      className={
                        "accent-deskit-orange-600 checked:bg-deskit-orange-600"
                      }
                    />
                  </div>
                </td>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </Modal>
  );
};

export default Permissions;
