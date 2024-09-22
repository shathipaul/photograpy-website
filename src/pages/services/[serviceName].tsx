import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/common/Loader";
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
import MainLayout from "@/layout/MainLayout";
import Follow from "@/components/home/Follow";

interface IServiceData {
  id: string;
  service: {
    serviceName: string;
    serviceImage: string;
    serviceCardDescription: string;
    serviceDescription: string[];
  };
  story: {
    storyName: string;
    storyImage: string;
  };
  images: string[];
}

const ServiceDetails = () => {
  const [serviceData, setServiceData] = useState<IServiceData[]>([]);
  const [service, setService] = useState<IServiceData | null>(null);
  const router = useRouter();
  const { serviceName } = router.query;

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data: IServiceData[]) => setServiceData(data));
  }, []);

  useEffect(() => {
    if (serviceName) {
      const foundService = serviceData.find(
        (item) => item.service.serviceName === serviceName
      );
      setService(foundService || null);
    }
  }, [serviceData, serviceName]);

  if (!service) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex flex-col justify-items-center items-center gap-2 py-4 md:py-10">
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
      <Follow />
    </div>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
