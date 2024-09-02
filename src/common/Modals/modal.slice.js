import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FORGOT_password: false,
  MANAGER_profilecard: false,
  NOTIFICATION_card: false,
  // OVERVIEW
  TEAM_member: false,
  DEPARTMENT: false,
  // SETTINGS > LOCATION
  ADD_location: false,
  DELETE_location: false,
  EDIT_location: false,
  // SETTINGS > DEPARTMENT/CATEGORY
  ADD_department: false,
  DELETE_department: false,
  EDIT_department: false,
  // EMPLOYEES >
  IMPORT_employee: false,
  CREATE_employee: false,
  VIEW_details: false,
  DEACTIVATE_employee: false,
  PERMISSONS: false,
  CHANGE_position: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    closeAllModals: () => {
      return { ...initialState };
    },
    openModalByName: (state, action) => {
      return { ...initialState, [action.payload]: true };
    },
  },
});

export const { closeAllModals, openModalByName } = modalsSlice.actions;
export default modalsSlice.reducer;
