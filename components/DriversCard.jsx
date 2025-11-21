import React from "react";
import Drivers from "@/route-vehicle-fare.json";
import DiversSakyanan from "./DiversVehicle";

const DriversCard = () => {
  const drivers = Drivers.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <div className="flex p-4 items-center justify-center gap-6 flex-wrap">
      {drivers.length === 0 ? (
        <p>No drivers available.</p>
      ) : (
        drivers.map((driver, idx) => (
          <DiversSakyanan key={idx} driver={driver} />
        ))
      )}
    </div>
  );
};

export default DriversCard;
