import React, { useState } from "react";
import ToggleButton from "../../../../components/common/ToggleButton/ToggleButton";

const EmployeePermissions = () => {
  const [permissions, setPermissions] = useState([
    {
      name: "resetProfile",
      label: "Allow Employee To Reset Profile",
      description: "This permission allows employee to reset their own profile",
      isToggled: false,
    },
    {
      name: "treatTickets",
      label: "Allow Employee Treat Tickets Without Manager’s Assignment",
      description:
        "This permission allows employee to treat tickets in the department without the manager’s assigning.",
      isToggled: false,
    },
    {
      name: "seeAllTickets",
      label: "Allow Employee See All Tickets In All Departments",
      description:
        "This permission allows employee to see tickets from all other departments in the system.",
      isToggled: false,
    },
    {
      name: "reassignTickets",
      label: "Allow Employee Reassign Tickets",
      description:
        "This permission allows employee to reassign tickets assigned to them.",
      isToggled: false,
    },
    {
      name: "moveTickets",
      label: "Allow Employee Move Tickets",
      description:
        "This permission allows employee to move tickets to another department.",
      isToggled: false,
    },
    {
      name: "resetPassword",
      label: "Allow Employee Reset Password",
      description: "This permission allows employee to reset their password.",
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
    <div className="text-deskit-blue-600 dark:text-white font-bold text-sm space-y-4">
      {permissions.map((permission, index) => (
        <div
          key={permission.name}
          className="flex lg:items-center flex-col lg:flex-row items-start lg:justify-between"
        >
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg mb-2">{permission.label}</div>
            <p className="font-normal text-sm text-deskit-gray-400">
              {permission.description}
            </p>
          </div>
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
  );
};

export default EmployeePermissions;
