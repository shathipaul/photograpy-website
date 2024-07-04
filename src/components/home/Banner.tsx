import Image from "next/image";
import image1 from "@/assets/images/samantha/2.jpg";
import image2 from "@/assets/images/samantha/10.jpg";
import image3 from "@/assets/images/samantha/1.jpg";
import image4 from "@/assets/images/samantha/3.jpg";
import image5 from "@/assets/images/samantha/5.jpg";
import image6 from "@/assets/images/anotherWedding/1.jpg";
import image7 from "@/assets/images/anotherWedding/2.jpg";
import image8 from "@/assets/images/anotherWedding/7.jpg";
import image9 from "@/assets/images/anotherWedding/4.jpg";
import image10 from "@/assets/images/anotherWedding/11.jpg";

const Banner = () => {
  const bannerItems = [
    { image: image1, name: "Natalie & Marcus", category: "" },
    { image: image2, name: "Alisa's Snaps", category: "" },
    { image: image3, name: "", category: "" },
    { image: image4, name: "", category: "" },
    { image: image5, name: "", category: "" },
    { image: image6, name: "", category: "" },
    { image: image7, name: "", category: "" },
    { image: image8, name: "", category: "" },
    { image: image9, name: "", category: "" },
    { image: image10, name: "", category: "" },
  ];
  return (
    <div className="pb-2">
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-2 px-2 lg:px-0 hidden">
        <div className="object-cover">
          <Image className="w-full h-full" src={image1} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="overflow-hidden ">
            <Image className="w-full h-full" src={image2} alt="" />
          </div>
          <div className="overflow-hidden ">
            <Image className="w-full h-full" src={image3} alt="" />
          </div>
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image4} alt="" />
          </div>
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image5} alt="" />
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-2 px-2 pt-2 lg:px-0 hidden">
        <div className="grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image6} alt="" />
          </div>
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image7} alt="" />
          </div>
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image8} alt="" />
          </div>
          <div className="overflow-hidden">
            <Image className="w-full h-full" src={image9} alt="" />
          </div>
        </div>
        <div className="object-cover">
          <Image className="w-full h-full" src={image10} alt="" />
        </div>
      </div>

      {bannerItems.map((data, index) => (
        <div key={index} className="pb-2 px-2 md:hidden">
          <Image className="w-full h-full" src={data.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Banner;
