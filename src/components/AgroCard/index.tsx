import Image from "next/image";

type Props = {
  name: string;
  farmName: string;
  urlPhoto: string;
  addressScroll: string;
  addressMumbai: string;
  addressSepolia: string;
  addressAurora: string;
  onClick?: (props: Props) => void;
};

export function AgroCard(props: Props) {
  return (
    <div className="rounded-lg">
      <Image
        alt="perfil"
        width={255}
        height={255}
        src={props.urlPhoto}
        loading="lazy"
        draggable={false}
        className="object-cover"
      />
      <div className="p-[18px] font-semibold text-sm border border-white border-opacity-50">
        <h1>{props.name}</h1>
        <h1 className="text-lg mt-4">{props.farmName}</h1>
        <h1 className="opacity-50">Colheita de milho</h1>
      </div>
      <div
        onClick={() => props.onClick?.(props)}
        className="px-[18px] cursor-pointer py-3 border border-white border-opacity-50 rounded-b-lg"
      >
        <h1 className="opacity-50">Selecionar</h1>
      </div>
    </div>
  );
}
