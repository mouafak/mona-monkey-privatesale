'use client';
import { getBalanceByWalletAddress } from '@/app/actions';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useContext, useEffect, useState } from 'react';
import PrivateSaleContext, {
  privateSaleContextType,
} from './context/private-sale-context';
import Image from 'next/image';
import Only100KLogo from '@/public/100kLogoBLue.png';
import { XanopayLogoX } from '../xanopay-logos';

const Balance = () => {
  const [balance, setBalance] = useState<string>('0');
  const { primaryWallet } = useDynamicContext();

  const { refetchBalance, setRefetchBalance } = useContext(
    PrivateSaleContext
  ) as privateSaleContextType;

  const getBalanceFromDB = async () => {
    if (!primaryWallet || !primaryWallet.address) {
      setBalance('0');
      return;
    }
    const balanceData = await getBalanceByWalletAddress(primaryWallet.address);
    if (balanceData.length > 0) {
      const balanceCalculated = balanceData.reduce((acc, curr) => {
        return acc + Number(curr.tokenValue);
      }, 0);
      setBalance(balanceCalculated.toFixed(0));
    }
  };

  useEffect(() => {
    if (primaryWallet) {
      getBalanceFromDB();
    }
  }, [primaryWallet]);

  useEffect(() => {
    if (refetchBalance) {
      getBalanceFromDB();
      setRefetchBalance(false);
    }
  }, [refetchBalance]);

  return (
    <div className="bg-neutral-900 h-12">
      <div className="w-full h-full flex-center gap-2">
        <p className="text-sm font-semibold text-background/80">
          Your Balance :
        </p>
        <div className="text-base font-semibold text-background font-display flex gap-2 justify-center items-center">
          <p>{balance}</p>
          {/* <span className="text-[9px] font-bold text-custom-yellow ">
            <span>O100K</span>
          </span> */}

          {/* todo add logo */}
          <div className="w-9 h-9 rounded-full flex-center border border-neutral-700">
            <XanopayLogoX className="!w-auto !h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
