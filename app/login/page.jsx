import React from "react";
import { FaGoogle, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const loginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#333533]">
      <div className="bg-[#E8EDDF] p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#F5CB5C] mb-6 text-center">
          Login
        </h1>
        <form className="space-y-5">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <h3 className="">
              Don't have an account?
              <Link
                href={"/register"}
                className="ml-2 text-blue-500 hover:underline"
              >
                Sign up
              </Link>
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-gray-400">Login with</h1>
            <ul className="flex gap-6 justify-between items-center mt-2">
              <li>
                <Link href={"/"}>
                  <FaGoogle className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaFacebook className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaTiktok className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F5CB5C] text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
