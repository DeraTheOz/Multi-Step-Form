import { NavLink } from "react-router";

function AppNav() {
  return (
    <nav className="font-bold text-white uppercase">
      <ul className="flex flex-col gap-4 px-8 text-sm">
        <li>
          <NavLink to="/" className="flex items-center">
            <span
              className="flex items-center justify-center w-8 h-8 mr-4 border border-white rounded-full"
              aria-hidden="true"
            >
              1
            </span>

            <div className="flex flex-col justify-between">
              <p className="text-light-blue text-xs font-normal">Step 1</p>
              <p className="tracking-[0.0625rem]">Your info</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/plan" className="flex items-center">
            <span
              className="flex items-center justify-center w-8 h-8 mr-4 border border-white rounded-full"
              aria-hidden="true"
            >
              2
            </span>

            <div className="flex flex-col justify-between">
              <p className="text-light-blue text-xs font-normal">Step 2</p>
              <p className="tracking-[0.0625rem]">Select plan</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-ons" className="flex items-center">
            <span
              className="flex items-center justify-center w-8 h-8 mr-4 border border-white rounded-full"
              aria-hidden="true"
            >
              3
            </span>

            <div className="flex flex-col justify-between">
              <p className="text-light-blue text-xs font-normal">Step 3</p>
              <p className="tracking-[0.0625rem]">Add-ons</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/summary" className="flex items-center">
            <span
              className="flex items-center justify-center w-8 h-8 mr-4 border border-white rounded-full"
              aria-hidden="true"
            >
              4
            </span>

            <div className="flex flex-col justify-between">
              <p className="text-light-blue text-xs font-normal">Step 4</p>
              <p className="tracking-[0.0625rem]">Summary</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
