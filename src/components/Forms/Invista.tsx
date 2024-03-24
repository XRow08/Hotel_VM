"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { apiLumx } from "@/app/actions";
import { useGetUser } from "@/hooks/getUser";

export function InvistaForm() {
  const { register, handleSubmit } = useForm();
  const user = useGetUser();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md h-[65px] flex items-center justify-start opacity-50 w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  async function onPolygon(values: any) {
    const payload = {
      walletId: user.walletId,
      contractId: "3c90c3cc-0d44-4b50-8888-8dd25736052a",
      operations: [
        {
          functionSignature: "burn",
          functionParams: [values.amount],
        },
      ],
    };
    console.log(payload);
    await apiLumx(payload);
  }

  return (
    <form
      onSubmit={handleSubmit(onPolygon)}
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
