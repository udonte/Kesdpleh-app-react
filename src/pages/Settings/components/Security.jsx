import React, { useState } from "react";
import Button from "../../../components/common/Button/Button";
import CustomInput from "../../../components/common/CustomInput/CustomInput";

const Security = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  // Handle form save
  const handleSave = () => {
    setShowPasswordForm(false);
    // Add save logic here (e.g., send data to the server)
    console.log("Form data saved:", formData);
  };

  return (
    <div className="text-deskit-blue-600 font-bold text-sm  dark:bg-deskit-black-400 dark:text-white">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200 dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Security</div>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-6">
        {/* change password */}
        {showPasswordForm ? (
          <div className="mt-8 w-full flex flex-col gap-8">
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Old Password"}
                label={"Old Password"}
                name="oldPassword"
                type={showPassword ? "text" : "password"}
                value={formData.oldPassword}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter New Password"}
                label={"New Password"}
                name="newPassword"
                type={showPassword ? "text" : "password"}
                value={formData.newPassword}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Confirm New Password"}
                label={"Confirm New Password"}
                name="confirmNewPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmNewPassword}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <label className="ml-2">Show Passwords</label>
            </div>
            <div className="w-full flex lg:justify-end">
              <div className="flex items-center gap-2">
                <Button
                  className="bg-deskit-gray-200 text-deskit-blue-300"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">Password</div>
            <div className="flex flex-col lg:flex-row lg:items-end gap-4">
              <p className="font-normal text-desk">
                Set a unique password to protect your account
              </p>
              <Button
                className="bg-deskit-gray-600 text-deskit-blue-300 hover:bg-deskit-gray-200 dark:bg-deskit-black-100 dark:text-deskit-black-50"
                onClick={() => setShowPasswordForm(true)}
              >
                Change Password
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
