import MainLayout from "@/layout/MainLayout";
import { ReactElement } from "react";

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
