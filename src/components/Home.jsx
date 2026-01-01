import React, { useState } from 'react';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSingUp, setSingUp] = useState(false);

 // Backend URL
// const BACKEND_URL = "http://localhost:8080/api/auth";

// Login handler

const handleLogin = (e) => {
  e.preventDefault();


  const user = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value
  };


  fetch(
    
   `${import.meta.env.VITE_API_URL}/login`,

    {
      
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert("Login Successful!");
      setShowLogin(false);
    })
    .catch(error => {
      console.error(error);
      alert(error.message || "Login Failed!");
    });
};

// Signup handler
const handleSignup = (e) => {
  e.preventDefault();

  const user = {
    fullName: document.getElementById("signupName").value,
    email: document.getElementById("signupEmail").value,
    password: document.getElementById("signupPassword").value,
    confirmPassword: document.getElementById("signupConfirmPassword").value

  };

  fetch ( `${import.meta.env.VITE_API_URL}/signup`, {   // ✅ FIXED
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert("Signup Successful!");
      setShowSingUp(false);

      // Clear form
      document.getElementById("signupName").value = "";
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
      document.getElementById("signupConfirmPassword").value = "";
    })
    .catch(error => {
     
      alert(error.message );
    });
};


  return (
    <>
      {/* Navbar */}
      <div className='bg-blue-400 flex flex-col sm:flex-row gap-4 p-4 justify-between items-center'>
        <div className='bg-white text-black px-4 py-2 rounded cursor-pointer font-bold'>BRAND NAME</div>

        <div className='flex gap-4'>
          <div
            onClick={() => { setShowLogin(true); setSingUp(false); }}
            className='bg-white text-black px-4 py-2 rounded cursor-pointer font-bold hover:bg-black hover:text-white'
          >
            Login
          </div>
          <div
            onClick={() => { setSingUp(true); setShowLogin(false); }}
            className='bg-white text-black px-4 py-2 rounded cursor-pointer font-bold hover:bg-black hover:text-white'
          >
            Signup
          </div>
        </div>
      </div>

      {/* Login Form */}
      {showLogin && (
        <div className='min-h-screen flex items-center justify-center p-4'>
          <form onSubmit={handleLogin} className='bg-amber-700 border-2 p-6 rounded-lg shadow-md w-full sm:w-96'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Login Page</h2>

            <div className='mb-4'>
              <label className="block mb-1 font-medium">Email</label>
              <input
                id="loginEmail"
                type="email"
                placeholder='Enter your Email'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <div className='mb-4'>
              <label className="block mb-1 font-medium">Password</label>
              <input
                id="loginPassword"
                type="password"
                placeholder='Enter your password'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <button type='submit' className='w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800'>Submit</button>
          </form>
        </div>
      )}

      {/* Signup Form */}
      {showSingUp && (
        <div className='min-h-screen flex items-center justify-center p-4'>
          <form onSubmit={handleSignup} className='bg-amber-700 border-2 p-6 rounded-lg shadow-md w-full sm:w-96'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Signup Page</h2>

            <div className='mb-4'>
              <label className='block mb-1 font-medium'>Full Name</label>
              <input
                id="signupName"
                type="text"
                placeholder='Enter Full Name here'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-1 font-medium'>Email</label>
              <input
                id="signupEmail"
                type="email"
                placeholder='Enter Full Email here'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-1 font-medium'>Password</label>
              <input
                id="signupPassword"
                type="password"
                placeholder='Enter password'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-1 font-medium'>Confirm Password</label>
              <input
                id="signupConfirmPassword"
                type="password"
                placeholder='Enter Confirm password'
                className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600'
                required
              />
            </div>

            <button type='submit' className='w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800'>Signup</button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <span
                onClick={() => { setShowLogin(true); setSingUp(false); }}
                className="text-blue-600 cursor-pointer underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default Home;
