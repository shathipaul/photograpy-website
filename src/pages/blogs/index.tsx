import BlogsMain from "@/components/blogs/BlogsMain";
import MainLayout from "@/layout/MainLayout";
import { ReactElement } from "react";

const Blogs = () => {
  return <BlogsMain />;
};

export default Blogs;

Blogs.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
