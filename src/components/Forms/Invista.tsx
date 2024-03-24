"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { DN404Address } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "@/functions/executeFunctions";

export function InvistaForm() {
  const { register, handleSubmit } = useForm();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md h-[65px] flex items-center justify-start opacity-50 w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  async function getSupply() {
    const scrollRPC = process.env.NEXT_PUBLIC_SCROLL_RPC_URL!;

    const tx1 = await executeContractFunction(
      scrollRPC,
      Dn404__factory,
      DN404Address.scroll,
      "totalSupply",
      []
    );
    console.log("tx1", tx1);
  }

  return (
    <form
      onSubmit={handleSubmit(getSupply)}
      className="w-full flex justify-center items-center gap-6"
    >
      <div className="w-3/4 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          <div className={style} children={"Lotes disponíveis"} />
          <div className={style} children={"Total de lotes"} />
          <div className={style} children={"Lotes em circulação"} />
          <input
            {...register("amount", { required: true })}
            placeholder="Insira a quantidade"
            type="number"
            className={style}
          />
        </div>
        <Button type="submit" children={"Invista"} />
      </div>
    </form>
  );
}
