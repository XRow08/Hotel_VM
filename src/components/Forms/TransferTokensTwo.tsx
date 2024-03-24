"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { ethersAndPolygon } from "@/functions/ethersAndPolygon";
import { useGetUser } from "@/hooks/getUser";

export function TransferTokensTwo() {
  const { register } = useForm();
  const [amount, setAmount] = useState("0");
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<any>();
  const user = useGetUser();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  async function onSubmit(chain: string) {
    setLoading(true);
    (document?.getElementById("transferTokensTwo") as any)?.showModal();
    const tx = await ethersAndPolygon(amount, user.walletAddress!, chain);
    setTx(tx);
    setLoading(false);
  }

  return (
    <form className="w-full flex flex-col items-start gap-6">
      <dialog id="transferTokensTwo" className="modal z-50 w-full">
        <div className="modal-box w-full">
          <h3 className="font-bold text-lg">
            {loading
              ? "Aguarde a transação..."
              : "Transação realizada com sucesso!"}
          </h3>
          {tx && <p className="py-4 opacity-50 break-words">{tx?.hash}</p>}
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
      <Button
        children={"Enviar para Polygon"}
        onClick={() => onSubmit("mumbai")}
      />
      <Button
        children={"Enviar para Ethereum"}
        onClick={() => onSubmit("sepolia")}
      />
    </form>
  );
}
