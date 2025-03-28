"use client";
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      setRegistrationError("Passwords do not match.");
      return;
    }

    // TODO: Implement registration logic here, e.g.,
    // try {
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password, phoneNumber }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Handle successful registration (e.g., redirect to login, display success message)
    //     console.log("Registration successful", data);
    //     // Router.push('/login'); // If using Next.js Router
    //   } else {
    //     // Handle registration error from the backend
    //     console.error("Registration failed", data);
    //     setRegistrationError(data.message || "Registration failed. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error during registration:", error);
    //   setRegistrationError("An unexpected error occurred. Please try again later.");
    // }
  };

  return (
    <div className="relative z-10 flex justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-700/80 hover:shadow-2xl duration-500 rounded-lg">
        <div className="mt-48 mx-32">
          <div className="flex justify-center mb-8">
            <h1 className="text-6xl text-white shadow-2xl bg-gray-700/20">Register</h1>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col items-center gap-4 sm:w-[300px] md:w-[500px]">
            <div className="w-full group">
              <label htmlFor="email" className="block text-md font-medium text-gray-700 group-hover:text-white duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 font-sans border rounded-md w-full"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full group">
              <label htmlFor="password" className="block text-md font-medium text-gray-700 group-hover:text-white duration-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 font-sans border rounded-md w-full"
                placeholder="****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full group">
              <label htmlFor="confirmedPassword" className="block text-md font-medium text-gray-700 group-hover:text-white duration-300">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmedPassword"
                className="mt-1 p-2 font-sans border rounded-md w-full"
                placeholder="****************"
                value={confirmedPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full group">
              <label htmlFor="phoneNumber" className="block text-md font-medium text-gray-700 group-hover:text-white duration-300">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 p-2 font-sans border rounded-md w-full"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {registrationError && <p className="text-red-500">{registrationError}</p>}
            <ActionButton type="submit" className="w-full mt-16">Register</ActionButton>
          </form>

          <div className="flex flex-col font-mono items-center mt-48 gap-2 text-lg  underline text-gray-300/80 mb-8">
            <a href="/login" className="hover:scale-95">Already have account?</a>
            <a href="/" className="hover:scale-95">Problems with registration?</a>
          </div>
        </div>
      </div>
    </div>
  );
}


