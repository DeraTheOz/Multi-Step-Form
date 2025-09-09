import { BrowserRouter, Route, Routes } from "react-router";

import UserPlan from "./pages/UserPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import HomePage from "./pages/HomePage";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<UserInfo />}></Route>
          <Route path="plan" element={<UserPlan />}></Route>
          <Route path="add-ons" element={<AddOns />}></Route>
          <Route path="summary" element={<Summary />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
