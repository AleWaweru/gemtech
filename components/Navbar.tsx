import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button"

const Navbar = () => {
  return (
    <nav className="bg-blue-500 flexBetween max-container padding-container z-30 py-5 sticky">
      <Image src="/logoTech.png" alt="logo" width={74} height={29} />
      <ul className="hidden h-full gap-12 lg:flex xl:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src= "menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="incline-block cursor-pointer lg:hidden xl:hidden"
      />

    </nav>
  );
};

export default Navbar;
