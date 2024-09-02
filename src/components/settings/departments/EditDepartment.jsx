import React, { useState } from "react";
import Modal from "../../common/Modal/Modal";
import CustomInput from "../../common/CustomInput/CustomInput";
import { closeAllModals } from "../../../common/Modals/modal.slice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import { FiX } from "react-icons/fi";
import { FaSquarePlus } from "react-icons/fa6";

const EditDepartment = ({ isOpen, departmentData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    department_title: departmentData?.department_title || "",
    department_color: departmentData?.department_color || "",
    categories: departmentData?.categories || [{ id: 1, category: "" }],
  });

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name.startsWith("category") && index !== null) {
      const updatedCategories = formData.categories.map((category, i) =>
        i === index ? { ...category, category: value } : category
      );
      setFormData({
        ...formData,
        categories: updatedCategories,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddCategory = () => {
    setFormData({
      ...formData,
      categories: [
        ...formData.categories,
        { id: formData.categories.length + 1, category: "" },
      ],
    });
  };

  const handleRemoveCategory = (index) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((_, i) => i !== index),
    });
  };

  const handleSaveChanges = () => {
    // You would typically dispatch an action to update the department
    // For now, we'll just close the modal
    dispatch(closeAllModals());
  };

  return (
    <Modal
      title={"Edit Department"}
      isOpen={isOpen}
      position="center"
      showHeader={true}
      showCloseIcon={true}
    >
      <div
        className="w-[400px] mt-4 overflow-y-scroll max-h-[500px]"
        style={{
          scrollbarWidth: "none" /* For Firefox */,
          WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
        }}
      >
        <div className="w-full h-full">
          <div className="w-full">
            <div className="mt-5">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Department Title"}
                label={"Department Title"}
                name="department_title"
                value={formData.department_title}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="mt-5 w-full">
              <label
                htmlFor={"department_color"}
                className="font-bold text-deskit-blue-300"
              >
                Department Color
              </label>
              <div className="flex items-center border-0 outline-none bg-[#F3F5F9] text-deskit-gray-400 rounded-md font-light p-3 min-h-14 w-full mt-1">
                <p className="flex-1">-Select Color-</p>
                <div className="border-2 border-slate-200 rounded-md p-[0.5px] flex items-center justify-center">
                  <input
                    className={`w-[30px] h-[30px] placeholder:rounded-lg cursor-pointer`}
                    type={"color"}
                    value={formData.department_color}
                    name={"department_color"}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {formData.categories.map((item, index) => (
              <div className="mt-5" key={item.id}>
                <CustomInput
                  size={"medium"}
                  inputClassName={"w-full mt-1"}
                  placeholder={"Enter Category"}
                  label={"Category"}
                  name={`category-${index}`}
                  value={item.category}
                  handleInputChange={(e) => handleInputChange(e, index)}
                  icon={<FiX size={20} />}
                  onLabelClick={() => handleRemoveCategory(index)}
                />
              </div>
            ))}
            <div className="flex items-center justify-end">
              <Button
                size="sm"
                className="py-2 text-center bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 mt-4 font-light flex items-center gap-2"
                onClick={handleAddCategory}
              >
                <FaSquarePlus size={15} />
                Add Category
              </Button>
            </div>
            <Button
              size="lg"
              className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 w-full mt-8 mb-4 font-medium"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditDepartment;
