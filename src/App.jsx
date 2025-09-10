import { BrowserRouter, Route, Routes } from "react-router";

import Plan from "./pages/Plans";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import HomePage from "./pages/HomePage";
import Info from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Info />}></Route>
          <Route path="plan" element={<Plan />}></Route>
          <Route path="add-ons" element={<AddOns />}></Route>
          <Route path="summary" element={<Summary />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
