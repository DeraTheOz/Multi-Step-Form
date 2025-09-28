import { BrowserRouter, Route, Routes } from "react-router";

import PlanPage from "./pages/PlanPage";
import AddOnsPage from "./pages/AddOnsPage";
import SummaryPage from "./pages/SummaryPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<InfoPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="add-ons" element={<AddOnsPage />} />
          <Route path="summary" element={<SummaryPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
