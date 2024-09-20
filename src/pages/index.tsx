import Banner from "@/components/home/Banner";
import Follow from "@/components/home/Follow";
import GetInTouch from "@/components/home/GetInTouch";
import MainLayout from "@/layout/MainLayout";
import PageOne from "@/page/PageOne";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-[#E5E7E2]  md:rounded-lg">
        <GetInTouch />
        <Follow />
      </div>
      {/* <PageOne /> */}
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
