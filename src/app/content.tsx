"use client";

import { Wallet, WalletContextProvider } from "@lumx-protocol/embedded-wallet";
import config from "../../lumx.json";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Content = () => {
  const [isClient, setIsClient] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <WalletContextProvider
          clientId={config.clientId}
          isModal
          modalButton={{
            cta: "Conecte sua carteira",
            size: "small",
          }}
          lang="pt"
          colorScheme="black"
          environment={process.env.NEXT_PUBLIC_LUMX_ENV}
          onFinishAuth={(user) => {
            document.cookie = `walletId=${user.walletId}`;
            push("home");
          }}
          theme={undefined}
        >
          <main className="flex min-h-screen items-center bg-login bg-cover bg-no-repeat px-60 text-black">
            <div className="flex flex-col items-center pt-32 border-x border-white border-opacity-50 bg-white bg-opacity-10 w-[550px] min-h-screen">
              <Image
                alt="userImage"
                width={155.5}
                height={155.5}
                objectFit="cover"
                src={"/images/logo.png"}
                loading="lazy"
                draggable={false}
              />
              <div className="flex flex-col items-center text-center text-white my-24 gap-9 px-16">
                <h1 className="font-semibold text-4xl">
                  Olá, Bem-vindo de volta!
                </h1>
                <p className="font-medium text-white text-opacity-50">
                  Entre na Demether e explore um novo mundo de investimento
                  agrícola sustentável.
                </p>
                <Wallet />
              </div>

              <h1 className="font-medium text-white">
                Não tem uma conta?{" "}
                <span className="text-green-primary underline cursor-pointer">
                  Crie sua conta
                </span>
              </h1>
            </div>
          </main>
        </WalletContextProvider>
      )}
    </>
  );
};
