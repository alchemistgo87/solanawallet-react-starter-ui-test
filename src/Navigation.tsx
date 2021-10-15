import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import React, { FC, useCallback } from "react";

const Navigation: FC = () => {
  const { wallet } = useWallet();
  // const { connection } = useConnection();
  // const { publicKey, sendTransaction } = useWallet();

  // const onClick = useCallback(async () => {
  //   if (!publicKey) throw new WalletNotConnectedError();
  //   const transaction = new Transaction().add(
  //     SystemProgram.transfer({
  //       fromPubkey: publicKey,
  //       toPubkey: Keypair.generate().publicKey,
  //       lamports: 1,
  //     })
  //   );
  //   const signature = await sendTransaction(transaction, connection);
  //   await connection.confirmTransaction(signature, "processed");
  // }, [publicKey, sendTransaction, connection]);

  return (
    <nav>
      <h1>Solana Starter App</h1>
      <div>
        <WalletMultiButton />
        {wallet && <WalletDisconnectButton />}
        {/* <button onClick={onClick} disabled={!publicKey}>
          Send 1 lamport to a random address!
        </button> */}
      </div>
    </nav>
  );
};

export default Navigation;
