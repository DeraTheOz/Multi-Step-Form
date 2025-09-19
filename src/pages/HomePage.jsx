import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <main>
      <section className="lg:bg-white lg:grid-cols-custom lg:justify-center lg:shadow-primary lg:p-3 rounded-2xl grid grid-cols-1">
        <Sidebar />

        <Outlet />
      </section>
    </main>
  );
}

export default HomePage;
