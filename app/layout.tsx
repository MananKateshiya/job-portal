import type { Metadata } from "next";
import localfont from "next/font/local"
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/Navigation/NavBar";


const JetBrains_Mono = localfont({
  src: [
    {
      path: '../assets/fonts/JetBrainsMono-Regular.ttf',
      style: 'normal',
      weight: 'normal'
    },
  ],
  variable: '--font-jetbrains',
})


export const metadata: Metadata = {
  title: "Job Portal",
  description: "Search Job WorldWide",
};

export default function RootLayout({
  children,


}: Readonly<{
  children: React.ReactNode,
 
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body
        className={`${JetBrains_Mono.variable} 
        min-h-screen px-10 w-full mx-auto border-2 p-2 border-amber-500`}
      >
        <Link href={'/'} className='flex border-2 border-amber-500 justify-center p-2 text-center text-2xl font-extrabold'>
          <h1>
            Job Portal
          </h1>
        </Link>

        <NavBar />
        {children}
  
      </body>
    </html>
  );
}
