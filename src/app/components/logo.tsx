import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={assets.logo} alt="logo" width={180} height={30} className="h-20" />
    </Link>
  );
};

export default Logo;