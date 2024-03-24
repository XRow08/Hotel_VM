import { TokenizeForm } from "@/components/Forms/Tokenize";
import { TransferTokensToCred } from "@/components/Forms/TransferTokensToCred";
import { TokenizeIcon } from "@/components/Icons/tokenizeIcon";
import { LoteCard } from "@/components/LoteCard";
import Image from "next/image";

export default async function Tokenize() {
  return (
    <div className="min-h-screen bg-tokenize bg-center bg-no-repeat pt-40 flex flex-col items-center justify-start px-60 text-white">
      <div className="w-full flex justify-between border-b-4 border-white border-opacity-10 pb-10 gap-40">
        <div className="flex flex-col items-start gap-8 w-full">
          <h1 className="flex items-center gap-2 text-2xl font-semibold">
            <Image
              alt="userImage"
              width={16}
              height={16}
              src={"/images/icon.png"}
              loading="lazy"
              draggable={false}
            />
            Bem vindo, Agricultor!
          </h1>
          <h1 className="font-semibold text-white text-5xl leading-tight">
            Tokenize sua Safra para Maximizar Resultados!
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start gap-4">
              <TokenizeIcon />
              <h1 className="text-lg font-semibold">Sustentabilidade</h1>
              <p className="font-medium opacity-50">
                Com a nossa abordagem, você contribui para um planeta mais
                verde, limpo e próspero.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <TokenizeIcon />
              <h1 className="text-lg font-semibold">Retorno</h1>
              <p className="font-medium opacity-50">
                Oferecemos crédito para os agricultores reinvestirem no solo,
                garantindo safras futuras ainda mais produtivas.
              </p>
            </div>
          </div>
        </div>
        <TokenizeForm />
      </div>

      <div className="w-full flex items-start justify-between gap-40 py-10 border-b-4 border-white border-opacity-10">
        <h1 className="font-semibold text-white text-4xl leading-tight w-full">
          Transfira seus Tokens da Reserva e transforme-os em Crédito em
          Circulação.
        </h1>
        <TransferTokensToCred />
      </div>

      <div className="bg-white bg-opacity-10 backdrop-blur-md w-full p-16 my-10 rounded-lg border border-white border-opacity-50">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Suas Safras</h1>
          <h1 className="font-semibold text-3xl">Fazenda Sol Nascente</h1>
        </div>
        <div className="flex items-center mt-8 justify-between w-full">
          <LoteCard level={1} loteName="Lote 01" />
          <LoteCard level={1} loteName="Lote 02" />
          <LoteCard level={2} loteName="Lote 03" />
          <LoteCard level={2} loteName="Lote 04" />
        </div>
      </div>
      <button disabled className="w-full rounded-lg h-[65px] font-semibold text-lg text-[#0B3534] bg-green-primary">
        Crédito disponível: $100.000,00
      </button>
      <div className="py-20 mb-10 gap-40 flex justify-between border-b-4 border-white border-opacity-10">
        <div className="w-full">
          <h1 className="font-semibold text-4xl leading-tight">
            Converta seu crédito em vantagens para potencializar suas safras!
          </h1>
          <p className="font-medium opacity-50 mt-8">
            Em breve, estaremos lançando diversas possibilidades para a troca de
            todo crédito adquirido com a captação da tokenização da sua safra.
            <br />
            <br />
            Essa é uma oportunidade única para você, agricultor, que acredita no
            poder da inovação e da sustentabilidade. Com a nossa plataforma,
            você poderá reinvestir os créditos adquiridos de maneira inteligente
            e estratégica, potencializando ainda mais os seus rendimentos.
          </p>
        </div>
        <div className="flex flex-col gap-6 justify-between w-3/4">
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Assistência
          </div>
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Ciência
          </div>
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Fertilizantes
          </div>
          <div className="bg-white flex items-center justify-center bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50 text-white text-opacity-50">
            Serviços
          </div>
        </div>
      </div>
    </div>
  );
}
