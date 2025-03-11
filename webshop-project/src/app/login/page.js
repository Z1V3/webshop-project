"use client";
import { ActionButton } from "@/components/ActionButton";
import { LinkButton } from "@/components/LinkButton";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //TODO Implement login
  };

  return (
    <div className="container">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 border rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 border rounded-md w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <ActionButton onClick={handleLogin}>Login</ActionButton>
      <LinkButton href="./register">Register</LinkButton>
    </div>
  );
}