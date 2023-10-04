import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Social_login from "../components/Authentication/Social_login";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import Authentication_Modal from "../components/Authentication/Authentication_Modal";

const Sign_in = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, createdUer, loading, creatingError] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [firebaseError, setFirebaseError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.username });
  };

  useEffect(() => {
    if (creatingError?.code === "auth/email-already-in-use") {
      setFirebaseError("This email is already used for another account.");
    }
    if (createdUer) {
      document.getElementById("my_modal_5").showModal();
    }
  }, [creatingError, createdUer]);

  const handleClickinside = (e) => {
    setFirebaseError("");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-fit lg:h-screen">
        <div className="bg-[url('/src/assets/signin.jpg')] bg-cover bg-no-repeat bg-center text-base-200 ">
          <div className="w-[90%] lg:w-3/4 mx-auto mb-10 lg:mb-0 mt-32">
            <h3 className="text-xl lg:text-2xl mb-5">Toozia</h3>
            <h3 className=" text-2xl lg:text-3xl">
              <strong>Welcome,</strong> Looks like you're new here!
            </h3>
          </div>
        </div>

        <div className="bg-neutral-900 text-base-200 flex justify-center items-center">
          <div className=" w-[90%] lg:w-1/2 py-10 lg:py-0">
            <p className="text-sm lg:text-base">
              Already a member?
              <button
                onClick={() => navigate("/signin")}
                className="btn btn-link text-[#FF6666] no-underline"
              >
                Login
              </button>
            </p>
            <h2 className="text-2xl lg:text-3xl font-medium lg:mb-5">
              Create your account
            </h2>
            <Social_login />
            <div className="grid grid-cols-[20%_10%_70%] items-center mb-8">
              <div className="h-[1.5px] bg-gray-800"></div>
              <p className="text-center text-sm text-gray-500">OR</p>
              <div className="h-[1.5px] bg-gray-800"></div>
            </div>
            {/* ------------ form --------------- */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-5 "
            >
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  onClick={handleClickinside}
                  type="text"
                  placeholder="Enter Your Username"
                  id="username"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("username", {
                    required: "User name is required",
                    minLength: {
                      value: 5,
                      message: "Username is too short.",
                    },
                    maxLength: {
                      value: 10,
                      message: "Username is too long.",
                    },
                  })}
                  autoComplete="off"
                />
                {errors?.username && (
                  <p className="text-error text-sm mt-3">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onClick={handleClickinside}
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
                  autoComplete="off"
                />
                {errors?.email && (
                  <p className="text-error text-sm mt-3">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>{" "}
                <input
                  onClick={handleClickinside}
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Password should contain minimum 8 characters, atleast one character and one number.",
                    },
                  })}
                  autoComplete="off"
                />
                {errors?.password && (
                  <p className="text-error text-sm mt-3">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="confirm_password">Confirm Password</label>{" "}
                <input
                  onClick={handleClickinside}
                  type="password"
                  placeholder="Enter Your Password Again "
                  id="confirm_password"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Password should contain minimum 8 characters, atleast one character and one number.",
                    },
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "Passwords mismatched.";
                      }
                    },
                  })}
                  autoComplete="off"
                />
                {errors?.confirmPassword && (
                  <p className="text-error text-sm mt-3">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              {firebaseError && (
                <p className="text-error text-sm mt-3">{firebaseError}</p>
              )}
              <button
                type="submit"
                className="btn lg:btn-wide w-fit bg-[#FF6666] hover:bg-[#e25555] border-none text-white"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
      <Authentication_Modal
        item={{
          title: "Varify Your Email",
          desc: "An Email has been sent to the provided email address. Check the inbox of the email address, click the Email Varify Link provided to varify your email.",
          route: "/signin",
        }}
      />
    </div>
  );
};

export default Sign_in;
