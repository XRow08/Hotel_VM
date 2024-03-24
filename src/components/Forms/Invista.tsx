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
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<any>();

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
    setLoading(true);
    (document?.getElementById("invistaId") as any)?.showModal();
    const contracts = {
      scroll: card.addressScroll,
      aurora: card.addressAurora,
      sepolia: card.addressSepolia,
    };
    const tx = await invista(values.amount, user.walletAddress, contracts);
    setTx(tx);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center gap-6"
    >
      <dialog id="invistaId" className="modal z-50 w-full">
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
