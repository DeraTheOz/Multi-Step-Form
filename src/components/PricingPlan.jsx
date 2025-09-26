import { useDispatch, useSelector } from "react-redux";

import { billingType, selectedPlan } from "../features/plans/planSlice";

const plans = [
  {
    type: "Arcade",
    icon: "/images/icon-arcade.svg",
    billing: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    type: "Advanced",
    icon: "/images/icon-advanced.svg",
    billing: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    type: "Pro",
    icon: "/images/icon-pro.svg",
    billing: {
      monthly: 15,
      yearly: 150,
    },
  },
];

function PricingPlan() {
  const dispatch = useDispatch();
  const { billing, planSelected } = useSelector((state) => state.plan);

  function togglePlan(plan) {
    dispatch(selectedPlan(plan));
  }

  function toggleBilling() {
    const selectedBilling = billing === "monthly" ? "yearly" : "monthly";
    dispatch(billingType(selectedBilling));
  }

  return (
    <ul className="lg:gap-x-4 gap-y-7 lg:grid-cols-3 grid grid-cols-1 mt-6 lg:w-[28rem]">
      {plans.map((plan, index) => {
        const isSelected = planSelected === plan;

        return (
          <li
            key={index}
            className={`${
              isSelected && "active-plan"
            } text-[0.9375rem] md:text-base border-light-gray hover:border-purplish-blue md:h-20 lg:h-[10.4rem] w-full lg:w-[8.5rem] lg:pl-2.5 lg:py-3 p-2.5 border rounded-lg cursor-pointer flex lg:flex-col transition-all`}
            aria-label="Select Plan"
            onClick={() => togglePlan(plan)}
          >
            <img
              src={plan.icon}
              alt={`${plan.type} Icon`}
              aria-label={`${plan.type} Icon`}
              className="w-10 h-10"
            />
            <div className=" lg:mt-auto lg:ml-0 flex flex-col justify-between ml-4">
              <h3 className="font-medium">{plan.type}</h3>
              <p className="text-light-gray text-sm">
                ${plan.billing[billing]}/{billing === "monthly" ? "mo" : "yr"}
              </p>
              {billing === "yearly" && <p className="text-xs">2 months free</p>}
            </div>
          </li>
        );
      })}

      <div className="lg:bg-alabaster text-light-gray lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:rounded-lg flex items-center justify-center h-12 gap-6">
        <span
          className={`cursor-pointer ${
            billing === "monthly" &&
            "text-marine-blue font-medium transition-colors"
          }`}
          onClick={toggleBilling}
        >
          Monthly
        </span>
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            aria-label="Toggle pricing plan"
            onClick={toggleBilling}
          />

          <div
            className={`w-[2.5rem] h-6 bg-marine-blue peer-focus:outline-none rounded-full ${
              billing === "monthly"
                ? "after:translate-x-0"
                : "after:translate-x-full"
            } after:content-[''] after:absolute after:-translate-y-1/2 after:top-1/2 after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all after:ease-in`}
          ></div>
        </label>
        <span
          className={`cursor-pointer ${
            billing === "yearly" &&
            "text-marine-blue font-medium transition-colors"
          }`}
          onClick={toggleBilling}
        >
          Yearly
        </span>
      </div>
    </ul>
  );
}

export default PricingPlan;
