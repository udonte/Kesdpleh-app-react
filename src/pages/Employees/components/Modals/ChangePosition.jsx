import React from "react";
import Modal from "../../../../components/common/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeAllModals } from "../../../../common/Modals/modal.slice";
import Button from "../../../../components/common/Button/Button";
import placeholder from "../../../../assets/adeola.png";

const ChangePosition = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleChangePosition = () => {
    dispatch(closeAllModals());
  };
  return (
    <Modal isOpen={isOpen} position="center">
      <div className="w-[270px] py-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <p className=" flex items-center justify-center rounded-full h-24 w-24 p-8 bg-red-100 text-red-700 text-[36px]">
            !
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex items-center gap-3">
              <p>Employee</p>
              <div>
                <img
                  src={placeholder}
                  alt="profile"
                  className="w-[25px] h-[25px] object-cover rounded-full"
                />{" "}
              </div>
              <span className="font-semibold">Lousi Bangi</span>
            </div>
            <p className="w-[90%] text-center">
              is already Manager, would you like to replace?
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <Button
            size="lg"
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 w-full font-normal text-xs"
            onClick={handleChangePosition}
          >
            Yes, make Employee the Manager
          </Button>
          <Button
            size="lg"
            className=" bg-deskit-gray-200 text-deskit-blue-300 font-normal w-full mt-4 text-xs"
            onClick={() => dispatch(closeAllModals())}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangePosition;
