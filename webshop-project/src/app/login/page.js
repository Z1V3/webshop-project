"use client";
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (event) => {
    event.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="h-[100vw] relative z-10">
      <div className="flex flex-col items-center sm:pt-32 md:pt-64">
        <div className="mb-8">
          <h1 className="text-5xl">Login</h1>
        </div>

        <button
          className="w-full sm:w-[300px] md:w-[500px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>

        <div className="border-t border-gray-400 my-4 w-full sm:w-[300px] md:w-[500px]"></div>

        <h3 className="text-lg font-semibold mb-2">Sign in with Credentials</h3>
        <form onSubmit={handleCredentialsLogin} className="flex flex-col items-center gap-4 sm:w-[300px] md:w-[500px]">
          {error && <p className="text-red-500">{error}</p>}
          <div className="w-full">
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="font-sans text-lg mt-1 p-2 border rounded-md w-full"
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
          <div className="flex sm:flex-col sm:gap-4 md:flex-row md:gap-16">
            <ActionButton type="submit" className="md:w-[200px]">Login</ActionButton>
            <a href="./register" className="text-xl font-semibold rounded-full py-4 px-16 bg-gradient-to-r from-sky-300 to-indigo-300 inline-block">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}