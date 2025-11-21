import React from "react";

export const metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#333533] flex items-center justify-center py-10">
      <div className="max-w-lg w-full bg-[#E8EDDF] rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-[#F5CB5C] mb-6 text-center">
          Contact Us
        </h1>
        <form className="space-y-5">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F5CB5C] text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
