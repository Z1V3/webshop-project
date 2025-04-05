"use client";
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

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
    <div className="relative z-10 flex justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-700/80 hover:shadow-2xl duration-500 rounded-lg">
        <div className="mt-48 mx-32">
          <div className="flex justify-center mb-8">
            <h1 className="text-6xl text-white shadow-2xl bg-gray-700/20">Login</h1>
          </div>

          <div className="group bg-white rounded-md">
            <button
              className="w-full sm:w-[300px] md:w-[500px] flex items-center justify-center gap-2 border border-gray-300 bg-white group-hover:bg-gray-700/40 group-hover:text-white group-hover:-translate-y-3 group-hover:translate-x-2 duration-200 text-gray-700 font-medium py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-gray-300 mb-4"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>
          </div>

          <div className="border-t border-gray-400 my-4 w-full sm:w-[300px] md:w-[500px]"></div>

          <h3 className="flex justify-center text-xl text-gray-100/70 mb-2">Sign in with Credentials</h3>
          <form onSubmit={handleCredentialsLogin} className="flex flex-col items-center gap-4 sm:w-[300px] md:w-[500px]">
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full group">
              <label htmlFor="email" className="block text-lg font-medium group-hover:text-white duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="font-sans text-lg mt-1 p-2 border rounded-md w-full"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full group">
              <label htmlFor="password" className="block text-lg font-medium group-hover:text-white duration-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 font-sans p-2 border rounded-md w-full"
                placeholder="****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex sm:flex-col sm:gap-4 md:flex-row md:gap-16 mt-16">
              <ActionButton type="submit">Login</ActionButton>
              <a href="/register" className="text-xl font-semibold rounded-full py-4 px-16 bg-gradient-to-r from-sky-300 to-indigo-300 inline-block">Register</a>
            </div>
          </form>

          <div className="flex flex-col font-mono items-center mt-48 gap-2 text-lg  underline text-gray-300/80 mb-8">
            <a href="/" className="hover:scale-95">Forgot password?</a>
            <a href="/register" className="hover:scale-95">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}