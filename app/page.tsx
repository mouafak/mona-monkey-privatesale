import PrivateSaleForm from '@/components/private-sale/private-sale-form';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Only100KLogo from '../public/100kLogoBLue.png';
import { XanopayLogo } from '@/components/xanopay-logos';

export default function Home() {
  return (
    <main className="flex-center bg-neutral-900 w-full h-screen">
      <div className=" h-full w-full flex flex-col justify-between items-center">
        <div className="h-full w-full bg-foreground max-h-20 ">
          <div className="flex justify-between items-center container h-full px-4 lg:px-0  mx-auto">
            <Link passHref href={'https://xanopay.com/'}>
              <XanopayLogo className="!w-auto !h-10 md:w-32 md:h-32" />
            </Link>
            <Link href={'https://xanopay.com/'}>
              <div className="flex gap-1 items-center">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 stroke-white " />
                <p className="text-white text-sm md:text-base">Back to Home</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex-center ">
          <PrivateSaleForm />
        </div>
        <div className="h-12 w-full bg-none bg-foreground flex-center text-sm text-background text-center">
          © XanoPay 2025
        </div>
      </div>
    </main>
  );
}
