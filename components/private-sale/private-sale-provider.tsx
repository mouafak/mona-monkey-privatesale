'use client';
import React, { FC, PropsWithChildren, useState } from 'react';
import PrivateSaleContext from './context/private-sale-context';

const PrivateSaleProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [solValue, setSolValue] = useState('1');
  const [tokenValue, setTokenValue] = useState('0');
  const [yourBalance, setYourBalance] = useState('0');
  const [zodError, setZodError] = useState(false);
  const [refetchBalance, setRefetchBalance] = useState(false);
  // const [piWalletAddress, setPiWalletAddress] = useState('');
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
  const [canRequestAffiliateCode, setCanRequestAffiliateCode] = useState(false);
  return (
    <PrivateSaleContext.Provider
      value={{
        solValue,
        setSolValue,
        tokenValue,
        setTokenValue,
        yourBalance,
        setYourBalance,
        zodError,
        setZodError,
        refetchBalance,
        setRefetchBalance,
        // piWalletAddress,
        // setPiWalletAddress,
        affiliateCode,
        setAffiliateCode,
        canRequestAffiliateCode,
        setCanRequestAffiliateCode,
      }}
    >
      {children}
    </PrivateSaleContext.Provider>
  );
};

export default PrivateSaleProvider;
