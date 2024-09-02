import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import Spinner from "../../components/common/Spinner/Index";
import DeskitLogo from "../../assets/DeskIt.svg";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import Button from "../../components/common/Button/Button";
import { closeAllModals } from "../../common/Modals/modal.slice";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    navigate("/login");
  };

  return (
    <div>
      <div className="w-full h-screen flex items-start">
        <div className="w-full flex items-center justify-center py-4 px-4 md:px-0  bg-deskit-blue-300 h-screen md:flex md:items-center md:justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[40%] bg-[#010D2A]"
          >
            <div className="m-8">
              <div>
                <div className="flex items-start justify-between">
                  <p className="text-2xl font-medium text-white">
                    Set New Password
                  </p>
                  <img src={DeskitLogo} alt="deskit" />
                </div>
                <p className="text-deskit-gray-400 my-4">
                  Your new password must be different from the previous password
                </p>
              </div>

              {/* Password */}
              <div className="mb-2 w-full text-deskit-gray-400">
                <label className=" text-sm">Password</label>
                <div className="w-full relative">
                  <input
                    className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400  bg-deskit-blue-300"
                    placeholder="Enter your new password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "A password is required",
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
                      <GrFormViewHide className="text-[26px] " />
                    ) : (
                      <GrFormView className="text-[26px] " />
                    )}
                  </button>
                </div>
                <p className="text-red-500 text-xs">
                  {errors.password?.message}
                </p>
              </div>
              {/* Confirm Password */}
              <div className="mb-2 w-full text-deskit-gray-400">
                <label className=" text-sm">Confirm Password</label>
                <div className="w-full relative">
                  <input
                    className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400  bg-deskit-blue-300"
                    placeholder="Confirm your new password"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirm_password", {
                      required: "A password is required",
                      minLength: {
                        value: 8,
                        message: "The minimum characters is 8",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute h-full flex items-center justify-center top-0 right-4 text-deskit-gray-400 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <GrFormViewHide className="text-[26px] " />
                    ) : (
                      <GrFormView className="text-[26px] " />
                    )}
                  </button>
                </div>
                <p className="text-red-500 text-xs">
                  {errors.password?.message}
                </p>
              </div>

              <div className="w-full text-center mb-6">
                <Button
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  size="lg"
                  fullWidth={true}
                  type="submit"
                  onClick={() => {
                    dispatch(closeAllModals());
                    navigate("/login");
                  }}
                >
                  {" "}
                  {isLoading ? <Spinner /> : "Login"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
