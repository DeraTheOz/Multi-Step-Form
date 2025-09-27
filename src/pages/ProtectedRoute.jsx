import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { fullName, emailAddress, phoneNumber } = useSelector(
    (state) => state.userInfo
  );

  useEffect(
    function () {
      if (!fullName || !emailAddress || !phoneNumber) navigate("/");
    },
    [fullName, emailAddress, phoneNumber, navigate]
  );

  return children;
}

export default ProtectedRoute;
