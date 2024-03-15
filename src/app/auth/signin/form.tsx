import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Reset error state
    setError("");

    // Attempt to sign in
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      // Handle errors, such as displaying a message to the user
      setError("Invalid email or password. Please try again.");
    } else {
      // Handle success, such as redirecting to a private page
      router.push("/dashboard");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
            value={email}
            className="px-[0.5rem] py-[0.6rem] text-sm"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            value={password}
            className="px-[0.5rem] py-[0.6rem] text-sm"
            required
          />
        </div>
        {error && <p className="text-red-200 text-md italic">{error}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <button
          type="submit"
          className="bg-[#999999] px-4 py-2 text-white font-bold rounded-lg"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
