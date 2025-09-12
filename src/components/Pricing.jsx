import { useState } from "react";

const plans = [
  {
    type: "Arcade",
    icon: "/images/icon-arcade.svg",
    pricing: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    type: "Advanced",
    icon: "/images/icon-advanced.svg",
    pricing: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    type: "Pro",
    icon: "/images/icon-pro.svg",
    pricing: {
      monthly: 15,
      yearly: 150,
    },
  },
];

function Pricing() {
  // TESTING PURPOSES
  const [pricingType] = useState("monthly");
  const [isActive] = useState(true);

  return (
    <div className="gap-x-4 gap-y-7 grid mt-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`${
            isActive ? "active-plan" : ""
          } text-[0.9375rem] md:text-base border-light-gray hover:border-purplish-blue lg:h-[10.4rem] w-full lg:w-[8.5rem] lg:pl-2.5 lg:py-3 p-2.5 border rounded-lg cursor-pointer flex lg:flex-col`}
          aria-label="Select Plan"
        >
          <img
            src={plan.icon}
            alt={`${plan.type} Icon`}
            aria-label={`${plan.type} Icon`}
            className="w-10 h-10"
          />
          <div className=" lg:mt-auto lg:ml-0 flex flex-col justify-between ml-4">
            <h3 className="text-marine-blue font-medium">{plan.type}</h3>
            <p className="text-light-gray text-sm">
              ${plan.pricing[pricingType]}/
              {pricingType === "monthly" ? "mo" : "yr"}
            </p>
            {pricingType === "yearly" && (
              <p className="text-xs">2 months free</p>
            )}
          </div>
        </div>
      ))}

      <div className="lg:bg-alabaster text-light-gray lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:rounded-lg lg:h-12 flex items-center justify-center gap-6">
        <span
          className={`${
            pricingType === "monthly" ? "text-marine-blue font-medium" : ""
          }`}
        >
          Monthly
        </span>
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            aria-label="Toggle pricing plan"
          />
          <div className="w-[2.375rem] h-5 bg-marine-blue peer-focus:outline-none rounded-full peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2.5px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all after:ease-in"></div>
        </label>
        <span
          className={`${
            pricingType === "yearly" ? "text-marine-blue font-medium" : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default Pricing;
