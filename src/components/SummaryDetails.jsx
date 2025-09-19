function SummaryDetails() {
  return (
    <>
      <div className="bg-magnolia text-light-gray flex flex-col px-4 lg:px-6 py-6 mt-6 space-y-4 rounded-lg lg:w-[28rem]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-marine-blue lg:text-base text-sm font-medium">
              Arcade (Monthly)
            </h3>
            <p className="underline-offset-auto decoration-auto decoration-solid hover:text-purplish-blue text-sm underline cursor-pointer">
              Change
            </p>
          </div>

          <p className="text-marine-blue font-bold">$9/mo</p>
        </div>

        <span className="bg-light-gray w-full h-[0.0625rem] opacity-[0.2043]"></span>

        {/* Selected Add-ons */}
        <ul className="flex flex-col justify-between space-y-2">
          <li className="flex items-center justify-between text-sm">
            Online service <span className="text-marine-blue">+$1/mo</span>
          </li>

          {/* Dummy markup for testing */}
          <li className="flex items-center justify-between text-sm">
            Larger storage <span className="text-marine-blue">+$1/mo</span>
          </li>
        </ul>
      </div>

      <div className="lg:px-6 flex items-center justify-between h-12 px-4 py-4 mt-5">
        <p className="text-light-gray text-sm">Total (per month)</p>
        <p className="text-purplish-blue lg:text-xl text-base font-bold">
          +$12/mo
        </p>
      </div>
    </>
  );
}

export default SummaryDetails;
