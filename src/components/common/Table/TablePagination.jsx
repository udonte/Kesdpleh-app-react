import React, { useState } from "react";
import { TbChevronDown, TbChevronLeft, TbChevronRight } from "react-icons/tb";

const TablePagination = ({
  rowsPerPage,
  currentPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleRowClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="py-[50px]">
      <div className="flex items-center justify-between mt-8">
        {/* left side */}
        <div className="flex items-center gap-4 relative">
          <p className="font-bold dark:text-deskit-black-50">Show rows:</p>
          <div
            className="flex items-center gap-2 border-2 border-gray-300 py-2 px-4 rounded-xl cursor-pointer"
            onClick={handleRowClick}
          >
            <p className="font-medium">{rowsPerPage} items</p>
            <TbChevronDown size={20} />
          </div>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setShowDropDown(!showDropDown);
              }}
              className="absolute z-50 top-[40px] text-deskit-blue-300 min-w-[100px] right-[30px] bg-white shadow-lg text-base"
            >
              {[10, 20, 30, 40, 50].map((num) => (
                <div
                  key={num}
                  onClick={() => onRowsPerPageChange(num)}
                  className="w-full min-w-max hover:bg-gray-100 flex items-center shrink-0 cursor-pointer border py-2 px-4"
                >
                  {num} items
                </div>
              ))}
            </div>
          )}
        </div>

        {/* right side */}
        <div>
          <div className="flex items-center justify-between gap-8">
            <p
              className="flex items-center gap-2 border-2 border-gray-300  py-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100 dark:bg-deskit-black-100 dark:border-none  dark:hover:bg-deskit-black-150"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <TbChevronLeft size={20} />
            </p>
            <div className="flex items-center gap-2">
              {[...Array(totalPages).keys()].map((num) => (
                <p
                  key={num}
                  className={`flex items-center gap-2 border-2 border-gray-300 py-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100  dark:bg-deskit-black-100 dark:border-none dark:hover:bg-deskit-black-150 ${
                    num + 1 === currentPage
                      ? "bg-gray-100 dark:bg-deskit-black-150"
                      : ""
                  }`}
                  onClick={() => onPageChange(num + 1)}
                >
                  {num + 1}
                </p>
              ))}
            </div>
            <p
              className="flex items-center gap-2 border-2 border-gray-300 py-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100  dark:bg-deskit-black-100 dark:border-none dark:hover:bg-deskit-black-150"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <TbChevronRight size={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
