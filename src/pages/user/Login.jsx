import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle login/signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
      // 🔗 Later: send login request to backend
  
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signup Data:", formData);
      // 🔗 Later: send signup request to backend
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#009999]">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#009999] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#009999] font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
