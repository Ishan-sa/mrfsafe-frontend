"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Notice the correct import is 'next/router', not 'next/navigation'

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    // The `signOut` method can take options, one of which is a redirect callback
    await signOut({ redirect: false });
    router.push("/auth/signin");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="p-2 bg-blue-500" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
