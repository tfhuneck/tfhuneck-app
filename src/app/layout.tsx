import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Nav from '@/components/Nav';
import Image from 'next/image';
import './globals.css';
import { Providers } from './provider';
import { Analytics } from "@vercel/analytics/react"


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-monsterrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'T F Huneck Portfolio',
  description: 'Timothy F Huneck Portfolio Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} >
        <Providers>
          <Nav />
            {/* <Image
              className='h-120 w-120 fixed flex object-cover opacity-10'
              src={'/images/blob_1.png'}
              alt='background'
              height={900}
              width={900}
            /> */}
            {/* <Image
              className='h-120 w-120 fixed flex object-cover opacity-10'
              src={'/images/blob_3.png'}
              alt='background'
              fill
            /> */}
            <video 
              className='h-screen fixed background flex object-cover'
              autoPlay
              muted
              playsInline
              loop
              disablePictureInPicture
              >
              <source src='/images/background.webm' type='video/webm'/>
            </video>
            <div className='content scroll-smooth'>
              {children}
            </div>
        </Providers>
        <Analytics/>
      </body>
    </html>
  )
}
  