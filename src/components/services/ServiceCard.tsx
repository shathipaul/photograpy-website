import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/anotherWedding/1.jpg";

interface IServiceData {
  serviceName: string;
  serviceImage: string;
  serviceCardDescription: string;
  serviceDescription: string[];
}

const ServiceCard = ({ data }: { data: IServiceData }) => {
  return (
    <>
      <div>
        <Image src={img} alt="" />
      </div>
      <div className="py-2 px-10 text-center">
        <h4 className="titleFont text-primary  text-xl md:text-2xl font-bold mb-2">
          {data.serviceName}
        </h4>
        <p className="text-secondary">{data.serviceCardDescription}</p>
        <Link
          href={`/services/${data.serviceName}`}
          className="titleFont block my-6 mx-10 relative group"
        >
          <span className="absolute top-0 right-0 w-[50px] h-[1.2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full me-6"></span>
          <div className="py-4 block">View Details</div>
          <span className="absolute bottom-0 left-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full ms-6"></span>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
