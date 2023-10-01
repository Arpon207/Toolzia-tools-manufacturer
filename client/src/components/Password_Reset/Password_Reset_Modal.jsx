import { useNavigate } from "react-router-dom";

const Password_Reset_Modal = () => {
  const navigate = useNavigate();
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box shadow bg-neutral text-base-200">
        <div className="modal-action">
          <form method="dialog">
            <h1 className="text-2xl mb-3">Email Sent Successfully</h1>
            <p className="text-sm mb-5">
              An Email has been sent to the provided email address. Check the
              inbox of the email address, and click the reset link provided.
            </p>
            <button
              onClick={() => navigate("/signin")}
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

export default Password_Reset_Modal;
