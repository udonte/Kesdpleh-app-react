import React, { useState } from "react";
import ToggleButton from "../../../../components/common/ToggleButton/ToggleButton";

const ManagerPermissions = () => {
  const [permissions, setPermissions] = useState([
    {
      name: "resetProfile",
      label: "Allow Manager To Reset Profile",
      description: "This permission allows manager to reset their own profile",
      isToggled: false,
    },
    {
      name: "approveDeclineTickets",
      label: "Allow Manager Approve/Decline Tickets",
      description:
        "This permission allows Department Manager to approve/decline tickets created by team members.",
      isToggled: false,
    },
    {
      name: "reassignTickets",
      label: "Allow Manager Reassign Tickets",
      description:
        "This permission allows Manager to reassign tickets to team members.",
      isToggled: false,
    },
    {
      name: "moveTickets",
      label: "Allow Manager Move Tickets",
      description:
        "This permission allows Manager to move tickets to another department.",
      isToggled: false,
    },
    {
      name: "resetPassword",
      label: "Allow Manager Reset Password",
      description: "This permission allows Manager to reset their password.",
      isToggled: false,
    },
    {
      name: "createEmployee",
      label: "Allow Human Resource Manager Create Employee",
      description: "This permission allows Manager to create employees.",
      isToggled: false,
    },
    {
      name: "deactivateEmployee",
      label: "Allow Human Resource Manager Deactivate Employee",
      description: "This permission allows Manager to deactivate employees.",
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
    <div className="text-deskit-blue-600  dark:text-white font-bold text-sm space-y-4">
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

export default ManagerPermissions;
