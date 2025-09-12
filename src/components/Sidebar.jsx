import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className="bg-sidebar-mobile lg:bg-sidebar-desktop lg:col-start-1 lg:col-end-2 lg:row-span-4 col-span-full lg:rounded-lg bg-center bg-no-repeat bg-cover">
      <AppNav />
    </div>
  );
}

export default Sidebar;
