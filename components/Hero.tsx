import {Button, buttonVariants} from "@/components/ui/button"
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="flex flex-col items-center py-12">
            <div className="text-3xl font-bold pb-6">
                This is the way.
            </div>
            <Link target="_blank" href="https://nextjs.org/learn" className={buttonVariants({variant: "outline"})}>Next.js
                Learn</Link>
        </div>
    )
}
export default Hero