"use client";
import Form from "./form";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-login-background bg-cover bg-no-repeat relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-md"></div>

      <div className="flex justify-center items-center h-full w-full max-w-[1170px] relative z-10 flex-col py-16 px-8 md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between bg-white">
          <div className="flex justify-center md:justify-start px-6">
            <Image
              src="/images/logos/mobilecomm-logo.png"
              alt="MobileComm Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logos/mRFSafe-logo.svg"
              alt="mRFSafe Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="bg-login-background-2 w-full h-full flex justify-center items-center bg-cover bg-no-repeat">
            <div className="flex justify-center items-center text-sm text-center gap-6 px-6 mb-4 md:mb-0">
              <Link
                href="https://www.mcpsinc.com/privacy-policy"
                target="_blank"
              >
                Privacy Policy
              </Link>
              <p className="text-black text-sm">
                Copyright © MobileComm Professionals Inc 2023
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full bg-[#2393b9] p-6 flex flex-col justify-center items-center">
          <div className="mb-10">
            <h1 className="text-white text-2xl font-bold">
              Welcome to mRFSafe
            </h1>
            <p className="text-[#b6b7b7]">
              Sign in by entering information below
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
