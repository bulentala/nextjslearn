import NextjsLogo from "../public/next.svg";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center'>
        <div className='relative'>
          <Image alt='Next.js Logo' src={NextjsLogo} className='w-24' />
        </div>
        <div className='border-y-2 border-gray-900 font-mono font-bold ml-2'>
          LEARN
        </div>
      </div>
    </Link>
  );
};
export default Logo;
