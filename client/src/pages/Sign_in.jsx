import signin from "../assets/signin.jpg";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io";
import { BsFacebook, BsApple } from "react-icons/bs";
import facebook_icon from "../assets/Icons/Social_Login/facebook.png";
import google_icon from "../assets/Icons/Social_Login/social.png";
import apple_icon from "../assets/Icons/Social_Login/apple-logo.png";
import yahoo_icon from "../assets/Icons/Social_Login/yahoo.png";

const Sign_in = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              <button className="btn btn-link text-[#FF6666] no-underline">
                Register
              </button>
            </p>
            <h2 className="text-3xl font-medium mb-5">Login to your account</h2>
            <div className="[&_img]:w-6 flex gap-5 my-10">
              <button className="btn btn-wide bg-[#FF6666] hover:bg-[#e25555] border-none text-white">
                <img src={google_icon} alt="" className="icon_white" /> Login
                With Google
              </button>
              <button className="btn btn-square btn-neutral">
                <img src={facebook_icon} alt="" className="icon_white" />
              </button>
              <button className="btn btn-square btn-neutral">
                <img src={yahoo_icon} alt="" className="icon_white" />
              </button>
              <button className="btn btn-square btn-neutral">
                <img src={apple_icon} alt="" className="icon_white" />
              </button>
            </div>
            <div className="grid grid-cols-[20%_10%_70%] items-center mb-8">
              <div className="h-[1.5px] bg-gray-800"></div>
              <p className="text-center text-sm text-gray-500">OR</p>
              <div className="h-[1.5px] bg-gray-800"></div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-5 "
            >
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  id="username"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("username", { required: true, maxLength: 20 })}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>{" "}
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  id="password"
                  className="input input-bordered w-full bg-gray-800 mt-2"
                  {...register("username", { required: true, maxLength: 20 })}
                />
              </div>
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
