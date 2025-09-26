import { NavLink } from "react-router";

const navLinks = ["Your info", "Select plan", "Add-ons", "Summary"];
const path = ["/", "/plan", "/add-ons", "/summary"];

function AppNav() {
  return (
    <nav>
      <ul className="h-[10.75rem] pr-[0.03rem] pb-[0.08rem] pt-9 flex justify-center text-sm font-bold text-white uppercase lg:h-auto lg:p-0 lg:mt-9 lg:ml-9 lg:flex lg:flex-col lg:gap-6 lg:mr-12">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={path[index]}
              className="flex items-center pointer-events-none"
            >
              <span
                className="w-7 h-7 flex items-center justify-center mr-3 border border-white rounded-full"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <div className="lg:flex lg:flex-col lg:justify-between hidden">
                <p className="text-light-blue text-xs font-normal">
                  Step {index + 1}
                </p>
                <p className=" tracking-[0.0625rem]">{link}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AppNav;
