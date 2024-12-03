import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:px-16 px-4 ml-auto mr-auto min-h-screen bg-gray-100 pt-32">
      <Outlet />
    </div>
  );
};

export default Layout;
