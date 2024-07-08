import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 border-bottom">
      <div className="row  p-5 padding">
        <div className="col-7 text-center mt-5">
          <img
          className="mt-5 p-5"
            src="media\images\signup.png"
            alt=""
            style={{width:"100%"}}
          />
        </div>
        <div className="col-5 mt-5 ">
          <div className="form_container">
            <h2 className="text-muted mt-5  text-center">Signup now</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="mt-2 form-group">
                <label htmlFor="email">Email</label><br />
                <input
                    class="form-control"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email">Username</label><br />
                <input
                class="form-control"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password">Password</label><br />
                <input
                class="form-control"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <button className="mt-4 btn btn-primary" type="submit">Submit</button>
               <br/> <span className="mt-4">
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="row text-center text-muted "  style={{fontSize:"0.8rem"}}>
        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>

        <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
    </div>
    </div>
  );
};

export default Signup;
