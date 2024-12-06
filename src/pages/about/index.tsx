import MainLayout from "@/layout/MainLayout";
import React, { ReactElement } from "react";

const About = () => {
  return <div>About</div>;
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
