import PrivateSaleForm from '@/components/private-sale/private-sale-form';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MonaMonkeyLogo from '@/public/MonaMonkeyLogo.png';

export default function Home() {
  return (
    <main className="flex-center bg-white w-full h-screen">
      <div className=" h-full w-full flex flex-col justify-between items-center">
        <div className="h-full w-full bg-background max-h-20 ">
          <div className="flex justify-between items-center container h-full px-4 lg:px-0  mx-auto">
            <Link passHref href={'https://monamonkey.com/'} className='flex items-center gap-2'>
              <Image src={MonaMonkeyLogo} alt="MonaMonkeyLogo" className="w-14 h-auto md:w-18 md:h-auto" />
              <h2 className='text-foreground text-md md:text-xl font-bold'>Mona Monkey</h2>
            </Link>
            <Link href={'https://monamonkey.com/'}>
              <div className="flex gap-1 items-center">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 stroke-foreground " />
                <p className="text-foreground text-sm md:text-base font-semibold">Back to Home</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex-center ">
          <PrivateSaleForm />
        </div>
        <div className="h-12 w-full bg-none bg-background flex-center text-base text-foreground text-center">
          © Mona Monkey 2026
        </div>
      </div>
    </main>
  );
}
