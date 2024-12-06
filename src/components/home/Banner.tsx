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
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
interface IServiceData {
  _id: string;
  serviceName: string;
  serviceCardImage: string;
  serviceTakerName: string;
  serviceCardDescription: string;
  serviceDescription: string[];
  images: {
    img: string;
    masonry: string;
  }[];
}

const Banner = () => {
  const [bannerData, setBannerData] = useState<IServiceData[]>([]);
  useEffect(() => {
    fetch(
      "https://photography-portfolio-backend.vercel.app/api/v1.0/photography/getAllPhotographys"
    )
      .then((response) => response.json())
      .then((data: IServiceData[]) => setBannerData(data.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-2 px-2 lg:px-0">
        {bannerData.map((data, index) => (
          <Link
            href={`services/${data._id}`}
            key={index}
            className={`w-full h-full overflow-hidden ${
              index === 0 || index === 5
                ? "col-span-2 row-span-2"
                : index === 7
                ? "col-span-1 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Image
              height={500}
              width={500}
              className="w-full h-full object-cover"
              src={data.serviceCardImage}
              alt=""
            />
          </Link>
        ))}
      </div>
      {/* Mobile  */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
      >
        {bannerData.map((data, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`services/${data.serviceName}`}
              className="w-full h-full overflow-hidden md:hidden"
            >
              <Image
                height={500}
                width={500}
                className="w-full h-full object-cover"
                src={data.serviceCardImage}
                alt={data.serviceName}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
