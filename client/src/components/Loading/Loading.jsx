import "./loading.css";
import sawblade from "../../assets/Icons/chainsaw.png";

const Loading = ({ isLoading }) => {
  return (
    <div className="loader">
      <img
        src={sawblade}
        alt=""
        width={50}
        className={`${isLoading && "spinner"}`}
      />
    </div>
  );
};

export default Loading;
