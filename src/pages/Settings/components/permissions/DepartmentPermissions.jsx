import React, { useState } from "react";
import ToggleButton from "../../../../components/common/ToggleButton/ToggleButton";

const DepartmentPermissions = () => {
  const [permissions, setPermissions] = useState([
    {
      name: "itSupport",
      label: "IT Support",
      isToggled: false,
    },
    {
      name: "facility",
      label: "Facility",
      isToggled: false,
    },
    {
      name: "logistics",
      label: "Logistics",
      isToggled: false,
    },
    {
      name: "procurement",
      label: "Procurement",
      isToggled: false,
    },
    {
      name: "finance",
      label: "Finance",
      isToggled: false,
    },
    {
      name: "humanResource",
      label: "Human Resource",
      isToggled: false,
    },
    {
      name: "project",
      label: "Project",
      isToggled: false,
    },
  ]);
  const handleToggle = (index) => {
    const updatedPermissions = permissions.map((permission, i) =>
      i === index
        ? { ...permission, isToggled: !permission.isToggled }
        : permission
    );
    setPermissions(updatedPermissions);
  };

  return (
    <div className="text-deskit-blue-600  dark:text-white font-bold text-sm w-full  lg:w-[60%] ">
      <div className="space-y-4">
        <div className="flex lg:items-center flex-col lg:flex-row items-start lg:justify-between">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg mb-2">
              Forward Approval to Admin
            </div>
            <p className="font-normal text-sm text-deskit-gray-400">
              This permission allows Department Ticket approval to be done by
              the Admin
            </p>
          </div>
        </div>
        {permissions.map((permission, index) => (
          <div
            key={permission.name}
            className="flex lg:items-center lg:flex-row items-start justify-between"
          >
            <div className="font-bold text-lg mb-2">{permission.label}</div>
            <ToggleButton
              size={`sm`}
              name={permission.name}
              isToggled={permission.isToggled}
              onToggle={() => handleToggle(index)}
              className="mr-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPermissions;
