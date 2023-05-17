import Image from 'next/image'
import { Inter } from 'next/font/google'
import SectionScroller from '@/components/SectionScroller'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SectionScroller />
    </>

  )
}
