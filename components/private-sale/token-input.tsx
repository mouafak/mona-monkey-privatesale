'use client';
import React, { useContext, useEffect } from 'react';
import PrivateSaleContext, {
  privateSaleContextType,
} from './context/private-sale-context';
import Image from 'next/image';
import MonaMonkeyLogo from '@/public/MonaMonkeyLogo.png';

const TokenInput = () => {
  const { solValue, tokenValue, setTokenValue } = useContext(
    PrivateSaleContext
  ) as privateSaleContextType;

  useEffect(() => {
    const tAmount = Number(solValue) * 10_000_000;
    setTokenValue(tAmount.toFixed(0));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solValue]);
  return (
    <div className=" relative flex flex-col p-2 h-24 justify-center  bg-white rounded-lg">
      <span className="text-foreground text-sm font-semibold">You get</span>
      <div className="  m-0 bg-transparent rounded-none text-foreground text-4xl font-display font-medium outline-none border-none h-16 flex items-center relative px-2">
        {tokenValue === '' ? '0' : tokenValue}
        <div className=" top-1/2 -translate-y-1/2 right-2 absolute w-10 h-10 bg-background flex justify-center items-center rounded-full border border-accent p-2">
          <Image src={MonaMonkeyLogo} alt="logo" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default TokenInput;
