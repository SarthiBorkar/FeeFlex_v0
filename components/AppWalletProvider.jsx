"use client"

import React, { useMemo,useEffect} from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider,useWalletModal } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { TorusWalletAdapter,LedgerWalletAdapter } from '@solana/wallet-adapter-wallets';

require("@solana/wallet-adapter-react-ui/styles.css");

export default function AppWalletProvider({ children }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),

    ],
    [network],
  );
  const { visible } = useWalletModal(); 

  // Handle body overflow when the modal is open
  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [visible]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
