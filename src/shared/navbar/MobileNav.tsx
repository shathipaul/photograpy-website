import logo from "@/assets/images/logo/Frame-3953.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Pages", link: "/" },
    { title: "Work", link: "/" },
    { title: "Blog", link: "/" },
    { title: "Pricing", link: "/" },
    { title: "Contact", link: "/" },
  ];
  return (
    <nav className="flex items-center justify-between px-4 bg-white shadow-md">
      <div className="" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 size={24} /> : <CgMenuLeft size={24} />}
      </div>
      {/* <div className="flex-1 flex justify-center lg:justify-start">
        <ul
          className={`lg:flex lg:items-center lg:gap-8 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="my-2 lg:my-0">
              <Link href={item.link} className="block lg:inline-block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <Link href="/" className="max-w-[150px]">
        <Image className="w-full" src={logo} alt="Logo" priority />
      </Link>
    </nav>
  );
};

export default MobileNav;
