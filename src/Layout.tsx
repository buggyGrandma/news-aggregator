import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-row pt-14 bg-slate-100">
      <Navbar />
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
