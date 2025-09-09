import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className="pt-8 min-h-[28rem] bg-sidebar-mobile md:bg-sidebar-desktop bg-no-repeat bg-center rounded-lg">
      <AppNav />
    </div>
  );
}

export default Sidebar;
