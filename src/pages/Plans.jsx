import { useNavigate } from "react-router";
import Button from "../components/Button";
import Pricing from "../components/Pricing";

function Plan() {
  const navigate = useNavigate();
  function handlePrev() {
    navigate("/");
  }

  function handleNext() {
    navigate("/add-ons");
  }

  return (
    <>
      <div className="lg:shadow-none lg:rounded-none lg:col-start-2 lg:col-span-2 lg:mx-16 lg:m-0 lg:p-0 lg:mt-10 col-span-full py-10 px-4 md:px-8 mx-2 sm:mx-4 -mt-16 bg-white shadow-primary rounded-none sm:rounded-[0.63rem]">
        <h3 className="text-marine-blue text-2xl md:text-[2rem] font-bold mb-4">
          Select your plan
        </h3>
        <p className="text-light-gray leading-6">
          You have the option of monthly or yearly billing
        </p>

        <Pricing />
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

export default Plan;
