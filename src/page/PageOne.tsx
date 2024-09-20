import Image from "next/image";
import image1 from "@/assets/images/samantha/2.jpg";
import image2 from "@/assets/images/samantha/10.jpg";
import image3 from "@/assets/images/samantha/4.jpeg";
import image4 from "@/assets/images/samantha/3.jpg";
import image5 from "@/assets/images/samantha/5.jpg";
import image6 from "@/assets/images/samantha/6.jpg";
import image7 from "@/assets/images/samantha/7.jpg";
import image8 from "@/assets/images/samantha/8.jpg";
import image9 from "@/assets/images/samantha/1.jpg";
import Link from "next/link";

const PageOne = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-2 py-4 md:py-10 border-b border-secondary">
      <h3 className="titleFont uppercase text-primary tracking-widest text-center text-3xl md:text-5xl font-bold">
        Wedding Story
      </h3>
      <span className="text-lg tracking-widest text-secondary">
        Samantha & Chaitanya
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-10 p-6 md:p-10">
        <div className="mb-10 group relative inline-block overflow-hidden ">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image1}
            alt=""
          />
        </div>
        <div className="mt-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image2}
            alt=""
          />
        </div>
        <div className="mb-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image3}
            alt=""
          />
        </div>
        <div className="mt-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image4}
            alt=""
          />
        </div>
        <div className="mb-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image5}
            alt=""
          />
        </div>
        <div className="mt-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image6}
            alt=""
          />
        </div>
        <div className="mb-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image7}
            alt=""
          />
        </div>
        <div className="mt-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image8}
            alt=""
          />
        </div>
        <div className="mb-10 group relative inline-block overflow-hidden">
          <Image
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image9}
            alt=""
          />
        </div>
      </div>
      <Link
        href={"/"}
        className="titleFont uppercase font-medium tracking-widest border border-secondary text-primary hover:bg-secondary hover:text-white hover:font-semibold rounded px-20 py-4"
      >
        Load more
      </Link>
    </div>
  );
};

export default PageOne;
