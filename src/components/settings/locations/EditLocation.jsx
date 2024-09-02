import React, { useState } from "react";
import Modal from "../../common/Modal/Modal";
import CustomInput from "../../common/CustomInput/CustomInput";
import { closeAllModals } from "../../../common/Modals/modal.slice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";

const EditLocation = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    location_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddLocation = () => {
    dispatch(closeAllModals());
  };
  return (
    <Modal
      title={"Edit Location"}
      isOpen={isOpen}
      position="center"
      showHeader={true}
      showCloseIcon={true}
    >
      <div className="w-[500px] h-[165px] mt-4">
        <div className=" w-full h-full">
          <div className="w-full">
            <CustomInput
              size={"medium"}
              inputClassName={"w-full mt-1"}
              placeholder={"Enter Location Name"}
              label={"Location Name"}
              name="location_name"
              value={formData.location_name}
              handleInputChange={handleInputChange}
            />

            <Button
              size="lg"
              className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 w-full mt-8"
              onClick={handleAddLocation}
            >
              Complete
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditLocation;
