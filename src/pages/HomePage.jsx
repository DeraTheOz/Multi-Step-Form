import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <main>
      <section className="max-w-[58.75rem] justify-center lg:shadow-primary rounded-2xl grid grid-cols-custom lg:p-3 lg:bg-white">
        <Sidebar />

        <Outlet />
      </section>
    </main>
  );
}

export default HomePage;
