import author from "@/assets/images/author.webp";
import placeholder from "@/assets/images/placeholder.png";
import Image from "next/image";
import Link from "next/link";
import FollowSection from "./Follow";

const About = () => {
  return (
    <div className="col-span-1">
      <div className="relative w-full h-[400px] px-4 pt-4 pb-8 bg-primary/10 overflow-hidden">
        <span className="absolute block bg-primary/70 -rotate-2 w-12 h-4 top-3 left-1/2 -translate-x-1/2"></span>
        <Image
          src={author}
          alt="Blog image"
          priority
          placeholder="blur"
          blurDataURL={placeholder.src}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="uppercase text-secondary mt-5 mb-1 text-2xl font-bold italic tracking-wider">
        About Author
      </h4>
      <p className="text-lg font-light text-secondary">
        Lorem ipsum dolor sit amet, adipisicing elit quas Lorem ipsum dolor sit
        ame Lorem ipsum dolor sit amet.
      </p>
      <Link
        href={`/about`}
        className="text-center block my-6 mx-10 relative group"
      >
        <span className="absolute bottom-0 right-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full me-6"></span>
        <span className="titleFont py-4 block">View Profile</span>
        <span className="absolute top-0 left-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full ms-6"></span>
      </Link>
      <FollowSection />
    </div>
  );
};

export default About;
