import { Pergunta } from "./Pergunta";

export function Perguntas() {
  const asks = [
    {
      title: "Qual é o horário de check-in e checkout?",
      desc: "O check-in começa às 14h e o checkout é até meio-dia. Se precisar de mais flexibilidade, fale conosco e faremos o possível para acomodá-lo.",
    },
    {
      title: "Como funcionam as políticas de cancelamento?",
      desc: "Você pode cancelar gratuitamente até 48 horas antes da sua chegada. Cancelamentos tardios ou no-shows serão cobrados conforme nossa política detalhada",
    },
    {
      title: "Existem opções de alimentação no local?",
      desc: "Oferecemos um delicioso buffet de café da manhã e nosso bar do lobby serve refeições leves e bebidas. Restaurantes locais e serviço de quarto também estão disponíveis",
    },
    {
      title: "O hotel é pet-friendly?",
      desc: "Sim, adoramos receber seus animais! Informe-se sobre nossa política de animais de estimação ao fazer sua reserva",
    },
    {
      title: "Que tipos de quartos estão disponíveis?",
      desc: "Temos uma variedade de quartos para atender às suas necessidades, desde quartos padrão confortáveis até suítes",
    },
    {
      title: "O hotel oferece Wi-Fi gratuito?",
      desc: "Sim, temos Wi-Fi de alta velocidade disponível gratuitamente em todo o hotel para que você possa permanecer conectado",
    },
    {
      title: "O hotel tem estacionamento?",
      desc: "Disponibilizamos estacionamento no local por uma pequena taxa diária. Espaços são limitados, então recomendamos reservar antecipadamente",
    },
  ];
  return (
    <div className="bg-gradient-to-b text-center from-[#1E0D45] text-gray-100 to-[#1D5E79] drop-shadow-[0px_15px_25px_rgba(0,0,0,.7)] py-6 flex flex-col items-center justify-center ">
      <div className="px-10">
        <h1 className="font-bold zilla text-[28px]">Perguntas Frequentes</h1>
        <h1 className="font-medium montserrat text-[16px]">
          Tire suas dúvidas rapidamente com nosso FAQ
        </h1>
      </div>
      <div className="flex flex-col items-center w-full h-full my-8">
        {asks.map((e, i) => (
          <Pergunta key={i} item={e} index={i} />
        ))}
      </div>
    </div>
  );
}
