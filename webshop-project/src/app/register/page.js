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
    <div className="h-[100vw] relative z-10">
      <div className="flex flex-col items-center sm:pt-32 md:pt-64">
        <div className="mb-8">
          <h1 className="text-5xl">Register</h1>
        </div>
        <form onSubmit={handleRegister} className="flex flex-col items-center gap-4 sm:w-[300px] md:w-[500px]">
          <div className="w-full">
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-md font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="confirmedPassword" className="block text-md font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmedPassword"
              className="mt-1 p-2 border rounded-md w-full"
              value={confirmedPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="phoneNumber" className="block text-md font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="mt-1 p-2 border rounded-md w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {registrationError && <p className="text-red-500">{registrationError}</p>}
            <ActionButton type="submit" className="md:w-[200px]">Register</ActionButton>
        </form>
      </div>
    </div>
  );
}