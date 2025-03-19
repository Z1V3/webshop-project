"use client";
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // TODO: Implement login logic here, e.g.,
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Handle successful login (e.g., redirect, store token)
    //     console.log("Login successful", data);
    //   } else {
    //     // Handle login error (e.g., display error message)
    //     console.error("Login failed", data);
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   // Handle network or other errors
    // }
  };

  return (
    <div className="h-[100vw] relative z-10">
      <div className="flex flex-col items-center sm:pt-32 md:pt-64">
        <div className="mb-8">
          <h1 className="text-5xl">Login</h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 sm:w-[300px] md:w-[500px]">
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
              required // Add basic HTML validation
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
              required // Add basic HTML validation
            />
          </div>
          <div className="flex sm:flex-col sm:gap-4 md:flex-row md:gap-16">
            <ActionButton type="submit" className="md:w-[200px]">Login</ActionButton>
            <a href="./register" className="text-xl font-semibold rounded-full py-4 px-16 bg-gradient-to-r from-sky-300 to-indigo-300 inline-block">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}