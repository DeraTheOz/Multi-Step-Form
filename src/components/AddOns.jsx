import { useState } from "react";

const addOns = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    pricing: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profiles",
    pricing: {
      monthly: 2,
      yearly: 20,
    },
  },
];

function AddOns() {
  // TESTING PURPOSES
  const [pricingType] = useState("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  function toggleAddOn(index) {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(index))
        return prevSelected.filter((i) => i !== index);

      return [...prevSelected, index];
    });
  }

  return (
    <ul className="flex flex-col mt-6 space-y-4 lg:w-[28rem]">
      {addOns.map((addOn, index) => {
        const isSelected = selectedAddOns.includes(index);

        return (
          <li
            key={index}
            className={`${
              isSelected && "active-addOn"
            } border-light-gray hover:border-purplish-blue h-[4.375rem] md:px-5 px-2.5 border rounded-lg cursor-pointer flex items-center transition-colors`}
            aria-label={addOn.type}
            onClick={() => toggleAddOn(index)}
          >
            <label
              htmlFor={`check-box-${index}`}
              className="relative flex items-center justify-center cursor-pointer"
            >
              <input
                type="checkbox"
                id={`check-box-${index}`}
                className="checkbox peer w-5 h-5 outline-none appearance-none"
                aria-label={addOn.type}
                checked={isSelected}
                onChange={() => toggleAddOn(index)}
              />
              <div className="border-light-gray peer-checked:border-purplish-blue peer-checked:bg-purplish-blue absolute flex items-center justify-center w-5 h-5 transition-colors duration-200 ease-in border rounded-sm cursor-pointer">
                <img
                  src="/images/icon-checkmark.svg"
                  alt="Checkmark"
                  className="check-icon transition-opacity duration-150 opacity-0"
                  aria-label="Checkmark"
                />
              </div>
            </label>

            <div className="gap-y-0.5 flex flex-col justify-between md:ml-5 ml-2.5">
              <h3 className="lg:text-base text-sm font-medium">{addOn.type}</h3>
              <p className="text-light-gray text-xs">{addOn.description}</p>
            </div>

            <p className="text-purplish-blue ml-auto text-xs">
              +${addOn.pricing[pricingType]}/
              {pricingType === "monthly" ? "mo" : "yr"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default AddOns;
