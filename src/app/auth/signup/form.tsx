"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      console.log("Signup successful:", data);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md m-auto"
    >
      <input
        name="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        className="text-black"
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        className="text-black"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
