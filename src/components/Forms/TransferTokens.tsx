"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

export function TransferTokens() {
  const { register, handleSubmit } = useForm();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="w-4/5 flex flex-col items-start gap-6"
    >
      <input
        {...register("amount", { required: true })}
        placeholder="Quantidade de tokens"
        type="number"
        className={style}
      />
      <Button type="submit" children={"Tokenize sua Safra"} />
    </form>
  );
}
