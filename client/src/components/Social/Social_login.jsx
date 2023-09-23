import facebook_icon from "../../assets/Icons/Social_Login/facebook.png";
import google_icon from "../../assets/Icons/Social_Login/social.png";
import apple_icon from "../../assets/Icons/Social_Login/apple-logo.png";
import yahoo_icon from "../../assets/Icons/Social_Login/yahoo.png";

const Social_login = () => {
  return (
    <div className="[&_img]:w-6 flex gap-5 my-10">
      <button className="btn btn-wide bg-[#FF6666] hover:bg-[#e25555] border-none text-white">
        <img src={google_icon} alt="" className="icon_white" /> Login With
        Google
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
  );
};

export default Social_login;
