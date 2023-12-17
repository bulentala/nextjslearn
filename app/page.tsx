import Logo from "@/components/Logo";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center py-36 gap-4'>
      <h1 className='text-3xl'>This is the way</h1>
      <Link
        href='https://nextjs.org/learn?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home'
        target='_blank'
        className='border border-gray-500 text-gray-500 rounded px-1 py-0.5'
      >
        Next.js Learn
      </Link>
    </div>
  );
};
export default HomePage;
