"use client";
import React from "react";
import Drivers from "@/route-vehicle-fare.json";
import DiversSakyanan from "./DiversVehicle";
import { useEffect, useState } from "react";

const DriversCard = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const shuffled = [...Drivers]
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    setDrivers(shuffled);
  }, []);

  return (
    <div className="flex p-4 items-center justify-center gap-6 flex-wrap">
      {drivers.length === 0 ? (
        <p>No drivers available.</p>
      ) : (
        drivers.map((driver, idx) => (
          <DiversSakyanan key={idx} className="w-64" driver={driver} />
        ))
      )}
    </div>
  );
};

export default DriversCard;
