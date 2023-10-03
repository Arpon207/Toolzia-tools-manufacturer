import { useNavigate } from "react-router-dom";

const Authentication_Modal = ({ item }) => {
  const navigate = useNavigate();
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box shadow bg-neutral text-base-200">
        <div className="modal-action">
          <form method="dialog">
            <h1 className="text-2xl mb-3">{item.title}</h1>
            <p className="text-sm mb-5">{item.desc}</p>
            <button
              onClick={() => navigate(item.route)}
              className="btn ml-[80%]"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Authentication_Modal;
