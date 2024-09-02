import React from "react";

const TableHeader = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left min-w-[150px] dark:bg-deskit-black-100 dark:text-white"
    >
      {children}
    </th>
  );
};

export default TableHeader;
