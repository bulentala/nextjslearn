import Link from "next/link";
import Image from "next/image";
import NextLogo from "../public/next.svg";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata = {
  title: "NextJs Learn",
  description: "This is the way. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <container className='grid grid-rows-[_auto_auto_1fr_auto] min-h-screen mx-auto max-w-4xl'>
          <header className='grid grid-cols-[_auto_1fr_auto] py-6 border-b border-gray-300'>
            <Link href='/'>
              <div className='grid grid-cols-2 items-center'>
                <div>
                  <Image
                    alt='next.js logo'
                    src={NextLogo}
                    width=''
                    height='22'
                  />
                </div>
                <div className=' font-mono font-extrabold border-y-2 border-gray-900 ml-2 w-max '>
                  LEARN
                </div>
              </div>
            </Link>
            <div className=' col-start-3'>
              <Link href='/about'>About</Link>
            </div>
          </header>
          <hero className='py-20'>
            <div className='mx-auto w-max text-6xl font-mono font-bold  '>
              This is the way.
            </div>
            <Link target='_blank' href='https://nextjs.org/learn'>
              <div className='w-max mx-auto border border-gray-400 rounded p-1 mt-12 text-gray-600 '>
                Learn Next.js
              </div>
            </Link>
          </hero>
          <main className=''>{children}</main>
          <footer className=' text-center text-sm font-mono border-t border-gray-300 py-3'>
            Nextjslearn 2023
          </footer>
        </container>
      </body>
    </html>
  );
}
