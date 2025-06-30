'use client';
import React, { use, useContext, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Loader } from 'lucide-react';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';

const ConnectButton = () => {
  const { setShowAuthFlow, setAuthMode, sdkHasLoaded } = useDynamicContext();
  const isConnected = useIsLoggedIn();

  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  return (
    <div>
      {!isConnected && (
        <Button
          onClick={() => setShowAuthFlow(true)}
          className="rounded-none w-full bg-accent hover:bg-accent/80 text-background font-display tracking-wider disabled:bg-border text-sm uppercase font-medium "
          size={'lg'}
          disabled={!sdkHasLoaded}
        >
          {btnLoading ? (
            <Loader className="w-5 h-5 animate-spin text-background " />
          ) : (
            'Connect Wallet'
          )}
        </Button>
      )}
    </div>
  );
};

export default ConnectButton;
