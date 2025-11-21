import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import routeSakyanan from "@/route-vehicle-fare.json";

const DiversSakyanan = ({ driver }) => {
  return (
    <>
      <div className="flex p-4 items-center justify-center gap-6 flex-wrap">
        <div className="w-64 rounded-xl shadow-lg bg-white overflow-hidden relative font-sans">
          {/* Top colored part */}
          <div className={` h-40 relative overflow-hidden`}>
            {/* Curved separator at bottom of the colored block */}
            <Image
              src={`/images/${driver.vehicle.image}`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              loading="eager"
              className="object-cover [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)]"
            />
            {/* Plus icon top-right */}
            <div className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer shadow">
              <span className="text-blue-600 font-bold text-lg select-none">
                +
              </span>
            </div>
          </div>

          {/* Circular image - overlapping both sections */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
            <FaUserCircle className="w-full h-full text-gray-300" />
          </div>

          {/* Card content */}
          <div className="pt-16 pb-8 px-6 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {driver.driverName}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              <span className="font-medium">Routes: </span>
              {driver.route.from} to {driver.route.to}
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              <span className="font-medium">Fares: </span>₱
              {driver.fare.baseFare.toFixed(2)}
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              <span className="font-medium">Vehicle: </span>
              {driver.vehicle.type}
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              <span className="font-medium">Plate Number: </span>
              {driver.vehicle.plateNumber}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiversSakyanan;
