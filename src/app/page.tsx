"use client";

// import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/auth/signup")}>Sign Up</button>
    </>
  );
}
