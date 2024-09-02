import React, { useState } from "react";

import TableHeader from "./TableHeader";
import CustomCheckbox from "../CustomCheckbox";
import TablePagination from "./TablePagination";

const Table = ({
  tableHeaders,
  children,
  checkbox,
  dotOption,
  pagination,
  rowsPerPage,
  currentPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-solid divide-gray-200 text-deskit-blue-300">
        <thead className="bg-[#F3F5F9]">
          <tr className="rounded-lg  dark:bg-deskit-black-100 dark:text-white">
            {checkbox && (
              <th scope="col" className="px-6 py-3 text-left">
                <CustomCheckbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  name="customCheckbox"
                  size="sm"
                  className={
                    "accent-deskit-blue-600 checked:bg-deskit-blue-600  dark:checked:bg-deskit-black-400 dark:accent-deskit-black-400"
                  }
                />
              </th>
            )}
            {tableHeaders?.map((heading, i) => (
              <TableHeader key={i}>{heading}</TableHeader>
            ))}
            {dotOption && (
              <th scope="col" className="px-6 py-3 text-left ">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
      </table>
      {pagination && (
        <TablePagination
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </div>
  );
};

export default Table;
