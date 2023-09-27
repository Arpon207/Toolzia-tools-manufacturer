import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Social_login from "../components/Social/Social_login";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config,";
import { useEffect, useRef, useState } from "react";

const Sign_in = () => {
  const [
    signInwithEmailAndPassword,
    userWithEmailAndPassword,
    loading,
    loginError,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInwithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (loginError?.code === "auth/invalid-login-credentials") {
      setFirebaseError("Incorrect Email or Password");
    }
    if (userWithEmailAndPassword) {
      navigate("/");
    }
  }, [loginError, userWithEmailAndPassword]);

  const handleClickinside = (e) => {
    setFirebaseError("");
  };

  return (
    <div>
      <div className="grid grid-cols-[35%_65%] h-screen">
        <div className="bg-[url('/src/assets/signin.jpg')] bg-cover bg-no-repeat bg-center text-base-200 ">
          <div className="w-3/4 mx-auto mt-32">
            <h3 className="text-2xl mb-5">Toozia</h3>
            <h3 className=" text-3xl">
              <strong>Welcome,</strong> We are glad to see you again!
            </h3>
          </div>
        </div>

        <div className="bg-neutral-900 text-base-200 flex justify-center items-center">
          <div className=" w-1/2  ">
            <p>
              Not a member?
              <button
                onClick={() => navigate("/signup")}
                className="btn btn-link text-[#FF6666] no-underline"
              >
                Register
              </button>
            </p>
            <h2 className="text-3xl font-medium mb-5">Login to your account</h2>
            <Social_login />
            <div className="grid grid-cols-[20%_10%_70%] items-center mb-8">
              <div className="h-[1.5px] bg-gray-800"></div>
              <p className="text-center text-sm text-gray-500">OR</p>
              <div className="h-[1.5px] bg-gray-800"></div>
            </div>
            {/* -----------------form-------------- */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-5 "
            >
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
                />
                {errors?.password && (
                  <p className="text-error text-sm mt-3">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {firebaseError && (
                <p className="text-error text-sm mt-3">{firebaseError}</p>
              )}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="btn btn-wide bg-[#FF6666] hover:bg-[#e25555] border-none text-white"
                >
                  Login
                </button>
                <button className="btn btn-link no-underline text-error">
                  Forget Password ?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
