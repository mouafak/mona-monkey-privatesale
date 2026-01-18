'use client';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { z } from 'zod';
import { Input } from '../ui/input';
import PrivateSaleContext, {
  privateSaleContextType,
} from './context/private-sale-context';
import Image from 'next/image';
import SolanaLogo from '@/public/solanaLogo.png';
import { useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import MonaMonkeyLogo from '@/public/MonaMonkeyLogo.png';
// import { useAccount, useBalance } from "wagmi";

const SolanaInput = () => {
  const [zodError, setZodError] = useState('');
  const isConnected = useIsLoggedIn();

  const {
    solValue,
    setSolValue,
    setZodError: setZodErrorContext,
  } = useContext(PrivateSaleContext) as privateSaleContextType;

  const solMinValue = process.env.NODE_ENV == 'development' ? 0.01 : 0.5;

  const schema = z
    .number({
      required_error: 'SOL quantity required',
      invalid_type_error: 'The input is invalid',
    })
    .min(solMinValue, {
      message: ` Minimum ${solMinValue} SOL`,
    });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d*\.?\d{0,4}$/;
    const solVal = e.target?.value;
    const zodParseResult = schema.safeParse(Number(solVal));
    if (!zodParseResult.success) {
      setZodError(zodParseResult.error?.issues[0].message || '');
      console.log(zodParseResult.error?.issues[0].message);
      setZodErrorContext(true);
    } else {
      setZodError('');
      setZodErrorContext(false);
    }

    if (regex.test(solVal)) {
      setSolValue(solVal);
    }
  };

  useEffect(() => {
    if (!isConnected) {
      setSolValue('1');
    }
  }, [isConnected]);

  return (
    <div className=" relative flex flex-col bg-white p-2 h-24 rounded-lg">
      <div className="flex-center justify-between mb-2">
        <span className="text-foreground text-sm font-semibold">You pay</span>
        <div className="flex items-center">
          <span className="text-foreground text-sm font-semibold">
            1 SOL = 1500
          </span>
          {/* <XanopayLogoX className="w-auto !h-4 ml-1" /> */}
            <Image src={MonaMonkeyLogo} alt="MonaMonkeyLogo" className="w-auto !h-4 ml-1" />
        </div>
      </div>
      <Input
        disabled={!isConnected}
        onChange={onChangeHandler}
        value={solValue}
        autoComplete="off"
        autoCorrect="off"
        //minLength={1}
        //maxLength={10}
        placeholder="0.02"
        pattern="^\d*\.?\d{0,2}$"
        type="number"
        inputMode="decimal"
        className=" h-16 m-0 bg-transparent rounded-none text-foreground !text-4xl font-display font-medium outline-none border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-visible:border-none focus-visible:ring-0"
      />
      <p className="text-[11px] text-red-500 h-4 absolute bottom-1 ">
        {zodError}
      </p>
      <div className="top-2/3 -translate-y-2/3 right-4 absolute p-2 w-10 h-10 border border-accent/50 rounded-full flex-center">
        <Image src={SolanaLogo} alt="Solana logo" className="w-auto h-auto " />
      </div>
      {/* <div className=" absolute top-2/3 -translate-y-2/3 right-16 text-white ">
        <span
          // onClick={setMax}
          className="bg-custom-yellow py-.5 px-1 text-custom-blue text-sm hover:cursor-pointer hover:bg-custom-blue-green hover:text-white "
        >
          max
        </span>
      </div> */}
    </div>
  );
};

export default SolanaInput;
