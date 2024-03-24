import { AgroCard } from "@/components/AgroCard";
import { AgrosInvista } from "@/components/AgrosInvista";
import { InvistaForm } from "@/components/Forms/Invista";
import { TransferExternalWallet } from "@/components/Forms/TransferExternalWallet";
import { TransferTokensTwo } from "@/components/Forms/TransferTokensTwo";
import Image from "next/image";

export default async function Invista() {
  return (
    <div className="min-h-screen bg-tokenize bg-center py-40 flex flex-col items-center justify-start px-60 text-white">
      <div className="w-[700px] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Image
            alt="userImage"
            width={16}
            height={16}
            src={"/images/icon.png"}
            loading="lazy"
            draggable={false}
          />
          Bem vindo, Investidor!
        </h1>
        <h1 className="font-semibold text-white text-5xl leading-tight">
          Invista na Safra escolhendo a camada que te atende!
        </h1>
      </div>

      <div className="w-[80%] flex flex-col mt-10 gap-4">
        <div className="flex gap-10 w-full justify-between">
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Milho
          </div>
          <div className="bg-white flex items-center opacity-50 justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Soja
          </div>
          <div className="bg-white flex items-center opacity-50 justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Cana de Açúcar
          </div>
        </div>
        <p className="opacity-50 text-center mt-4">
          Enquanto concentramos nossos esforços na safra de milho, estamos
          firmemente comprometidos em ampliar nosso escopo para abranger uma
          variedade de outras modalidades agrícolas no futuro próximo.
        </p>
      </div>
      <div className="w-[80%] flex justify-between mt-16 gap-10">
        <div className="w-full">
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Aurora
          </div>
          <p className="opacity-50 text-center mt-4">
            Blockchain de primeira camada com compensação de carbono. Mais
            sustentabilidade em sua tokenização de Safra.
          </p>
        </div>
        <div className="w-full">
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Scroll
          </div>
          <p className="opacity-50 text-center mt-4">
            Blockchain de segunda camada. Para agricultores e investidores para
            mais eficiência na tokenização sem perder a segurança.
          </p>
        </div>
      </div>

      <AgrosInvista />

      <div className="w-full flex items-start justify-between gap-40 py-10 pb-20 border-b-4 border-white border-opacity-10">
        <h1 className="font-semibold text-white text-4xl leading-tight w-full">
          Transfira seus tokens entre Polygon e Ethereum e ingresse no mundo dos
          investimentos de forma profissional.
        </h1>
        <TransferTokensTwo />
      </div>
      <div className="w-full flex items-center justify-center border-b-4 border-white border-opacity-10 pb-20">
        <div className="w-1/2 h-[470px] bg-[#98C73B] bg-opacity-5 rounded-lg border border-opacity-50 mt-20 p-10">
          <h1 className="font-semibold text-2xl text-center mb-10">
            Transfira seus tokens
          </h1>
          <TransferExternalWallet />
        </div>
      </div>
    </div>
  );
}
