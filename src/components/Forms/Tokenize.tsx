"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

export function TokenizeForm() {
  const { register, handleSubmit } = useForm();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="w-full flex flex-col items-start gap-6"
    >
      <h1 className="text-2xl font-semibold">
        Preencha as informações da sua Safra:
      </h1>
      <input
        {...register("Name", { required: true })}
        placeholder="Nome"
        className={style}
      />
      <input
        {...register("symbol", { required: true })}
        placeholder="Símbolo (Máx. 03 caracteres)"
        className={style}
      />
      <input
        {...register("lotes", { required: true })}
        placeholder="Total de lotes"
        type="number"
        className={style}
      />
      <Button type="submit" children={"Tokenize sua Safra"} />
    </form>
  );
}
