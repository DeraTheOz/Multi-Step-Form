import { useNavigate } from "react-router";
import Button from "../components/Button";
import Form from "../components/Form";

function InfoPage() {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/plan");
  }

  return (
    <>
      <div className="bg-white shadow-primary rounded-[0.63rem] -mt-16 flex flex-col justify-center px-4 py-10 row-start-2 col-start-1 col-end-4 mx-2 lg:shadow-none lg:rounded-none lg:row-start-1 lg:col-start-2 lg:m-0 lg:p-0 lg:pt-10 lg:mx-16">
        <h3 className="text-2xl md:text-[2rem] font-bold mb-4">
          Personal Info
        </h3>
        <p className="text-light-gray leading-6">
          Please provide your name, email address, and phone number.
        </p>

        {/* Form */}
        <Form />
      </div>

      <div className="lg:col-start-2 lg:mt-16 lg:mx-16 lg:p-0 lg:mb-4 flex flex-row-reverse items-center col-start-1 col-end-4 row-start-3 px-2 py-6 mt-32 bg-white">
        <Button type="next" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </>
  );
}

export default InfoPage;
