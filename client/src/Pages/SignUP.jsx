import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Apic } from "../store/GetApi";

const URL = "http://localhost:5000/api/auth/register";

const SignUP = () => {

  const Navigate = useNavigate();
  const {storeTokenInLocalStorage} = useContext(Apic)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState()

  const ipChange = (evt) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL,{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formData)
      });
  
      const res_data = await response.json();
      if(response.ok) {
        setErrorMessage("registration successful");
        storeTokenInLocalStorage(res_data.jwt)
        setFormData({
          username: "",
          email : "",
          phone : "",
          password : ""
        });
        setTimeout(()=>{
          Navigate("/signin")
        },1000);
      }else {
        setErrorMessage(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log("register",error);
    }
  };

  // password to text toggle

  const [show, pass] = useState("password");

  const handle = () => {
    pass(show === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="form-left">
            <div className="left-content">
              <h3>welcome</h3>
              <p>already have account? sign in here</p>
              <NavLink to="/signin">
                <button className="btn form-left-btn">sign in</button>
              </NavLink>
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
              <h2> Sign up </h2>
            </div>
            <form>
              <div className="form-right-elem">
                <div className="form-elem">
                  <label htmlFor="username">user name</label>
                  <input
                    type="text"
                    name="username"
                    onChange={ipChange}
                    value={formData.username}
                    id="username"
                    required
                    placeholder="RK THAKUR"
                  />
                </div>
                <div className="form-elem">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={ipChange}
                    value={formData.email}
                    id="email"
                    required
                    placeholder="raj@gmail.com"
                  />
                </div>
                <div className="form-elem">
                  <label htmlFor="phone">phone number</label>
                  <input
                    type="number"
                    name="phone"
                    onChange={ipChange}
                    value={formData.phone}
                    id="phone"
                    required
                    placeholder="8607258739"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </div>
                <div className="form-elem">
                  <label htmlFor="password">password</label>
                  <div className="ip_pass">
                    <input
                      type={show}
                      name="password"
                      onChange={ipChange}
                      value={formData.password}
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
                <p className="error_message">{errorMessage}</p>
                  <button
                    type="submit"
                    className="btn main-btn"
                    onClick={submitForm}
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

export default SignUP;