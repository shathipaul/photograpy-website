import logo from "@/assets/images/logo/Frame-3942.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const menuItemsLeft = [
    { title: "Home", link: "/" },
    { title: "Pages", link: "/" },
    { title: "Work", link: "/" },
  ];
  const menuItemsRight = [
    { title: "Blog", link: "/" },
    { title: "Pricing", link: "/" },
    { title: "Contact", link: "/" },
  ];
  return (
    <nav className="bg-white grid grid-cols-3 items-center py-4">
      <ul className="playfairDisplayFont text-primary text-base tracking-widest grid grid-cols-3 justify-items-center">
        {menuItemsLeft.map((data, index) => (
          <li key={index}>
            <Link href={"/"}>{data.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/"} className="max-w-[200px] m-auto">
        <Image className="w-full" src={logo} alt="" priority />
      </Link>
      <ul className="playfairDisplayFont text-primary text-base tracking-widest grid grid-cols-3 justify-items-center">
        {menuItemsRight.map((data, index) => (
          <li key={index}>
            <Link href={"/"}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
