import { useNavigate } from "react-router";
import Button from "../components/Button";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";

import { setErrors } from "../features/user-info/userInfoSlice";
import { validateForm } from "../features/user-info/userInfoActions";

function InfoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fullName, emailAddress, phoneNumber } = useSelector(
    (state) => state.userInfo
  );

  function handleNext() {
    const errors = validateForm({ fullName, emailAddress, phoneNumber });
    dispatch(setErrors(errors));
    console.log(errors);

    // Check if there are NO errors
    if (!Object.values(errors).some((error) => error !== null)) {
      navigate("/plan");
    }
  }

  /*
  function validateForm() {
    const name = fullName.trim().replace(/\s+/g, " ");
    const normalizedPhone = phoneNumber.replace(/[\s\-()]/g, "");

    const nameRegex = /^[\p{L}][\p{L}\p{M}' .-]{1,149}$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;

    const newErrors = {
      fullName: !name
        ? "This field is required"
        : !nameRegex.test(name)
        ? "Must be at least 2 letters"
        : null,
      emailAddress: !emailAddress
        ? "This field is required"
        : !emailRegex.test(emailAddress)
        ? "Invalid email address"
        : null,
      phoneNumber: !phoneNumber
        ? "This field is required"
        : !phoneRegex.test(normalizedPhone)
        ? "At least 11 digits"
        : null,
    };
    dispatch(setErrors(newErrors));

    // Return true if NO errors
    return !Object.values(newErrors).some((error) => error !== null);
  }

  function handleNext() {
    if (validateForm()) {
      navigate("/plan");
    }
  }
  */

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
