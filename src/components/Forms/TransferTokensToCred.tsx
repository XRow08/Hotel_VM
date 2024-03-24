"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useAccount } from "wagmi";
import { transferToEthers, transferToPolygon } from "@/functions";
import { useGetUser } from "@/hooks/getUser";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { transferToWalletEth } from "@/functions/transferToWalletEth";

export function TransferTokensToCred() {
  const { register } = useForm();
  const [amount, setAmount] = useState("0");
  const { chain, address } = useAccount();
  const { openChainModal } = useChainModal();
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<any>();
  const user = useGetUser();

  const validation = () => {
    setLoading(true);
    (document?.getElementById("transferTokensToCred") as any)?.showModal();
    setLoading(false);
    if (chain?.name === "Sepolia" || chain?.name === "Mumbai") {
      transferToWalletEth(amount, address!, chain.name.toLowerCase());
      setTx(tx);
    } else {
      if (openChainModal) {
        openChainModal();
      }
    }
  };

  async function toEthers() {
    setLoading(true);
    (document?.getElementById("transferTokensToCred") as any)?.showModal();
    const tx = await transferToEthers(amount, user.walletAddress);
    setTx(tx);
    setLoading(false);
  }

  async function toPolygon() {
    setLoading(true);
    (document?.getElementById("transferTokensToCred") as any)?.showModal();
    const tx = await transferToPolygon(amount, user.walletAddress);
    setTx(tx);
    setLoading(false);
  }

  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form className="w-4/5 flex flex-col items-start gap-6">
      <dialog id="transferTokensToCred" className="modal z-50 w-full">
        <div className="modal-box w-full">
          <h3 className="font-bold text-lg">
            {loading
              ? "Aguarde a transação..."
              : "Transação realizada com sucesso!"}
          </h3>
          {tx && !loading && (
            <p className="py-4 opacity-50 break-words">{tx?.hash}</p>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <input
        {...register("amount", { required: true })}
        placeholder="Quantidade de tokens"
        type="number"
        value={amount}
        onChange={({ currentTarget }) => setAmount(currentTarget.value)}
        className={style}
      />
      <Button children={"Enviar para Carteira Externa"} onClick={validation} />
      <Button children={"Enviar para Polygon"} onClick={toPolygon} />
      <Button children={"Enviar para Ethereum"} onClick={toEthers} />
    </form>
  );
}
