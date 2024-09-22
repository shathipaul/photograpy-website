import logo from "@/assets/images/logo/Frame-3942.png";
import mobileLogo from "@/assets/images/logo/Frame-3953.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>'
      );
    } else {
      document.body.classList.remove("overflow-hidden");
      const overlay = document.getElementById("overlay");
      if (overlay) overlay.remove();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      const overlay = document.getElementById("overlay");
      if (overlay) overlay.remove();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const menuData = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Services", link: "/services" },
    { title: "Blogs", link: "/" },
    { title: "Pricing", link: "/" },
    { title: "Contact", link: "/" },
  ];
  const menuItemsLeft = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Services", link: "/services" },
  ];
  const menuItemsRight = [
    { title: "Blogs", link: "/" },
    { title: "Pricing", link: "/" },
    { title: "Contact", link: "/" },
  ];
  return (
    <nav className="bg-offWhite">
      <div className="hidden container md:grid grid-cols-3 items-center py-4">
        <ul className=" titleFont text-primary text-base tracking-widest grid grid-cols-3 justify-items-center">
          {menuItemsLeft.map((data, index) => (
            <li key={index}>
              <Link href={data.link}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <Link href={"/"} className="max-w-[160px] m-auto">
          <Image className="w-full" src={logo} alt="" priority />
        </Link>
        <ul className="titleFont text-primary text-base tracking-widest grid grid-cols-3 justify-items-center">
          {menuItemsRight.map((data, index) => (
            <li key={index}>
              <Link href={data.link}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden py-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-end">
            <Hamburger size={26} toggled={isOpen} toggle={setOpen} />
          </div>
          <Link href={"/"} className="pe-2">
            <Image className="" src={mobileLogo} alt="" priority />
          </Link>
        </div>
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`bg-white fixed top-0 z-50 pt-10 flex flex-col w-3/4 h-screen ${
            isOpen ? "right-0" : "-right-full"
          } duration-700 ease-in-out`}
        >
          {menuData.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className="py-4 px-10 text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {data.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
