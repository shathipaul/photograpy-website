import img1 from "@/assets/images/blogs/1.webp";
import img2 from "@/assets/images/blogs/2.webp";
import img3 from "@/assets/images/blogs/3.webp";
import Image from "next/image";
import placeholder from "@/assets/images/placeholder.png";

const Blogs = () => {
  const blogs = [
    {
      img: img1,
      title:
        "Capturing Georgia: A Photographer’s Journey Through Its Landscapes and Streets",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui expedita sint voluptate accusamus? Fugiat pariatur sint necessitatibus iusto quisquam laborum repellendus natus quibusdam deleniti, consequuntur quia facere qui...",
      date: "November 26, 2014",
    },
    {
      img: img2,
      title:
        "Behind the Lens: Stories and Moments from My Photography Projects",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui expedita sint voluptate accusamus? Fugiat pariatur sint necessitatibus iusto quisquam laborum repellendus natus quibusdam deleniti, consequuntur quia facere qui...",
      date: "November 26, 2014",
    },
    {
      img: img3,
      title:
        "Light, Lens, and Life: Tips, Tales, and Inspiration from a Georgia Photographer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui expedita sint voluptate accusamus? Fugiat pariatur sint necessitatibus iusto quisquam laborum repellendus natus quibusdam deleniti, consequuntur quia facere qui...",
      date: "November 26, 2014",
    },
  ];
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3">
      {blogs.map((b, i) => (
        <div
          key={i}
          className="mb-12 flex flex-col items-center text-center gap-6"
        >
          <span className="text-2xl italic text-primary/40">{b.date}</span>
          <h3 className="uppercase lg:text-3xl text-secondary xl:px-8 xl:leading-[50px]  font-normal">
            {b.title}
          </h3>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={b.img}
              alt="Blog image"
              priority
              placeholder="blur"
              blurDataURL={placeholder.src}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm leading-6 font-thin tracking-wider text-primary xl:px-4 titleFont">
            {b.desc}
          </p>
          <button className="block relative group w-[200px]">
            <span className="absolute top-0 right-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full me-6"></span>
            <span className="py-4 block titleFont">Read More</span>
            <span className="absolute bottom-0 left-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full ms-6"></span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
