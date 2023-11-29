import type {Metadata} from 'next'
import {JetBrains_Mono} from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jbMono = JetBrains_Mono({subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Next.js Learn',
    description: 'This is the way',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={jbMono.className}>
        <Header/>
        <main className="max-w-3xl mx-auto px-4">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
