import Inputfield from "@/components/common/Inputfield";
import MainLayout from "@/layout/MainLayout";
import React, { ReactElement } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleContact = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const weddingDate = form.weddingDate.value;
    const weddingAddress = form.weddingAddress.value;
    const message = form.message.value;

    if (name && email && weddingDate && weddingAddress && message) {
      form.reset();
      toast.success("Thank you for contacting us! We'll get back to you soon");
      console.log(name, email, weddingDate, weddingAddress, message);
    }
  };
  return (
    <div className="container">
      <form
        onSubmit={handleContact}
        className="md:w-2/3 xl:w-1/2 m-auto bg-white py-4 md:py-6 lg:py-10 px-6 md:px-10 lg:px-20 rounded-xl"
      >
        <div className="flex flex-col items-center gap-4 pb-2 md:pb-4 lg:pb-8">
          <h2 className="capitalize text-primary text-xl md:text-2xl lg:text-3xl">
            Get in touch
          </h2>
          <p className="text-center text-secondary text-sm lg:text-base">
            Lorem ipsum dolor sit amet, eu alia admodum volup. Lorem ipsum dolor
            sit amet, eu alia admodum volup
          </p>
        </div>
        <Inputfield
          label="Name"
          type="text"
          name="name"
          placeholder="Your name"
          customClass=""
          required="required"
        />
        <Inputfield
          label="E-mail"
          type="email"
          name="email"
          placeholder="Your email"
          customClass=""
          required="required"
        />
        <Inputfield
          label="Wedding date"
          type="date"
          name="weddingDate"
          placeholder="Wedding date"
          customClass=""
          required="required"
        />
        <Inputfield
          label="Wedding address"
          type="text"
          name="weddingAddress"
          placeholder="Wedding address"
          customClass=""
          required="required"
        />
        <Inputfield
          label="Tell us more"
          type="message"
          name="message"
          placeholder="Your message..."
          customClass="pb-20"
          required="required"
        />
        <div className="flex justify-center items-center mt-2 md:mt-4 lg:mt-8">
          <button
            className="py-2 px-20 bg-catSkillWhite text-primary rounded text-lg font-medium"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
