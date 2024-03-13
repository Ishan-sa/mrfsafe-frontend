"use client";

// import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXTAUTH_URL);
  });

  const router = useRouter();
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/auth/signup")}
          className="p-2 bg-blue-500"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/auth/signin")}
          className="p-2 bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
