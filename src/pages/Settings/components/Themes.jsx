// Themes.js
import React from "react";
import CustomRadioButton from "../../../components/common/CustomRadioButton/CustomRadioButton";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../../Theme/theme.slice";
import { selectTheme } from "../../../Theme/theme.selector";

const Themes = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);

  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.value));
    if (event.target.value === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className=" dark:bg-deskit-black-400 dark:text-white">
      <div className="py-6 border-b-[1px] border-b-gray-200">
        <div className="px-8 font-bold text-xl">Themes</div>
      </div>
      <div className="lg:px-16 px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <CustomRadioButton
            id="lightTheme"
            name="theme"
            value="light"
            checked={selectedTheme === "light"}
            onChange={handleThemeChange}
            label="Light"
            size="sm"
            className="transition-all"
          />
          <CustomRadioButton
            id="darkTheme"
            name="theme"
            value="dark"
            checked={selectedTheme === "dark"}
            onChange={handleThemeChange}
            label="Dark"
            size="sm"
            className="transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Themes;
