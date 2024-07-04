import image from "@/assets/images/home/get-in-touch/img.png";
import Image from "next/image";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 py-8">
      <div className="max-w-[400px]">
        <Image className="w-full" src={image} alt="" />
      </div>
      <h2 className="playfairDisplayFont text-primary tracking-widest text-center text-3xl md:text-5xl font-bold">
        You just enjoy your day!
      </h2>
      <p className="max-w-3xl text-center text-secondary px-4 pb-6">
        Lorem ipsum dolor sit amet, eu alia admodum volup tua cu hend, rerit
        tinci dunt nec cu, per an vidit tua cu hend Nec home delectus ne. Vim
        viven dum manda mus te, an qui sagam accommo dare Lorem ipsum dolor sit
        amet, eu alia admodum volup tua cu hend, rerit tinci dunt Vim viven
        neccu, per an vidit corpora. ommo dare. Eu alia admodum volup tua cu
        hend.
      </p>
      <Link
        href={"/"}
        className="playfairDisplayFont uppercase font-medium tracking-widest border border-secondary text-primary hover:bg-secondary hover:text-white hover:font-semibold rounded px-20 py-4"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default GetInTouch;
