import Banner from "@/components/home/Banner";
import Follow from "@/components/home/Follow";
import GetInTouch from "@/components/home/GetInTouch";
import MainLayout from "@/layout/MainLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <GetInTouch />
      <Follow />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
