import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "./UserInfo";
// import {logo} from '../../../public/logo.webp'

const HeaderPage = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {/* Top Header */}
      <div className="container max-w-7xl px-2 sm:px-0 mx-auto flex justify-between items-center py-4">
        
        {/* Logo + Title + Date */}
        <div className="flex flex-col items-center">
      <Link href={'/'}>
          <div className="flex items-center space-x-2">
            <Image className="h-auto w-12" src={'/logo.webp'} alt="logo" width={150} height={50}/>
            <span className="text-red-600 font-bold text-xl">Bangla News 24</span>
          </div>
      </Link>
          <div className="text-sm mt-1">{formattedDate}</div>
        </div>

    <UserInfo/>
      </div>

      {/* Navigation Links */}
      <NavLinks/>
    </div>
  );
};

export default HeaderPage;
