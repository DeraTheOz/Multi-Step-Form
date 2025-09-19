import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useState } from "react";
import SubscriptionConfirmation from "../components/SubscriptionConfirmation";
import SummaryDetails from "../components/SummaryDetails";

function SummaryPage() {
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
          <SummaryDetails />
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
    <SubscriptionConfirmation />
  );
}

export default SummaryPage;
