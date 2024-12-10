import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const resultingValue = e.target.value;
    setUsername(resultingValue);
  }

  const handlePasswordChange = (e) => {
    const resultingValue = e.target.value;
    setPassword(resultingValue);
  }

  const handleLogin = async () => {
    console.log("loggin in with the values");
    console.log(username+password);
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      username: username,
      password: password
    });
    if(response.status === 200){
      console.log("logged in successfully");
      console.log(response.data);
      localStorage.setItem("jwt", response.data);
      navigate("/user-dashboard");
    } else {
      console.log("bad credentials");
    }
  }

  const handleSignInWithGoogle = async () => {
    window.location.href="http://localhost:8080/oauth2/authorization/google"
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome!</h1>
        <p className="text-gray-600 text-center mt-2">
          Sign in to continue with Axumawit Broker
        </p>

        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            onClick={() => {handleLogin()}}
            type="button"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          onClick={() => handleSignInWithGoogle()}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:shadow-md text-gray-700 font-semibold py-2 px-4 rounded-lg"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Sign in with Google
        </button>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
