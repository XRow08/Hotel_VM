"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { transferToWallet } from "@/functions";
import { useEnsAddress } from "wagmi";
import { useState } from "react";

export function TransferExternalWallet() {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState("");
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  const { data } = useEnsAddress({ name: address });

  async function onSubmit(values: any) {
    const wallet = data ? data : address;
    await transferToWallet(values.amount, wallet);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start gap-2"
    >
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
      <p className="text-xs opacity-50 mb-10">ENS e transferência somente na rede Ethereum</p>
      <Button
        disabled={address.length === 0}
        children={"Transferir"}
        type="submit"
      />
    </form>
  );
}
