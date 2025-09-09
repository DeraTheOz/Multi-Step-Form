import { Outlet } from "react-router";

function HomePage() {
  return (
    <main>
      <section className="rounded-2xl shadow-primary flex max-w-[58.75rem] gap-8 p-4 bg-white">
        <Outlet />
      </section>
    </main>
  );
}

export default HomePage;
