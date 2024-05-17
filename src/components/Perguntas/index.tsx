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
      desc: "Sim, no Hotel Van Monet temos opções de alimentação disponíveis no local. Nossos hóspedes podem desfrutar do nosso buffet de café da manhã todas as manhãs, e também oferecemos um PDV de conveniência na recepção, onde você pode encontrar uma variedade de bebidas, lanches e outros itens para sua conveniência. Além disso, em determinados horários, nosso bar no saguão oferece drinks e porções para os hóspedes relaxarem e aproveitarem a estadia.",
    },
    {
      title: "O hotel é pet-friendly?",
      desc: "Sim, adoramos receber seus animais! Informe-se sobre nossa política de animais de estimação ao fazer sua reserva",
    },
    {
      title: "Que tipos de quartos estão disponíveis?",
      desc: "No Hotel Van Monet, oferecemos uma variedade de tipos de quartos para atender às necessidades de nossos hóspedes. Nossas opções incluem quartos Padrão e Simples, cada um com suas próprias características e comodidades. Os quartos Padrão são espaçosos e confortáveis, com camas de casal e solteiro, ar-condicionado, televisão e banheiro privativo. Já os quartos Simples oferecem uma opção mais econômica, com camas de casal ou solteiro e todas as comodidades essenciais para uma estadia agradável. Independentemente do tipo de quarto escolhido, garantimos conforto e qualidade em todas as nossas acomodações.",
    },
    {
      title: "O hotel oferece Wi-Fi gratuito?",
      desc: "Sim, temos Wi-Fi de alta velocidade disponível gratuitamente em todo o hotel para que você possa permanecer conectado",
    },
    {
      title: "O hotel tem estacionamento?",
      desc: "O Hotel Van Monet não possui estacionamento próprio. No entanto, os hóspedes podem estacionar seus veículos nas vagas públicas disponíveis na Praça da Bandeira, em frente ao hotel. Essas vagas oferecem uma opção conveniente para estacionamento durante a estadia. Se precisar de mais alguma informação sobre estacionamento ou outras comodidades, não hesite em nos contatar.",
    },
  ];
  return (
    <div className="bg-gradient-to-b text-center from-[#1E0D45] text-gray-100 to-[#1D5E79] drop-shadow-[0px_15px_25px_rgba(0,0,0,.7)] py-6 flex flex-col items-center justify-center ">
      <div className="px-10">
        <h1 className="font-bold zilla text-[28px] lg:text-[52px]">Perguntas Frequentes</h1>
        <h1 className="font-medium montserrat text-[16px] lg:text-[24px] lg:font-normal">
          Tire suas dúvidas rapidamente com nosso FAQ
        </h1>
      </div>
      <div className="flex flex-col items-center w-full h-full my-8 lg:w-3/5">
        {asks.map((e, i) => (
          <Pergunta key={i} item={e} index={i} />
        ))}
      </div>
    </div>
  );
}
