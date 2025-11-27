import Blogs from "./Blogs";
import About from "./About";

const BlogsMain = () => {
  return (
    <div className="min-h-screen container px-4 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-20">
      <Blogs />
      <About />
    </div>
  );
};

export default BlogsMain;
