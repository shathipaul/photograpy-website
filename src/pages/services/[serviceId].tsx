import { lazy, ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/common/Loader";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/layout/MainLayout";
import Follow from "@/components/home/Follow";
import GetInTouchBtn from "@/components/common/GetInTouchBtn";
import { useQuery } from "@tanstack/react-query";

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

const ServiceDetails = () => {
  // const [service, setService] = useState(null);
  const router = useRouter();
  const serviceId = router.query.serviceId;

  // useEffect(() => {
  //   fetch(
  //     `https://photography-portfolio-backend.vercel.app/api/v1.0/photography/getPhotographysDetails/${serviceId}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setService(data.data);
  //       } else {
  //         console.error("Error fetching data:", data.message);
  //       }
  //     })
  //     .catch((error) => console.error("Fetch error:", error));
  // }, [serviceId]);

  // console.log(service);

  const { data, isLoading } = useQuery({
    queryKey: ["serviceDetailsById", serviceId],
    queryFn: async () => {
      const res = await fetch(
        `https://photography-portfolio-backend.vercel.app/api/v1.0/photography/getPhotographysDetails/${serviceId}`
      );
      const result = await res.json();
      return result;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const service = data.data as IServiceData;

  console.log(service);

  return (
    <div className="container">
      <div className="flex flex-col justify-items-center items-center gap-2 py-4 md:py-10">
        <h3 className="titleFont capitalize text-primary tracking-widest text-center text-3xl md:text-5xl font-bold">
          {service.serviceName}
        </h3>
        <span className="text-lg tracking-widest text-secondary">
          {service.serviceTakerName}
        </span>
        <div className="grid grid-cols-2 gap-10 my-10 bg-white">
          <div className="w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              height={300}
              width={800}
              src={service.serviceCardImage}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center pe-10 py-10">
            <p>{service.serviceDescription[0]}</p>
            <p>{service.serviceDescription[1]}</p>
            <p>{service.serviceDescription[2]}</p>
            <p>{service.serviceDescription[3]}</p>
            <p>{service.serviceDescription[4]}</p>
            <GetInTouchBtn />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-4 my-10">
          <span className="border-b border-secondary"></span>
          <p className="text-xl">Few Memorable Moments</p>
          <span className="border-b border-secondary"></span>
        </div>

        <div className="grid grid-cols-3 gap-2 p-6 md:p-10">
          {service.images.map((img, i) => (
            <div
              key={i}
              className={`${img.masonry} w-full h-full overflow-hidden`}
            >
              <Image
                height={300}
                width={300}
                src={img.img}
                alt="Masonry-Img"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          href={"/"}
          className="titleFont capitalize font-medium tracking-widest border border-secondary text-primary hover:bg-secondary hover:text-white hover:font-semibold rounded px-20 py-4"
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
