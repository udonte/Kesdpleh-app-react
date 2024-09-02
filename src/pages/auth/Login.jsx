import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import Spinner from "../../components/common/Spinner/Index";
import LoginBack from "../../assets/loginBack.png";
import DeskitLogo from "../../assets/DeskIt.svg";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import ForgotPassword from "./ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../common/Modals/modal.slice";
import { selectModalsSlice } from "../../common/Modals/modal.selectors";
import {
  selectUserRole,
  selectUserSlice,
} from "../../features/user/user.selectors";
import { setUserRole } from "../../features/user/user.slice";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userRole = useSelector(selectUserRole);
  console.log(userRole);

  const modals = useSelector(selectModalsSlice);
  const isModalOpen = modals.FORGOT_password;

  const openModal = () => {
    dispatch(openModalByName("FORGOT_password"));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      let role = data.role;
      dispatch(setUserRole(role));
      localStorage.setItem("userRole", role);
      navigate(`/dashboard/overview?role=${role}`);
      // The rest of your login logic
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex items-start">
        <div className="hidden md:flex md:w-1/2 bg-red-900 h-screen">
          <img
            src={LoginBack}
            alt="Shop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-center py-4 px-4 md:px-0 bg-deskit-blue-300 h-screen md:flex md:items-center md:justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[80%]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-2xl font-medium text-white">Welcome</p>
                <p className="text-deskit-gray-400">
                  Sign in to access your tickets
                </p>
              </div>
              <img src={DeskitLogo} alt="deskit" />
            </div>
            <div className="mb-2 w-full text-deskit-gray-400">
              <label className="text-sm">Email</label>
              <input
                className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400 bg-[#010D2A]"
                placeholder="Enter your email address"
                type="email"
                {...register("email", {
                  // required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            </div>
            <div className="mb-2 w-full text-deskit-gray-400">
              <label className="text-sm">Password</label>
              <div className="w-full relative">
                <input
                  className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400 bg-[#010D2A]"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    // required: "A password is required",
                    minLength: {
                      value: 8,
                      message: "The minimum characters is 8",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute h-full flex items-center justify-center top-0 right-4 text-deskit-gray-400 focus:outline-none"
                >
                  {showPassword ? (
                    <GrFormViewHide className="text-[26px]" />
                  ) : (
                    <GrFormView className="text-[26px]" />
                  )}
                </button>
              </div>
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            </div>
            <div className="mb-2 w-full text-deskit-gray-400">
              <label className="text-sm">Role</label>
              <select
                className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400 bg-[#010D2A]"
                {...register("role", {
                  required: "Role is required",
                })}
              >
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
              <p className="text-red-500 text-xs">{errors.role?.message}</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <input
                  className="border-[1px] focus:border-red-700 rounded-lg shadow-sm my-2 py-1 px-2"
                  type="checkbox"
                  {...register("remember_me")}
                />
                <p className="text-xs text-gray-600">Remember me</p>
              </div>
              <p
                className="text-deskit-orange-600 text-xs font-bold cursor-pointer"
                onClick={openModal}
              >
                Forgotten Password?
              </p>
            </div>
            <div className="w-full text-center mb-6">
              <Button
                size="md"
                fullWidth={true}
                className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                type="submit"
              >
                {isLoading ? <Spinner /> : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      {<ForgotPassword isOpen={isModalOpen} />}
    </div>
  );
};

export default Login;
