import React, { useState } from "react";
import Modal from "../../common/Modal/Modal";
import { closeAllModals } from "../../../common/Modals/modal.slice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";

const DeleteLocation = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleDeleteLocation = () => {
    dispatch(closeAllModals());
  };
  return (
    <Modal isOpen={isOpen} position="center">
      <div className="w-[270px] py-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <p className=" flex items-center justify-center rounded-full h-24 w-24 p-8 bg-red-100 text-red-700 text-[36px]">
            !
          </p>
          <p className="font-medium w-[90%] text-center mt-4">
            This location will be permanently deleted
          </p>
        </div>
        <div className="w-full flex flex-col">
          <Button
            size="lg"
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600 w-full font-normal"
            onClick={handleDeleteLocation}
          >
            Delete
          </Button>
          <Button
            size="lg"
            className=" bg-deskit-gray-200 text-deskit-blue-300 font-normal w-full mt-4"
            onClick={() => dispatch(closeAllModals())}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteLocation;
