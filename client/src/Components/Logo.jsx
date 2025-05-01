import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className="logo-link">
        <div className="logo">
          <span className="red">raj</span>
          <span className="green">Thakur🎈</span>
        </div>
      </NavLink>
    </>
  );
};

export default Logo;
