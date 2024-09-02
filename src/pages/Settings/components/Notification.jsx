import React, { useState } from "react";
import ToggleButton from "../../../components/common/ToggleButton/ToggleButton";

const Notification = () => {
  const [formData, setFormData] = useState({
    emailNotifications: false,
    inAppNotifications: false,
  });

  // Handle toggle
  const handleToggle = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name], // Invert the current state of the toggle
    });
  };

  return (
    <div className="text-deskit-blue-600 font-bold text-sm  dark:bg-deskit-black-400 dark:text-white">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200  dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Notification</div>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-6">
        <div className="flex flex-col gap-8">
          <div>
            <div className="font-bold text-base mb-2">Email notification</div>
            <div className="flex flex-col md:flex-row items-end gap-16">
              <p className="font-normal text-xs text-deskit-gray-400">
                Get email notification for all tickets updates
              </p>
              <ToggleButton
                size="xs"
                name="emailNotifications"
                isToggled={formData.emailNotifications}
                onToggle={() => handleToggle("emailNotifications")}
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-base mb-2">In-app notification</div>
            <div className="flex flex-col md:flex-row items-end gap-16">
              <p className="font-normal text-xs text-deskit-gray-400">
                Get In-app notification for all tickets updates
              </p>
              <ToggleButton
                size="xs"
                name="inAppNotifications"
                isToggled={formData.inAppNotifications}
                onToggle={() => handleToggle("inAppNotifications")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
