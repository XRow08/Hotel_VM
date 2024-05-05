"use client";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import * as viemChains from "viem/chains";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider } from "@farcaster/auth-kit";
import { JsonRpcProvider } from "ethers";

export default function WagmiProv({ children }: PropsWithChildren) {
  const config = getDefaultConfig({
    appName: "Demether",
    projectId: "4ebbf2eddb8738c4c84cd8082b5e9756",
    chains: [viemChains.sepolia],
    ssr: true,
  });

  const configFarcaster = {
    rpcUrl: "https://spicy-rpc.chiliz.com/",
    domain: "moonx-pulse.netlify.app",
    siweUri: "https://moonx-pulse.netlify.app",
  };

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <AuthKitProvider config={configFarcaster}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider coolMode showRecentTransactions={true}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </AuthKitProvider>
    </WagmiProvider>
  );
}
