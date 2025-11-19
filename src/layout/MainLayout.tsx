import OpacityTransition from "@/components/animations/OpacityTransition";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <OpacityTransition>
        <main className="bg-offWhite">{children}</main>
      </OpacityTransition>
      <Footer />
    </>
  );
};

export default MainLayout;
