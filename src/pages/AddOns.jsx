import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

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
  const navigate = useNavigate();
  function handlePrev() {
    navigate("/plan");
  }

  function handleNext() {
    navigate("/summary");
  }

  function toggleAddOn(index) {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(index))
        return prevSelected.filter((i) => i !== index);

      return [...prevSelected, index];
    });
  }

  return (
    <>
      <div className="lg:shadow-none lg:rounded-none lg:col-start-2 lg:col-span-2 lg:mx-16 lg:m-0 lg:p-0 lg:mt-10 col-span-full py-10 px-4 md:px-8 mx-2 sm:mx-4 -mt-16 bg-white shadow-primary rounded-none sm:rounded-[0.63rem]">
        <h3 className="text-2xl md:text-[2rem] font-bold mb-4">Pick add-ons</h3>
        <p className="text-light-gray leading-6">
          Add-ons help enhance your gaming experience.
        </p>

        {/* Add-Ons Container */}
        <ul className="flex flex-col mt-6 space-y-4 lg:w-[28rem]">
          {addOns.map((addOn, index) => {
            const isSelected = selectedAddOns.includes(index);

            return (
              <li
                key={index}
                className={`${
                  isSelected && "active-addOn"
                } border-light-gray hover:border-purplish-blue h-[4.5rem] md:px-5 px-2.5 border rounded-lg cursor-pointer flex items-center transition-colors`}
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
                  <h3 className="lg:text-base text-sm font-medium">
                    {addOn.type}
                  </h3>
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
      </div>

      <div className="lg:mx-16 lg:mb-4 lg:mt-20 lg:p-0 lg:col-start-2 lg:col-end-4 flex items-center justify-between col-start-1 col-end-4 row-start-3 px-4 py-6 mt-32 bg-white">
        <Button type="back" onClick={handlePrev}>
          Go Back
        </Button>
        <Button type="next" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </>
  );
}

export default AddOns;
