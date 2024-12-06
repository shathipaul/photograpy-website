import Link from "next/link";

const GetInTouchBtn = () => {
  return (
    <Link
      href={"/"}
      className="titleFont uppercase font-medium tracking-widest border border-secondary hover:border-catSkillWhite text-primary hover:bg-catSkillWhite rounded px-10 md:px-20 py-4"
    >
      Get in touch
    </Link>
  );
};

export default GetInTouchBtn;
