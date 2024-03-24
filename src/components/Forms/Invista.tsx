"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { getSupply } from "@/functions/getSupplys";
import { invista } from "@/functions/invista";
import { useGetUser } from "@/hooks/getUser";

type CardProps = {
  name: string;
  farmName: string;
  urlPhoto: string;
  addressScroll: string;
  addressMumbai: string;
  addressSepolia: string;
  addressAurora: string;
  onClick?: (props: CardProps) => void;
};

type SupplyProps = {
  scrollSupply: number;
  circulationLotes: number;
  total: number;
};

export function InvistaForm(card: CardProps) {
  const { register, handleSubmit } = useForm();
  const [supply, setSupply] = useState<SupplyProps>();
  const user = useGetUser();
  const style = `bg-white bg-opacity-10 backdrop-blur-md h-[65px] flex items-center justify-start ${
    supply ? "opacity-100" : "opacity-50"
  } w-full px-6 p-4 rounded-lg border border-white border-opacity-50`;

  useEffect(() => {
    async function supplys() {
      const all = await getSupply(card);
      setSupply(all);
    }
    supplys();
  }, [card]);

  async function onSubmit(values: any) {
    const contracts = {
      scroll: card.addressScroll,
      aurora: card.addressAurora,
      sepolia: card.addressSepolia,
    };
    await invista(values.amount, user.walletAddress, contracts);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center gap-6"
    >
      <div className="w-3/4 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          <div
            className={style}
            children={supply ? supply.scrollSupply : "Lotes disponíveis"}
          />
          <div
            className={style}
            children={supply ? supply.total : "Total de lotes"}
          />
          <div
            className={style}
            children={supply ? supply.circulationLotes : "Lotes em circulação"}
          />
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
