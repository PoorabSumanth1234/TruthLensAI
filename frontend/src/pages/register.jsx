import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // REGISTER FUNCTION

  const handleRegister = (e) => {

    e.preventDefault();

    if (!email || !password) {

      alert("Please fill all fields");

      return;
    }

    // STORE USER DATA

    const userData = {

      email,

      password
    };

    localStorage.setItem(
      "truthlens_user",
      JSON.stringify(userData)
    );

    alert("Registration successful");

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-3xl p-10 shadow-2xl">

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">

          Register

        </h1>

        {/* FORM */}

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          {/* EMAIL */}

          <div>

            <label className="block mb-2 text-gray-400">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter email"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-red-500"
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="block mb-2 text-gray-400">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-red-500"
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >

            Register

          </button>

        </form>

        {/* LOGIN REDIRECT */}

        <p className="text-center text-gray-400 mt-6">

          Already have an account?

          <span
            onClick={() => navigate("/login")}
            className="text-red-400 cursor-pointer ml-2"
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Register;