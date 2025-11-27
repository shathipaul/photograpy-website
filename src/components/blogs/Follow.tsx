import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FollowSection = () => {
  const links = [
    {
      icon: FaFacebook,
    },
    {
      icon: FaInstagram,
    },
    {
      icon: FaTwitter,
    },
    {
      icon: FaYoutube,
    },
  ];

  return (
    <div>
      <h2 className="uppercase text-secondary mb-5 pt-2 text-2xl font-bold italic tracking-wider">
        FOLLOW
      </h2>
      <div className="flex items-center gap-6">
        {links.map((l, i) => (
          <l.icon
            key={i}
            className="text-secondary/80 cursor-pointer text-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowSection;
