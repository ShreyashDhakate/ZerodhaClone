import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
      <h2  className="text-muted text-center mt-5">Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
          <input
          class="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary mt-4" type="submit">Submit</button>
        <br />
        <span>
          Create New Account <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
        </div>
      </div>
    </div>
    <div className="row text-center  text-muted "  style={{fontSize:"0.7rem"}}>
        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>

        <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
    </div>
  </div>
    
  );
};

export default Login;
