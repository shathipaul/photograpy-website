import Footer from "@/shared/footer/Footer";
import MobileNav from "@/shared/navbar/MobileNav";
import Navbar from "@/shared/navbar/Navbar";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
