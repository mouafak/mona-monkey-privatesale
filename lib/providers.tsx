'use client';

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const environmentId =
    process.env.NODE_ENV == 'development'
      ? '32530626-2529-48f0-88c5-a0aa35afdb0c'
      : '0a193511-09f3-4fc2-a97a-c0aa81c5fa29';
  return (
    <DynamicContextProvider
      theme={'dark'}
      settings={{
        environmentId,
        walletConnectors: [SolanaWalletConnectors],
        initialAuthenticationMode: 'connect-only',
        // mobileExperience: "in-app-browser",
        recommendedWallets: [
          { walletKey: 'phantom' },
          // { walletKey: "okxsolana" },
          { walletKey: 'solflare' },
          // { walletKey: "glow" },
          // { walletKey: "magicedensol" },
        ],
      }}
    >
      {/* @ts-ignore */}
      {children}
    </DynamicContextProvider>
  );
};
export default Providers;
