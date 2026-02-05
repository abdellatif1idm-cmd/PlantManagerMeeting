import React from "react";
import EventPlansListFr from "@/data/fr/11-EventPlans.json";
import PlanCard from "./PlanCard";

const PlansGrid = () => {
  return (
    <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-4 *:rounded-md mt-2 p-4 ">
      {EventPlansListFr.map((plan, index) => (
        <PlanCard
          key={index}
          label={plan.Label}
          description={plan.description}
          href={plan.href}
          image={plan.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default PlansGrid;
