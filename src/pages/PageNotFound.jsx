import { useNavigate } from "react-router";
import Button from "../components/Button";

function PageNotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <div className="bg-white shadow-primary rounded-[0.63rem] p-4 w-[90%] max-w-80 h-[15rem] text-center flex flex-col justify-between items-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl font-medium">Page Not Found</h1>
      <p>
        The requested page could not be found, click on the button below to go
        to the homepage
      </p>
      <Button type="next" onClick={handleBack}>
        &larr; Go Back
      </Button>
    </div>
  );
}

export default PageNotFound;
