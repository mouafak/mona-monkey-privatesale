'use client';
import React, { useContext, useEffect } from 'react';
import PrivateSaleContext, {
  privateSaleContextType,
} from './context/private-sale-context';
import { XanopayLogoX } from '../xanopay-logos';

const TokenInput = () => {
  const { solValue, tokenValue, setTokenValue } = useContext(
    PrivateSaleContext
  ) as privateSaleContextType;

  useEffect(() => {
    const mskAmount = Number(solValue) * 10000;
    setTokenValue(mskAmount.toFixed(0));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solValue]);
  return (
    <div className=" relative flex flex-col bg-soft p-2 h-24 justify-center borde border-neutral-700 bg-neutral-900">
      <span className="text-white text-sm font-semibold">You get</span>
      <div className="  m-0 bg-transparent rounded-none text-white text-4xl font-display font-medium outline-none border-none h-16 flex items-center relative px-2">
        {tokenValue === '' ? '0' : tokenValue}
        <div className=" top-1/2 -translate-y-1/2 right-2 absolute w-10 h-10 bg-blueSombre flex justify-center items-center rounded-full border border-neutral-700 p-2">
          {/* <Image src={Only100K} alt="logo" className="w-16" /> */}
          <XanopayLogoX className="w-auto !h-5" />
        </div>
      </div>
    </div>
  );
};

export default TokenInput;
