"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";

export function TransferTokensToCred() {
  const { register } = useForm();
  const [amount, setAmount] = useState("0");
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
      <Button children={"Enviar para Carteira Externa"} />
      <Button children={"Enviar para Polygon"} />
      <Button children={"Enviar para Ethereum"} />
    </form>
  );
}
