import Image from "next/image";
import NextLogo from "../public/next.svg"

const Logo = () => {
    return (
        <div className="flex items-center">
            <div className="relative w-24 py-0.5 ">
                <Image
                    src={NextLogo}
                    alt="Logo"
                    objectFit="cover" // change as you like
                    className="" // you can use other classes here too
                />
            </div>
            <div className="border-y-2 text-sm mx-1 px-1 border-gray-900">LEARN</div>
        </div>
    )
}
export default Logo