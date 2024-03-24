"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useAccount } from "wagmi";
import {
  transferToEthers,
  transferToPolygon,
} from "@/functions";
import { useGetUser } from "@/hooks/getUser";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { transferToWalletEth } from "@/functions/transferToWalletEth";

export function TransferTokensToCred() {
  const { register } = useForm();
  const [amount, setAmount] = useState("0");
  const { chain } = useAccount();
  const { openChainModal } = useChainModal();
  const user = useGetUser();

  const validation = () => {
    if (chain?.name === "Sepolia" || chain?.name === "Mumbai") {
      transferToWalletEth(amount, "", chain.name.toLowerCase());
    } else {
      if (openChainModal) {
        openChainModal();
      }
    }
  };

  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form className="w-4/5 flex flex-col items-start gap-6">
      <input
        {...register("amount", { required: true })}
        placeholder="Quantidade de tokens"
        type="number"
        value={amount}
        onChange={({ currentTarget }) => setAmount(currentTarget.value)}
        className={style}
      />
      <Button children={"Enviar para Carteira Externa"} onClick={validation} />
      <Button
        children={"Enviar para Polygon"}
        onClick={() => transferToPolygon(amount, user.walletAddress)}
      />
      <Button
        children={"Enviar para Ethereum"}
        onClick={() => transferToEthers(amount, user.walletAddress)}
      />
    </form>
  );
}
