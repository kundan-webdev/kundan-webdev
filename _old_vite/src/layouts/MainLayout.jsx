import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[url('/bg.avif')] bg-repeat-y bg-size-[100%_auto] bg-center min-h-screen">
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
