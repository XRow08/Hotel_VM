"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useAccount } from "wagmi";
import { tokenize } from "@/functions/tokenize";
import { useState } from "react";

export function TokenizeForm() {
  const { register, handleSubmit } = useForm();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<any>();

  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  async function onSubmit(values: any) {
    setLoading(true);
    (document?.getElementById("tokenizeId") as any)?.showModal();
    const tx = await tokenize(values.amount, address!);
    setTx(tx);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start gap-6"
    >
      <dialog id="tokenizeId" className="modal z-50 w-full">
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
      <h1 className="text-2xl font-semibold">
        Preencha as informações da sua Safra:
      </h1>
      <input
        {...register("name", { required: true })}
        placeholder="Nome"
        className={style}
      />
      <input
        {...register("symbol", { required: true })}
        placeholder="Símbolo (Máx. 03 caracteres)"
        className={style}
      />
      <input
        {...register("amount", { required: true })}
        placeholder="Total de lotes"
        type="number"
        className={style}
      />
      <Button type="submit" children={"Tokenize sua Safra"} />
    </form>
  );
}
