import Navbar from "./components/Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-[1000px] bg-slate-100">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
