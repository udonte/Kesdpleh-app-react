import React from "react";
import Button from "../../../components/common/Button/Button";
import { HiTrash } from "react-icons/hi2";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../common/Modals/modal.selectors";
import { openModalByName } from "../../../common/Modals/modal.slice";
import AddLocation from "../../../components/settings/locations/AddLocation";
import DeleteLocation from "../../../components/settings/locations/DeleteLocation";
import EditLocation from "../../../components/settings/locations/EditLocation";

const Location = () => {
  const dispatch = useDispatch();
  const modals = useSelector(selectModalsSlice);
  const addLocationModal = modals.ADD_location;
  const deleteLocationModal = modals.DELETE_location;
  const editLocationModal = modals.EDIT_location;

  const openAddLocation = () => {
    dispatch(openModalByName("ADD_location"));
  };

  const openDeleteLocation = () => {
    dispatch(openModalByName("DELETE_location"));
  };

  const openEditLocation = () => {
    dispatch(openModalByName("EDIT_location"));
  };

  return (
    <div className="text-deskit-blue-600 font-bold text-sm  dark:bg-deskit-black-400 ">
      {/* HEADER */}
      <div className="py-6 border-b-[1px] border-b-gray-200 dark:text-white dark:border-deskit-black-100">
        <div className="px-8 font-bold text-xl">Branches</div>
      </div>

      {/* CONTENT */}
      <div className="lg:px-16 px-6 py-6">
        {/* alert */}
        <div className="">
          <p className="bg-orange-50 dark:bg-deskit-black-150 text-orange-500 px-8 py-2 rounded-md font-normal text-center flex flex-col lg:flex-row items-center justify-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 p-2 bg-orange-100 text-orange-500 text-sm ">
              !
            </span>
            You have a total of 7 Location already in the system, with 13 more
            slots of new Location to be added
          </p>
        </div>
        {/* add new location */}
        <div className="w-full flex justify-center lg:justify-end my-8">
          <Button
            onClick={openAddLocation}
            className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
          >
            Add Location
          </Button>
        </div>
        {/* locations */}
        <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* location 1 */}
          <div className="flex flex-col-reverse gap-2 md:flex-row items-center justify-between py-8 px-6 bg-white dark:bg-deskit-black-100 dark:text-white shadow-xl shadow-slate-100 dark:shadow-deskit-black-500 rounded-lg text-lg">
            <p>Location 1</p>
            <div className="flex gap-2 dark:text-deskit-black-100">
              <div
                className="bg-deskit-gray-200 rounded-full p-2 cursor-pointer"
                onClick={openDeleteLocation}
              >
                <HiTrash />
              </div>
              <div
                className="bg-deskit-gray-200 rounded-full p-2 cursor-pointer"
                onClick={openEditLocation}
              >
                <BiSolidEditAlt />
              </div>
            </div>
          </div>
          {/* location 2 */}
          <div className="flex flex-col-reverse gap-2 md:flex-row items-center justify-between py-8 px-6 bg-white dark:bg-deskit-black-100 dark:text-white shadow-xl shadow-slate-100 dark:shadow-deskit-black-500 rounded-lg text-lg">
            <p>Location 2</p>
            <div className="flex gap-2 dark:text-deskit-black-100">
              <div
                className="bg-deskit-gray-200 rounded-full p-2 cursor-pointer"
                onClick={openDeleteLocation}
              >
                <HiTrash />
              </div>
              <div
                className="bg-deskit-gray-200 rounded-full p-2 cursor-pointer"
                onClick={openEditLocation}
              >
                <BiSolidEditAlt />
              </div>
            </div>
          </div>
        </div>
        {addLocationModal && <AddLocation isOpen={addLocationModal} />}
        {deleteLocationModal && <DeleteLocation isOpen={deleteLocationModal} />}
        {editLocationModal && <EditLocation isOpen={editLocationModal} />}
      </div>
    </div>
  );
};

export default Location;
