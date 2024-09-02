import React, { useRef, useState } from "react";
import Modal from "../../../../components/common/Modal/Modal";
import { RiUploadCloudFill } from "react-icons/ri";
import Button from "../../../../components/common/Button/Button";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../../../common/Modals/modal.slice";

const ImportEmployee = ({ isOpen }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [fileSize, setFileSize] = useState(0);
  const templateUrl = "/assets/employee/importTemplate.csv";

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileSize(selectedFile.size);
      simulateUpload(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileSize(droppedFile.size);
      simulateUpload(droppedFile);
    }
  };

  const simulateUpload = (file) => {
    setUploading(true);
    let progress = 0;
    let uploadedBytes = 0;
    const totalTime = 5000; // Simulate a 5-second upload
    const interval = 100;
    const increment = (file.size * interval) / totalTime; // Increment based on file size and time

    const uploadInterval = setInterval(() => {
      progress += (increment / file.size) * 100;
      uploadedBytes += increment;
      const timeLeft = Math.ceil((totalTime * (100 - progress)) / 1000);

      setUploadProgress(Math.min(progress, 100));
      setTimeRemaining(timeLeft);
      setUploadedSize(Math.min(uploadedBytes, file.size));

      if (progress >= 100) {
        clearInterval(uploadInterval);
        setUploading(false);
      }
    }, interval);
  };

  const handleImportClick = () => {
    console.log("Simulating import process...");
    // Implement actual import logic here

    dispatch(closeAllModals());
  };

  return (
    <Modal
      title={"Import Employees"}
      isOpen={isOpen}
      position="center"
      showCloseIcon={true}
      showHeader={true}
    >
      <div className="w-[532px]">
        <p className="text-xs mb-8">
          Download template document before import{" "}
          <span className="cursor-pointer text-deskit-orange-700 ml-2 border-b-2 border-deskit-orange-700">
            <a href={templateUrl} download={"Import Template"}>
              Download here
            </a>
          </span>{" "}
        </p>
        <div
          className="w-full h-[180px] flex flex-col items-center justify-center bg-[#F3F5F9] border-dotted border-2 border-gray-200 rounded-lg dark:bg-deskit-black-100 dark:text-white"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <span
            className="rounded-lg py-2 px-4 bg-[#E2E4E8] flex items-center gap-2 cursor-pointer dark:bg-deskit-black-100 dark:text-white"
            onClick={handleUploadClick}
          >
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <RiUploadCloudFill size={25} className="text-deskit-blue-300" />
          </span>
          <p className="mt-4">
            <span className="cursor-pointer text-deskit-orange-700">
              Click to Upload CSV
            </span>{" "}
            or drag and drop
          </p>
        </div>

        {file && (
          <div className="mt-8 bg-[#F3F5F9] p-4 rounded-lg">
            <p className="text-sm font-bold">{file.name}</p>
            <div className="flex items-center justify-between text-xs mb-2">
              <p className="">
                {uploading ? `${timeRemaining}s left` : "Upload complete"}
              </p>
              <p>{`${uploadProgress}%`}</p>
            </div>
            <div className="w-full bg-white rounded-full h-2.5 dark:bg-deskit-black-200">
              <div
                className="bg-deskit-orange-700 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="mt-8 mb-4">
          <Button
            className="bg-deskit-orange-700 text-white"
            fullWidth={true}
            onClick={handleImportClick}
            disabled={uploading}
          >
            Import employee
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ImportEmployee;
