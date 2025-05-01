import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error container">
      <div className="error_status">
        <h6>404</h6>
      </div>
      <div className="error_content">
        <p className="error_para">Let&apos;s get you back on track!</p>
        <button
          className="btn main-btn"
          onClick={() => navigate("/")}
        >
         return to home
        </button>
      </div>
    </div>
  );
};

export default Error;
