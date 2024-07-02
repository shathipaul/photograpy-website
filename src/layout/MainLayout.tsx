import Footer from "@/shared/footer/Footer";
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
