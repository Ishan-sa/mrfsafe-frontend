"use client";
import Form from "./form";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <div className="flex just items-center h-screen bg-login-background w-full bg-cover relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="flex justify-center items-center max-h-[600px] m-auto w-full h-full max-w-[1170px] relative z-10">
          <div className="w-full h-full bg-white flex flex-col justify-around">
            <div className="flex px-6">
              <Image
                src={"/images/mobilecomm-logo.png"}
                alt="mrfsafe-logo"
                width={100}
                height={100}
                className="min-w-[120px]"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/mRFSafe-logo.svg"}
                alt="mrfsafe-logo"
                width={100}
                height={100}
                className="min-w-[300px]"
              />
            </div>

            <div className="bg-login-background-2 w-full h-full flex justify-center items-center bg-cover">
              <div className="flex gap-6 text-[12px] items-center justify-center">
                <Link
                  href="https://www.mcpsinc.com/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
                <p>Copyright © MobileComm Professionals Inc 2023</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2393b9] w-full h-full p-6">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-container mb-10">
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
      </div>
    </>
  );
}
