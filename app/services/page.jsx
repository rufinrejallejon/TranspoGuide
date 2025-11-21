import React from "react";
import dataServices from "@/services.json";
export const metadata = {
  title: "Services",
};

const ServicesPage = () => {
  const services = dataServices;
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center  mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F5CB5C] rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
