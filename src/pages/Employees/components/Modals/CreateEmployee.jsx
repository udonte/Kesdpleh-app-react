import React, { useRef, useState } from "react";
import Modal from "../../../../components/common/Modal/Modal";
import topboard from "../../../../assets/employee/topboard.svg";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import Button from "../../../../components/common/Button/Button";
import { RiFolderUploadFill, RiUploadCloudFill } from "react-icons/ri";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDropDown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { BsFileImageFill } from "react-icons/bs";

const CreateEmployee = ({ isOpen }) => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    jobRole: "",
    location: "",
    dateHired: "",
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

  const positionOptions = [
    { value: "employee", label: "Employee" },
    { value: "manager", label: "Line Manager" },
  ];

  const locationOptions = [
    { value: "location1", label: "Location 1" },
    { value: "location2", label: "Location 2" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      position="right"
      width="sm"
      showHeader={true}
      title={"Create Employee"}
      showCloseIcon={true}
    >
      <div
        className="w-full h-[90%] overflow-y-scroll border-b border-gray-100 p-2"
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
        <div className="mb-8">
          <img src={topboard} alt="topboard" className="w-full" />
        </div>
        <div>
          {/* image */}
          <div>
            <div className="mb-4 font-bold">Employee Image</div>
            <div className="w-full h-[180px] flex flex-col items-center justify-center bg-[#F3F5F9] border-dotted border-2 border-gray-200 rounded-lg dark:bg-deskit-black-100 dark:text-white">
              <span
                className="rounded-lg py-4 px-4 bg-[#E2E4E8] flex items-center gap-2 cursor-pointer dark:bg-deskit-black-100 dark:text-white"
                // onClick={handleUploadClick}
              >
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  ref={fileInputRef}
                  // onChange={handleFileChange}
                  className="hidden"
                />
                <BsFileImageFill size={25} className="text-deskit-blue-300" />
              </span>
              <p className=" mt-4">
                <span className="cursor-pointer text-deskit-orange-700">
                  Click to Upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs">(Pdf,Jpeg,PNG. Max. File size: 5MB)</p>
            </div>
          </div>
          <div>
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
              <div className="w-full">
                <CustomDropDown
                  size={"medium"}
                  inputClasses={"w-full mt-1"}
                  label={"Location"}
                  name="location"
                  placeHolder={"Select Location"}
                  options={locationOptions}
                  onSelect={handleSelect}
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
                <div className="w-full">
                  <CustomDropDown
                    size={"medium"}
                    inputClasses={"w-full mt-1"}
                    label={"Position"}
                    name="position"
                    placeHolder={"Select Position"}
                    options={positionOptions}
                    onSelect={handleSelect}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    type={"date"}
                    size={"medium"}
                    inputClassName={"w-full mt-1"}
                    placeholder={"Enter Date Hired"}
                    label={"Date Hired"}
                    name="dateHired"
                    value={formData.dateHired}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-2 w-full">
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
              </div>

              {/* form actions */}
              <div className="flex items-center gap-2">
                <Button
                  size="lg"
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  onClick={handleSave}
                  fullWidth={true}
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEmployee;
