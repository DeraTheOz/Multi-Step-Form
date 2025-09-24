import { useNavigate } from "react-router";
import Button from "../components/Button";
import AddOns from "../components/AddOns";
import { useSelector } from "react-redux";

function AddOnsPage() {
  const navigate = useNavigate();
  const { addOnSelected } = useSelector((state) => state.addOns);

  function handlePrev() {
    navigate("/plan");
  }

  function handleNext() {
    if (addOnSelected.length === 0) return;
    navigate("/summary");
  }

  return (
    <>
      <div className="bg-white shadow-primary rounded-[0.63rem] -mt-16 flex flex-col justify-center px-4 py-10 row-start-2 col-start-1 col-end-4 mx-2 lg:shadow-none lg:rounded-none lg:row-start-1 lg:col-start-2 lg:m-0 lg:p-0 lg:pt-10 lg:mx-16">
        <h3 className="text-2xl md:text-[2rem] font-bold mb-4">Pick add-ons</h3>
        <p className="text-light-gray leading-6">
          Add-ons help enhance your gaming experience.
        </p>

        {/* Add-Ons */}
        <AddOns />
      </div>

      <div className="lg:col-start-2 lg:mt-20 lg:mx-16 lg:p-0 lg:mb-4 flex items-center justify-between col-start-1 col-end-4 row-start-3 px-2 py-6 mt-32 bg-white">
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

export default AddOnsPage;
