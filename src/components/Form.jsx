function Form() {
  return (
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
  );
}

export default Form;
