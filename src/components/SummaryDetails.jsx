import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function SummaryDetails() {
  const navigate = useNavigate();

  // Get state from store
  const { billing, planSelected } = useSelector((state) => state.plan);
  const { addOnSelected } = useSelector((state) => state.addOns);

  if (!billing || planSelected.length === 0) return;

  const planPrice = planSelected.billing[billing];
  const addOnsTotal = addOnSelected.reduce((acc, addOn) => {
    return acc + addOn.billing[billing];
  }, 0);
  const totalAmount = planPrice + addOnsTotal;

  function handlePlanChange() {
    navigate("/plan");
  }

  return (
    <>
      <div className="bg-magnolia text-light-gray flex flex-col px-4 lg:px-6 py-6 mt-6 space-y-4 rounded-lg lg:w-[28rem]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-marine-blue lg:text-base text-sm font-medium">
              {planSelected.type} ({billing[0].toUpperCase() + billing.slice(1)}
              )
            </h3>
            <p
              className="underline-offset-auto decoration-auto decoration-solid hover:text-purplish-blue text-sm underline cursor-pointer"
              onClick={handlePlanChange}
            >
              Change
            </p>
          </div>

          <p className="text-marine-blue font-bold">
            ${planSelected.billing[billing]}/
            {billing === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        {/* Selected Add-ons */}
        {addOnSelected.length !== 0 && (
          <>
            <span className="bg-light-gray w-full h-[0.0625rem] opacity-[0.2043]"></span>

            <ul className="flex flex-col justify-between space-y-2">
              {addOnSelected.map((addOn) => (
                <li
                  key={addOn.type}
                  className="flex items-center justify-between text-sm"
                >
                  {addOn.type}
                  <span className="text-marine-blue">
                    +${addOn.billing[billing]}/
                    {billing === "monthly" ? "mo" : "yr"}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="lg:px-6 flex items-center justify-between h-12 px-4 py-4 mt-5">
        <p className="text-light-gray text-sm">
          Total (per {billing === "monthly" ? "month" : "year"})
        </p>
        <p className="text-purplish-blue lg:text-xl text-base font-bold">
          ${totalAmount}/{billing === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </>
  );
}

export default SummaryDetails;
