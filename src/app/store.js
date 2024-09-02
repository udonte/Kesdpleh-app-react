import { configureStore } from "@reduxjs/toolkit";

import modalsSlice from "../common/Modals/modal.slice";
import themeSlice from "../Theme/theme.slice";
import userSlice from "../features/user/user.slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    modals: modalsSlice,
    theme: themeSlice,
  },
});

export default store;
