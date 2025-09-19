import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useState } from "react";

function Summary() {
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  function handlePrev() {
    navigate("/add-ons");
  }

  function handleConfirm() {
    setIsComplete((complete) => !complete);
  }

  return !isComplete ? (
    <>
      <div className="bg-white shadow-primary rounded-[0.63rem] -mt-16 flex flex-col justify-center px-4 pt-10 pb-5 row-start-2 col-start-1 col-end-4 mx-2 lg:shadow-none lg:rounded-none lg:row-start-1 lg:col-start-2 lg:m-0 lg:p-0 lg:pt-10 lg:mx-16">
        <>
          <h3 className="text-2xl md:text-[2rem] font-bold mb-4">
            Finishing up
          </h3>
          <p className="text-light-gray leading-6">
            Double check everything looks OK before confirming
          </p>

          {/* Summary Details */}
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
      </div>

      <div className="lg:col-start-2 lg:mt-20 lg:mx-16 lg:p-0 lg:mb-4 flex items-center justify-between col-start-1 col-end-4 row-start-3 px-2 py-6 mt-32 bg-white">
        <Button type="back" onClick={handlePrev}>
          Go Back
        </Button>
        <Button type="confirm" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </>
  ) : (
    <div className="bg-white shadow-primary rounded-[0.63rem] -mt-16 flex flex-col justify-center items-center px-4 pt-10 pb-5 row-start-2 col-start-1 col-end-4 mx-2 lg:shadow-none lg:rounded-none lg:row-start-1 lg:col-start-2 lg:m-0 lg:p-0 lg:mx-16 md:h-[32.5rem] h-[25rem] mb-20">
      <div className="max-w-[28rem] flex flex-col items-center justify-center space-y-6 text-center">
        <img src="/images/icon-thank-you.svg" alt="Icon thank you" />
        <h3 className="md:text-[2rem] text-2xl font-bold">Thank you!</h3>
        <p className="text-light-gray leading-[1.56rem] text-pretty">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Summary;
