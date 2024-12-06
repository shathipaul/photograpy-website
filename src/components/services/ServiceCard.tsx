import Image from "next/image";
import Link from "next/link";

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

const ServiceCard = ({ data }: { data: IServiceData }) => {
  return (
    <>
      <Link href={`/services/${data._id}`}>
        <Image
          width={500}
          height={500}
          src={data.serviceCardImage}
          alt=""
          priority
        />
      </Link>
      <div className="md:py-2 px-2 md:px-10 text-center">
        <h4 className="titleFont text-primary text-xl md:text-2xl font-bold mb-2">
          {data.serviceName}
        </h4>
        <p className="text-secondary">{data.serviceCardDescription}</p>
        <Link
          href={`/services/${data._id}`}
          className="titleFont block my-6 mx-10 relative group"
        >
          <span className="absolute top-0 right-0 w-[50px] h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full me-6"></span>
          <div className="py-4 block">View Details</div>
          <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full ms-6"></span>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
