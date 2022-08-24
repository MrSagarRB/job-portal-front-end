import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const Login = () => {
  let [userInput, setUserInput] = useState();
  let [statusMsg, setStatusMsg] = useState();

  let handelInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  let handelLoginUser = () => {
    let base = "http://localhost:3001/";
    Axios.post(`${base}userLogin`, userInput).then((result) => {
      setStatusMsg(result.data);
      console.log(result);
    });
  };
  return (
    <div className="h-screen">
      <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
        <p>User Login</p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="p-5 border  md:w-[35%] w-[90%]">
          <table className="loginTable ">
            <tr>
              <td>
                <p className="custom-title">Username</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="username"
                  name="userName"
                  onChange={(e) => handelInputChange(e)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <p className="custom-title">Password</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handelInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>{statusMsg}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  className="custom-btn w-full"
                  onClick={() => {
                    handelLoginUser();
                  }}
                >
                  Login
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className=" flex items-center justify-center">
                  <p>
                    Not a member?{" "}
                    <Link to="/create-account">
                      <span className="text-blue-600">Register</span>{" "}
                    </Link>
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
