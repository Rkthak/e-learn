import { useContext } from "react";
import { useState } from "react";
import { Apic } from "../store/GetApi";
// import { toast } from "react-toastify";


const Url = "http://localhost:5000/api/auth/contact";

const Contact = () => {
  const [ipVal, setIpVal] = useState({
    username : "",
    email: "",
    message: "",
  });

  const [user_data, set_user_data] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const {user} = useContext(Apic);

  if (user && user_data) {
    setIpVal({
      username : user.username,
      email: user.email,
      message: "",
    })

    set_user_data(false);
  }

  const handleIP = (evt) => {
    const {name, value} = evt.target;

    setIpVal({
      ...ipVal,
      [name] : value
    })
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(Url, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(ipVal)
      })
      
      const res_data = await response.json()
      if (response.ok) {
        
        setIpVal({
          username : "",
          email: "",
          message: "",
        });
        setErrorMessage("message sent")
      }else {
        setErrorMessage(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("contact error", error);
    }
    
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="form-left">
            <div className="left-content">
              <h3>get in touch</h3>
              <p>
                we are always there to help you. feel <br /> free to contact us.
              </p>
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
              <h2> contact us </h2> 
            </div>
            <form>
              <div className="form-right-elem">
              <div className="form-elem">
                  <label htmlFor="username">username</label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    required
                    placeholder="raj"
                    onChange={handleIP}
                    value={ipVal.username}
                  />
                  
                </div>
                <div className="form-elem">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="raj@gmail.com"
                    onChange={handleIP}
                    value={ipVal.email}
                  />
                </div>

                <div className="form-elem">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="65"
                    rows="5"
                    onChange={handleIP}
                    value={ipVal.message}
                    required
                  ></textarea>
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

export default Contact;
