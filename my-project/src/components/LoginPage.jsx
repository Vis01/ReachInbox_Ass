import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google logo.png.png"

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/onebox");
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${window.location.origin}`;
  };

  return (
    <div className="w-screen h-screen bg-black bg-fixed">
      <div className="h-16 w-full flex justify-center items-center">
        <h1 className="text-white font-bold text-xl">REACHINBOX</h1>
      </div>
      <div className="flex justify-center items-center  ">
        <div className="w-96 h-80 px-10  flex flex-col justify-around items-center rounded-lg bg-gray-800 shadow-lg">
          <h1 className="text-white font-bold text-lg mb-4">Create a new account</h1>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 rounded-md text-white border-gray-400 border-2    focus:outline-none focus:ring-2  focus:ring-opacity-50 shadow flex justify-center"
          >
            <img src={google} className="h-5 pr-2 items-center pt-1 "/>
            Sign Up with Google
          </button>
          <div>
            <button
              className="w-full py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow"
              onClick={() => navigate("/register")}
            >
              Create an Account
            </button>
            <p className="text-gray-300 mt-4">Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate("/login")}>Sign In</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
