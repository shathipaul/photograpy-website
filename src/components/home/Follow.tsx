import Image from "next/image";
import image1 from "@/assets/images/home/follow/1.jpg";
import image2 from "@/assets/images/home/follow/2.jpg";
import image3 from "@/assets/images/home/follow/3.jpeg";
import image4 from "@/assets/images/home/follow/4.jpeg";
import image5 from "@/assets/images/home/follow/5.jpg";
import image6 from "@/assets/images/home/follow/6.jpg";

const Follow = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-4 lg:gap-6 py-4 md:py-8">
      <h3 className="titleFont uppercase text-primary tracking-widest text-center text-3xl md:text-5xl font-bold">
        Follow me on Instagram
      </h3>
      <span className="md:pb-6 text-secondary">@my_wedding_day</span>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 md:gap-6 lg:gap-10 p-6 md:p-10">
        <div className="mb-10">
          <Image src={image1} alt="" />
        </div>
        <div className="mt-10">
          <Image src={image2} alt="" />
        </div>
        <div className="mb-10">
          <Image src={image3} alt="" />
        </div>
        <div className="mt-10">
          <Image src={image4} alt="" />
        </div>
        <div className="mb-10">
          <Image src={image5} alt="" />
        </div>
        <div className="mt-10">
          <Image src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
