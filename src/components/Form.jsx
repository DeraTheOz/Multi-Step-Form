import { useNavigate } from "react-router";
import Button from "./Button";

function Form() {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/plan");
  }

  return (
    <>
      <div className="lg:shadow-none lg:rounded-none lg:col-start-2 lg:col-span-2 lg:mx-16 lg:m-0 lg:p-0 lg:mt-10 col-span-full py-10 px-4 md:px-8 mx-2 sm:mx-4 -mt-16 bg-white shadow-primary rounded-none sm:rounded-[0.63rem]">
        <h3 className=" text-2xl md:text-[2rem] font-bold mb-4">
          Personal Info
        </h3>
        <p className="text-light-gray leading-6">
          Please provide your name, email address, and phone number.
        </p>

        <form className="flex flex-col mt-6">
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
                className="border-light-gray text-[0.9375rem] md:text-base  placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none w-full h-10 md:h-12 px-4 font-medium bg-white border rounded-[0.25rem] md:rounded-lg cursor-pointer"
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
                placeholder="vanessamint@gmai.com"
                className="border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none md:h-12 rounded-[0.25rem] md:rounded-lg w-full h-10 px-4 font-medium bg-white border cursor-pointer"
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
                type="tel"
                id="number"
                placeholder="e.g +1 234 567 890"
                className="border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none md:h-12 rounded-[0.25rem] md:rounded-lg w-full h-10 px-4 font-medium bg-white border cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="lg:mx-16 lg:mb-4 lg:mt-16 lg:p-0 sm:px-4 lg:col-start-2 lg:col-end-4 col-start-1 col-end-4 row-start-3 py-6 mt-32 text-right bg-white">
        <Button type="next" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </>
  );
}

export default Form;
