import React from "react";
import Modal from "../../../../components/common/Modal/Modal";
import placeholder from "../../../../assets/adeola.png";

const ViewDetails = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      position="center"
      title={"Employees Details"}
      showCloseIcon={true}
      showHeader={true}
    >
      <div className="">
        {/* top */}
        <div className="flex items-center justify-between w-1/2 text-xs">
          <p className="flex items-center gap-1">
            Date Created: <span> 12/12/2024</span>
          </p>
          <p className="flex items-center gap-1 w-7 h-[1px] bg-deskit-blue-600/30 ">
            {" "}
          </p>
          <p className="flex items-center gap-1">
            Date Deactivated: <span> 2/12/2024</span>
          </p>
        </div>

        {/* body */}
        <div className="flex items-start justify-start gap-8 px-4 py-8 mt-8 text-sm">
          {/* image col */}
          <div className="rounded-full flex items-center justify-center h-[70px] w-[80px] overflow-hidden">
            <img
              src={placeholder}
              alt={"adeola"}
              className="rounded-full h-full w-full object-cover"
            />
          </div>

          <div className="flex items-start gap-8 w-full">
            {/* first col */}
            <div className="flex flex-col gap-2 justify-start">
              <div className="flex items-center gap-2">
                <p className="font-bold">Name:</p>
                <p>Laura Martinez</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Phone Number:</p>
                <p>090457653356</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Email:</p>
                <p>laura.martinez@example.com</p>
              </div>
            </div>
            {/* second column */}
            <div className="flex flex-col gap-2 justify-start">
              <div className="flex items-center gap-2">
                <p className="font-bold">Department:</p>
                <p>IT Support</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Job Role:</p>
                <p>Product Design</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Position:</p>
                <p>Employee</p>
              </div>
            </div>
            {/* third col */}
            <div className="flex flex-col gap-2 justify-start">
              <div className="flex items-center gap-2">
                <p className="font-bold">Location:</p>
                <p>Location Name</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Date Hired:</p>
                <p>12/12/2024</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Last Login:</p>
                <p>
                  12/12/2024 <span>09:40pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDetails;
