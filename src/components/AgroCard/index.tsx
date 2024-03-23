import Image from "next/image";

type Props = {
  name: string;
  farmName: string;
  urlPhoto: string;
};

export function AgroCard({ name, farmName, urlPhoto }: Props) {
  return (
    <div className="rounded-lg">
      <Image
        alt="perfil"
        width={255}
        height={255}
        src={urlPhoto}
        loading="lazy"
        draggable={false}
        className="object-cover"
      />
      <div className="p-[18px] font-semibold text-sm border border-white border-opacity-50">
        <h1>{name}</h1>
        <h1 className="text-lg mt-4">{farmName}</h1>
        <h1 className="opacity-50">Colheita de milho</h1>
      </div>
      <div className="px-[18px] cursor-pointer py-3 border border-white border-opacity-50 rounded-b-lg">
        <h1 className="opacity-50">Selecionar</h1>
      </div>
    </div>
  );
}
