import type { Metadata } from "next";
import localfont from "next/font/local"
import "./globals.css";


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
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetBrains_Mono.variable} 
        min-h-screen px-10 w-full mx-auto border-2 p-2 border-amber-500 `}
      >
        <div className=' border-2 border-amber-500'>
          <h1 className='justify-center p-2 text-center items-center text-2xl font-extrabold'>Job Portal</h1>
        </div>
        {children}

      </body>
    </html>
  );
}
