import Follow from "@/components/home/Follow";
import ServiceCard from "@/components/services/ServiceCard";
import MainLayout from "@/layout/MainLayout";
import { ReactElement, useEffect, useState } from "react";

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

const Services = () => {
  const [servicesData, setServicesData] = useState<IServiceData[]>([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <div className="container py-4 md:py-10">
      <h3 className="titleFont uppercase text-primary tracking-widest text-center text-3xl md:text-5xl font-bold">
        Our Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-10 py-6 md:py-10 px-6 md:px-10">
        {servicesData.map((data) => (
          <div key={data.id} className="flex flex-col gap-4 bg-white">
            <ServiceCard data={data.service} />
          </div>
        ))}
      </div>
      <Follow />
    </div>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
