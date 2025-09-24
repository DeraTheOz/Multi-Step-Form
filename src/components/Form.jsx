import { useDispatch, useSelector } from "react-redux";
import { handleFormUpdate } from "../features/user-info/userInfoSlice";

function Form() {
  const dispatch = useDispatch();
  const { fullName, emailAddress, phoneNumber, errors } = useSelector(
    (store) => store.userInfo
  );

  function handleChange(e) {
    const { id, value } = e.target;
    dispatch(handleFormUpdate({ inputField: id, value })); // Update form state in the store
  }

  return (
    <form className="flex flex-col mt-6 lg:w-[28rem]">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="md:text-sm flex justify-between mb-2 text-xs"
          >
            <span>Name</span>
            {errors.fullName && (
              <span className="text-strawberry-red font-bold">
                {errors.fullName}
              </span>
            )}
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleChange}
            placeholder="Vanessa Mint"
            className={`${
              errors.fullName && "border-strawberry-red"
            } border-light-gray text-[0.9375rem] md:text-base  placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none w-full h-12 px-4 font-medium bg-white border rounded-[0.25rem] md:rounded-lg cursor-pointer`}
          />
        </div>

        <div>
          <label
            htmlFor="emailAddress"
            className="md:text-sm flex justify-between mb-2 text-xs"
          >
            <span>Email Address</span>
            {errors.emailAddress && (
              <span className="text-strawberry-red font-bold">
                {errors.emailAddress}
              </span>
            )}
          </label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={handleChange}
            placeholder="vanessamint@gmail.com"
            className={`${
              errors.emailAddress && "border-strawberry-red"
            } border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none h-12 rounded-[0.25rem] md:rounded-lg w-full px-4 font-medium bg-white border cursor-pointer`}
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="md:text-sm flex justify-between mb-2 text-xs"
          >
            <span>Phone Number</span>
            {errors.phoneNumber && (
              <span className="text-strawberry-red font-bold">
                {errors.phoneNumber}
              </span>
            )}
          </label>
          <input
            type="tel"
            id="phoneNumber"
            inputMode="numeric"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="e.g +1 234 567 890"
            className={`${
              errors.phoneNumber && "border-strawberry-red"
            } border-light-gray text-[0.9375rem] md:text-base placeholder-shown:text-marine-blue focus:border-purplish-blue focus:outline-none h-12 rounded-[0.25rem] md:rounded-lg w-full px-4 font-medium bg-white border cursor-pointer`}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
