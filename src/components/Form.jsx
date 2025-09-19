import { useNavigate } from "react-router";
import Button from "./Button";

function Form() {
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

        <form className="flex flex-col mt-6 lg:w-[28rem]">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="md:text-sm flex justify-between mb-2 text-xs"
              >
                <span>Name</span>
                <span className="text-strawberry-red font-bold">
                  This field is required
                </span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Vanessa Mint"
                className="border-light-gray text-[0.9375rem] md:text-base  placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none w-full h-12 px-4 font-medium bg-white border rounded-[0.25rem] md:rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="md:text-sm flex justify-between mb-2 text-xs"
              >
                <span>Email Address</span>
                <span className="text-strawberry-red font-bold">
                  This field is required
                </span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="vanessamint@gmail.com"
                className="border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none h-12 rounded-[0.25rem] md:rounded-lg w-full px-4 font-medium bg-white border cursor-pointer"
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="md:text-sm flex justify-between mb-2 text-xs"
              >
                <span>Phone Number</span>
                <span className="text-strawberry-red font-bold">
                  This field is required
                </span>
              </label>
              <input
                type="number"
                id="number"
                placeholder="e.g +1 234 567 890"
                className="border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none h-12 rounded-[0.25rem] md:rounded-lg w-full px-4 font-medium bg-white border cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="lg:col-start-2 lg:mt-16 lg:mx-16 lg:p-0 lg:mb-4 flex flex-row-reverse items-center col-start-1 col-end-4 row-start-3 px-2 py-6 mt-32 bg-white">
        <Button type="next" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </>
  );
}

export default Form;
