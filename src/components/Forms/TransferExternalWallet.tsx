"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { transferToWallet } from "@/functions";
import { useEnsAddress } from "wagmi";
import { useState } from "react";

export function TransferExternalWallet() {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<any>();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  const { data } = useEnsAddress({ name: address });

  async function onSubmit(values: any) {
    setLoading(true);
    (document?.getElementById("transferId") as any)?.showModal();
    const wallet = data ? data : address;
    const tx = await transferToWallet(values.amount, wallet);
    setTx(tx);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start gap-2"
    >
      <dialog id="transferId" className="modal z-50 w-full">
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

      <div className="w-full flex flex-col gap-6">
        <input
          {...register("amount", { required: true })}
          placeholder="Quantidade de tokens"
          type="number"
          className={style}
        />
        <input
          {...register("address", { required: true })}
          placeholder="Insira o Endereço de destino"
          type="text"
          value={address}
          onChange={({ currentTarget }) => setAddress(currentTarget.value)}
          className={style}
        />
      </div>
      <p className="text-xs opacity-50 mb-10">
        ENS e transferência somente na rede Ethereum
      </p>
      <Button
        disabled={address.length === 0}
        children={"Transferir"}
        type="submit"
      />
    </form>
  );
}
