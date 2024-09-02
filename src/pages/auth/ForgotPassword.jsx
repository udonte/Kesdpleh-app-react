import React, { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import Spinner from "../../components/common/Spinner/Index";
import { closeAllModals } from "../../common/Modals/modal.slice";
import { useDispatch } from "react-redux";

const ForgotPassword = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {};

  return (
    <div>
      <Modal position="center" isOpen={isOpen} onClose={onClose}>
        <div className="w-full flex items-start justify-center py-8 px-16 bg-deskit-blue-300 md:flex md:items-center md:justify-center rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-medium text-white">
                  Forgot Password?
                </p>
                <p className="text-deskit-gray-400 my-4">
                  We will send you an email containing a link to reset your
                  password
                </p>
              </div>
            </div>
            <div className="mb-2 w-full text-deskit-gray-400">
              <label className=" text-sm">Email</label>

              <input
                className="h-[50px] outline-none w-full focus:border-red-700 rounded-lg my-2 py-2 px-4 placeholder:text-sm placeholder:text-deskit-gray-400 bg-[#010D2A]"
                placeholder="Enter your email address"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4"></div>
            <div className="w-full text-center">
              <Button
                size="lg"
                className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                fullWidth={true}
                type="submit"
                onClick={() => navigate("/reset-password")}
              >
                {" "}
                {isLoading ? <Spinner /> : "Submit"}
              </Button>
              <p
                className="text-deskit-orange-600 text-xs font-bold mt-4 cursor-pointer"
                onClick={() => dispatch(closeAllModals())}
              >
                Go back to login
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
