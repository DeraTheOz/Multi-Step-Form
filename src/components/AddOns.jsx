import { useDispatch, useSelector } from "react-redux";

import { selectedAddOns } from "../features/addOns/addOnSlice";

const addOns = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    billing: {
      monthly: 1,
      yearly: 10,
    },
    selectedBilling: "monthly",
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    billing: {
      monthly: 2,
      yearly: 20,
    },
    selectedBilling: "monthly",
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profiles",
    billing: {
      monthly: 2,
      yearly: 20,
    },
    selectedBilling: "monthly",
  },
];

function AddOns() {
  const dispatch = useDispatch();
  const { billing } = useSelector((state) => state.plan); // get billing state from planSlice
  const { addOnSelected } = useSelector((state) => state.addOns);

  function toggleAddOn(addOn) {
    dispatch(selectedAddOns(addOn));
  }

  return (
    <ul className="flex flex-col mt-6 space-y-4 lg:w-[28rem]">
      {addOns.map((addOn, index) => {
        const isSelected = addOnSelected.some(
          (item) => item.type === addOn.type
        );

        return (
          <li
            key={index}
            className={`${
              isSelected && "active-addOn"
            } border-light-gray hover:border-purplish-blue h-[4.375rem] md:px-5 px-2.5 border rounded-lg cursor-pointer flex items-center transition-colors`}
            aria-label={addOn.type}
            onClick={() => toggleAddOn(addOn)}
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
                onChange={() => toggleAddOn(addOn)}
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
              +${addOn.billing[billing]}/{billing === "monthly" ? "mo" : "yr"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default AddOns;
