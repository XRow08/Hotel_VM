"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { onTransferToWallet } from "@/functions";
import { useGetUser } from "@/hooks/getUser";

export function TransferExternalWallet() {
  const { register, handleSubmit } = useForm();
  const user = useGetUser();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  async function onSubmit(values: any) {
    await onTransferToWallet(values.amount, values.address, user);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start gap-6"
    >
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
        className={style}
      />

      <Button children={"Transferir"} type="submit" />
    </form>
  );
}
