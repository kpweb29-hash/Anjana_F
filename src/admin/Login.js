import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../BASEURL";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Login successful" && data.token) {
          localStorage.setItem("admin-auth", "true");
          localStorage.setItem("admin-token", data.token);
          navigate("/admin");
        } else {
          alert("Login failed: " + (data.message || "Invalid response"));
        }
      } else {
        const errorText = await response.text();
        alert(`Login failed: ${response.status} ${response.statusText}. ${errorText}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(`An error occurred during login: ${error.message}. Please check your network connection or backend configuration.`);
    }
  };

  return (
    <div className="py-10 md:mt-20 flex items-center justify-center bg-brandLight px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-blue">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo/anjana-logo.png" alt="Anjana Logo" className="h-14" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-brand font-bold text-center text-blue mb-6">
          Admin Login
        </h2>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-blue text-sm font-medium">Email</label>
            <div className="flex items-center border border-red rounded-lg px-3 mt-1">
              <i className="fa-solid fa-envelope text-brandGrey"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-2 py-2 outline-none font-body"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-blue text-sm font-medium">Password</label>
            <div className="flex items-center border border-red rounded-lg px-3 mt-1">
              <i className="fa-solid fa-lock text-brandGrey"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-2 py-2 outline-none font-body"
                required
              />
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue hover:bg-red text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

      </div>

    </div>
  );
}
