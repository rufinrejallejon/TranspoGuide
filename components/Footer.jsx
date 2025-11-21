import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242423] text-[#E8EDDF] p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} TranspoGuide. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
