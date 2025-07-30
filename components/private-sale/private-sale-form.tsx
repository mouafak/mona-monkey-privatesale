import React from 'react';
import SolanaInput from './solana-input';
import TokenInput from './token-input';
import { ArrowRight } from 'lucide-react';
import PrivateSaleProvider from './private-sale-provider';
import ConnectButton from './connect-button';
import Balance from './get-balance';
import DisconnectBtn from './disconnect-button';
import BuyButton from '@/components/private-sale/buy-button';
import CountdownTimer from '@/components/private-sale/count-down';
import { XanopayLogo } from '../xanopay-logos';
import Affiliate from '../affiliate/affiliate-user';
// import PiInput from './PiInput';

const PrivateSaleForm = () => {
  return (
    <PrivateSaleProvider>
      <div className="w-96 p-1 flex flex-col gap-2">
        <div className=" bg-foreground">
          <CountdownTimer targetDate="2025-08-15T21:59:59" />
        </div>
        <div className="w-full h-full bg-foreground p-6 flex flex-col justify-between gap-4">
          <div className=" relative flex-center flex-col gap-4 mb-4">
            <XanopayLogo className="!w-auto !h-14 " />
            <p className="text-[10px] uppercase text-accent font-display tracking-widest font-semibold absolute right-17 bottom-0">
              Private Sale
            </p>
            {/* <div>
              <p className="text-background/60 text-center text-xs font-semibold text-gold ">
                ✨ More than 10K PI Network tokens to earn ✨ <br />
                <span className="">
                  you contribute <span className="text-sm"> 1️⃣ </span> SOL you
                  earn <span className="text-sm"> 1️⃣ </span> PI
                </span>
              </p>
            </div> */}
          </div>
          <Balance />
          <div className="flex flex-col justify-center gap-1 relative">
            <SolanaInput />
            <TokenInput />
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-center bg-foreground p-1 border border-neutral-700">
              <ArrowRight className=" w-5 h-5 rotate-90 text-accent" />
            </div>
            {/* <div>
              <PiInput />
              Pi Input will be here later
            </div> */}
          </div>
          <ConnectButton />
          <BuyButton />
          <Affiliate />
          <DisconnectBtn />
        </div>
      </div>
    </PrivateSaleProvider>
  );
};

export default PrivateSaleForm;
