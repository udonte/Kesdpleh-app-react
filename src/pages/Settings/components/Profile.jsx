import React, { useState, useRef } from "react";
import Button from "../../../components/common/Button/Button";
import { RiFolderUploadFill } from "react-icons/ri";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDropDown from "../../../components/common/CustomDropdown/CustomDropdown";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    jobRole: "",
  });
  const fileInputRef = useRef(null);

  // Handle the image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle the remove image action
  const handleRemoveImage = () => {
    setImage(null);
  };

  // Trigger the file input click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle dropdown selection
  const handleSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      department: "",
      jobRole: "",
    });
    setImage(null);
  };

  // Handle form save
  const handleSave = () => {
    // Add save logic here (e.g., send data to the server)
    console.log("Form data saved:", formData);
    console.log("Image:", image);
  };

  const departmentOptions = [
    { value: "hr", label: "Human Resources" },
    { value: "eng", label: "Engineering" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <div className="text-deskit-blue-300 font-bold text-sm dark:bg-deskit-black-400 dark:text-white">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200 dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Profile</div>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-6">
        {/* image */}
        <div className="">
          <div className="mb-4">Profile Picture</div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-[84px] h-[84px]">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-deskit-gray-200 dark:bg-deskit-black-100 rounded-full border border-gray-300 dark:border-deskit-black-100">
                  <span className="rounded-full p-8 bg-deskit-gray-200 dark:bg-deskit-black-100">
                    <MdOutlinePhotoCameraFront size={20} />
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                className="bg-deskit-gray-500 font-bold"
                onClick={handleUploadClick}
              >
                <RiFolderUploadFill className="mr-2" />
                Upload
              </Button>
              {image && (
                <Button
                  className="bg-deskit-red-500/10 text-deskit-red-500"
                  onClick={handleRemoveImage}
                >
                  Remove
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* form */}
        <div className="mt-8 w-full flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Name"}
                label={"First Name"}
                name="firstName"
                value={formData.firstName}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Surname"}
                label={"Last Name"}
                name="lastName"
                value={formData.lastName}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Email"}
                label={"Enter Email"}
                name="email"
                value={formData.email}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Phone Number"}
                label={"Phone Number"}
                name="phoneNumber"
                value={formData.phoneNumber}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
            <div className="w-full">
              <CustomDropDown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                label={"Department"}
                name="department"
                placeHolder={"Select Department"}
                options={departmentOptions}
                onSelect={handleSelect}
              />
            </div>
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Job Role"}
                label={"Job Role"}
                name="jobRole"
                value={formData.jobRole}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          {/* form actions */}
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
      </div>
    </div>
  );
};

export default Profile;
