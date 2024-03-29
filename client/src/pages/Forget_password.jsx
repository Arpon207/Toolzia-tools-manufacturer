import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Social_login from "../components/Authentication/Social_login";
import { auth } from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Authentication_Modal from "../components/Authentication/Authentication_Modal";

const Sign_in = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const success = await sendPasswordResetEmail(data.email);
    if (success) {
      document.getElementById("my_modal_5").showModal();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-fit lg:h-screen">
        <div className="bg-[url('/src/assets/signin.jpg')] bg-cover bg-no-repeat bg-center text-base-200 ">
          <div className="w-[90%] lg:w-3/4 mx-auto mb-10 lg:mb-0 mt-32">
            <h3 className="text-xl lg:text-2xl mb-5">Toozia</h3>
            <h3 className="text-2xl lg:text-3xl">
              <strong>Don't worry,</strong> We are here help you to recover your
              password.
            </h3>
          </div>
        </div>

        <div className="bg-neutral-900 text-base-200 flex justify-center items-center">
          <div className="w-[90%] lg:w-1/2 py-10 lg:py-0">
            <p className="text-sm lg:text-base">
              Return to ?
              <button
                onClick={() => navigate("/signin")}
                className="btn btn-link text-[#FF6666] no-underline"
              >
                Login
              </button>
            </p>
            <h2 className="text-2xl lg:text-3xl font-medium mb-5">
              Forget Your Password?
            </h2>

            <p className="mb-5 text-sm lg:text-md">
              Enter the email address or mobile number associated with your
              account.
            </p>
            {/* -----------------form-------------- */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-5 "
            >
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /[a-z0-9]+@gmail.com/,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors?.email && (
                  <p className="text-error text-sm mt-3">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="btn lg:btn-wide bg-[#FF6666] hover:bg-[#e25555] border-none text-white"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="grid grid-cols-[20%_10%_70%] items-center my-8">
              <div className="h-[1.5px] bg-gray-800"></div>
              <p className="text-center text-sm text-gray-500">OR</p>
              <div className="h-[1.5px] bg-gray-800"></div>
            </div>
            <Social_login />
          </div>
        </div>
      </div>
      <Authentication_Modal
        item={{
          title: "Email Sent Successfully",
          desc: "An Email has been sent to the provided email address. Check the inbox of the email address, and click the reset link provided.",
          route: "/signin",
        }}
      />
    </div>
  );
};

export default Sign_in;
