import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const url = "http://localhost:5000/api/auth/updatepass";

const Forgetpass = () => {

  const Navigate = useNavigate();

  const [ipData, setIpData] = useState({
    email: "",
    password: "",
  });

  const ipChange = (evt) => {
    const { name, value } = evt.target;

    setIpData({
      ...ipData,
      [name]: value,
    });
  };

  
  const [show, pass]  = useState("password");

  const handle = () =>{
    pass(show === "password" ? "text" : "password")
  }

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(ipData)
      });
      
      const res_data = await response.json()
      if (response.ok) {
        toast.success("changed password");
        setIpData({
          email: "",
          password: "",
        });
        Navigate("/signin")
      }else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("cnage pass", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="form-left">
            <div className="left-content">
              <h3>welcome</h3>
              <p>create new password !</p>
              <button className="btn form-left-btn">❤️</button>
            </div>

            <div className="custom-shape-divider-top-1740659633">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
          <div className="form-right">
            <div className="page-header">
              <h2> change password </h2>
            </div>
            <form>
              <div className="form-right-elem">
                <div className="form-elem">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={ipChange}
                    value={ipData.email}
                    id="email"
                    required
                    placeholder="raj@gmail.com"
                  />
                </div>

                <div className="form-elem">
                  <label htmlFor="password">password</label>
                  <div className="ip_pass">
                    <input
                      type={show}
                      name="password"
                      onChange={ipChange}
                      value={ipData.password}
                      id="password"
                      required
                      placeholder="password"
                    />
                    {show === "password" ? (
                      <i className="fa-solid fa-eye" onClick={handle}></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash" onClick={handle}></i>
                    )}
                  </div>
                </div>

                <div className="form-elem">
                  <button
                    type="submit"
                    className="btn main-btn"
                    onClick={formSubmit}
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpass;
