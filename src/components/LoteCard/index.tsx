import Image from "next/image";

type Props = {
  level: 1 | 2;
  loteName: "Lote 01" | "Lote 02" | "Lote 03" | "Lote 04";
};

export function LoteCard({ level, loteName }: Props) {
  return (
    <div className="rounded-lg">
      <Image
        alt="lote"
        width={250}
        height={250}
        src={level === 1 ? "/images/lote1.png" : "/images/lote2.png"}
        loading="lazy"
        draggable={false}
      />
      <div className="p-[18px] font-semibold text-sm border border-white border-opacity-50 rounded-b-lg">
        <h1>NFT Nível 0{level}</h1>
        <h1 className="text-lg mt-2">Fazenda Sol Nascente</h1>
        <h1 className="opacity-50">{loteName}</h1>
      </div>
    </div>
  );
}
