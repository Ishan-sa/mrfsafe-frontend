"use client";
import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-md m-auto"
      >
        <input
          name="email"
          type="email"
          placeholder="email"
          className="text-black"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="text-black"
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
