import { AgroCard } from "@/components/AgroCard";
import { Button } from "@/components/Button";
import { InvistaForm } from "@/components/Forms/Invista";
import { TransferTokens } from "@/components/Forms/TransferTokens";
import { TransferTokensTwo } from "@/components/Forms/TransferTokensTwo";
import Image from "next/image";
import Link from "next/link";

export default async function Invista() {
  return (
    <div className="min-h-screen bg-tokenize bg-center bg-no-repeat py-40 flex flex-col items-center justify-start px-60 text-white">
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
      <div className="w-[80%] flex justify-between mt-16 gap-10">
        <div className="w-full">
          <div className="bg-white cursor-pointer flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Layer 1
          </div>
          <p className="opacity-50 text-center mt-4">
            Blockchain de primeira camada. Ideal para investidores
            institucionais e empresas de grande porte.
          </p>
        </div>
        <div className="w-full">
          <div className="bg-white cursor-pointer flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Layer 2
          </div>
          <p className="opacity-50 text-center mt-4">
            Blockchain de segunda camada. Ideal para investidores individuais de
            menor porte, que buscam minimizar os custos com taxas.
          </p>
        </div>
      </div>
      <div className="w-[80%] flex flex-col mt-10 gap-4">
        <div className="flex gap-10 w-full justify-between">
          <div className="bg-white flex items-center cursor-pointer justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
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

      <div className="w-full my-10 pb-20 border-b-4 border-white border-opacity-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Selecione o Agricultor:</h1>
          <h1 className="font-semibold text-3xl w-3/4">
            Nossa equipe seleciona minuciosamente cada fazenda e agricultor para
            garantir que você tenha a confiança e a credibilidade necessárias
            para fazer o seu investimento.
          </h1>
        </div>

        <div className="flex justify-between w-full my-10 mb-20">
          <AgroCard
            name={"Francisco Rocha"}
            farmName={"Fazenda Sol Nascente"}
            urlPhoto={"/images/veio1.png"}
          />
          <AgroCard
            name={"Júlio Oliveira"}
            farmName={"Sítio Recanto da Serra"}
            urlPhoto={"/images/veio2.png"}
          />
          <AgroCard
            name={"Antônio Bragança"}
            farmName={"Fazenda Rio Manso"}
            urlPhoto={"/images/veio3.png"}
          />
          <AgroCard
            name={"Natanael Lopes"}
            farmName={"Sítio Estrela Verde"}
            urlPhoto={"/images/veio4.png"}
          />
          <AgroCard
            name={"Bernardo Aragão"}
            farmName={"Sítio Terra Nova"}
            urlPhoto={"/images/veio5.png"}
          />
        </div>
        <InvistaForm />
      </div>
      <div className="w-full flex items-center justify-between gap-40 py-10 pb-20 border-b-4 border-white border-opacity-10">
        <h1 className="font-semibold text-white text-4xl leading-tight w-full">
          Transfira seus tokens da L2 para L1 e ingresse no mundo dos
          investimentos de forma profissional.
        </h1>
        <TransferTokensTwo />
      </div>
    </div>
  );
}
