"use client";
import { Card } from "@/components/Card";
import { CardTriple } from "@/components/Card/CardTriple";
import { Coments } from "@/components/Card/Coments";
import { FloatBar } from "@/components/FloatBar";
import { Float2 } from "@/components/FloatBar/Float2";
import { AlldayIcon } from "@/components/Icons/AlldayIcon";
import { AnimalFriendlyIcon } from "@/components/Icons/AnimalFriendlyIcon";
import { NoCigareteIcon } from "@/components/Icons/NoCigareteIcon";
import { WifiIcon } from "@/components/Icons/WifiIcon";
import { Perguntas } from "@/components/Perguntas";
import { WhatsApp } from "@/components/WhatsApp";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white min-h-screen relative">
      <WhatsApp />
      <div className="bg-gradient-to-b from-[#1E0D45] to-[#1D5E79] drop-shadow-[0px_15px_25px_rgba(0,0,0,.7)] h-[95vh] flex flex-col items-center justify-center px-4">
        <Image
          alt="logo"
          width={500}
          height={500}
          src={"/images/logo_white.png"}
          loading="lazy"
          draggable={false}
          className="object-cover w-2/4"
        />
        <div className="relative mt-10 z-10">
          <div className="absolute top-14 text-white text-center">
            <h1 className="font-bold zilla text-[28px]">
              Descubra o Conforto e a Conveniência no Coração de Miracatu
            </h1>
            <h1 className="montserrat font-medium">
              Elegância e conforto em um só lugar
            </h1>
          </div>
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={"/images/home.png"}
            loading="lazy"
            draggable={false}
            className="object-cover"
          />
        </div>

        <FloatBar />
      </div>
      <Float2 scrollPosition={scrollPosition} />
      <section className="min-h-screen flex flex-col text-black pt-14">
        <div className="px-4 text-center">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[30px] w-[250px]">
              Apartamento Amplo com 16m2
            </h1>
          </div>

          <h1 className="montserrat font-medium text-gray-600">
            Os quartos da linha Padrão no Hotel Van Monet são projetados para
            proporcionar uma experiência de hospedagem confortável e espaçosa.
            Com uma área generosa, cada quarto oferece espaço suficiente para os
            hóspedes se movimentarem livremente e desfrutarem de um ambiente
            amplo e acolhedor
          </h1>
        </div>
        <Card urlImg={"/images/quarto.png"} urlImg2={"/images/quarto3D.png"} />
        <div className="flex items-center justify-center gap-6 mt-8">
          <AlldayIcon />
          <AnimalFriendlyIcon />
          <WifiIcon />
          <NoCigareteIcon />
        </div>
        <Card
          urlImg={"/images/banheiro.png"}
          urlImg2={"/images/banheiro.png"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Banheiro Privativo</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Cada quarto da linha Padrão está equipado com um banheiro privativo,
            garantindo privacidade e conveniência. O chuveiro elétrico
            proporciona uma experiência de banho confortável e relaxante, com
            temperatura controlável para se adequar às suas preferências. Além
            disso, o banheiro é abastecido com toalhas higienizadas e amenidades
            essenciais, como sachês de shampoo e sabonete, mantendo tudo que
            você precisa ao alcance para um começo de dia revigorante ou um
            relaxante fim de noite
          </h1>
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            className="mt-2"
          >
            <path
              d="M16.0788 9.92105V12.4474C16.0788 13.3407 15.7239 14.1975 15.0922 14.8292C14.4605 15.4609 13.6037 15.8158 12.7104 15.8158H4.28932C3.39596 15.8158 2.53919 15.4609 1.90749 14.8292C1.27578 14.1975 0.920898 13.3407 0.920898 12.4474V10.4263C0.920898 10.2923 0.974131 10.1638 1.06889 10.069C1.16364 9.97429 1.29216 9.92105 1.42616 9.92105H16.0788Z"
              fill="#232329"
            />
            <path
              d="M11.363 5.71053H5.63669C5.35795 5.71053 5.13479 5.48484 5.16511 5.20695C5.28806 4.08947 5.85816 1.5 8.49985 1.5C11.1415 1.5 11.7116 4.08947 11.8346 5.20695C11.8649 5.48484 11.6417 5.71053 11.363 5.71053Z"
              fill="#232329"
            />
            <path
              d="M16.0788 9.92105V12.4474C16.0788 13.3407 15.7239 14.1975 15.0922 14.8292C14.4605 15.4609 13.6037 15.8158 12.7104 15.8158H4.28932C3.39596 15.8158 2.53919 15.4609 1.90749 14.8292C1.27578 14.1975 0.920898 13.3407 0.920898 12.4474V10.4263C0.920898 10.2923 0.974131 10.1638 1.06889 10.069C1.16364 9.97429 1.29216 9.92105 1.42616 9.92105H16.0788ZM16.0788 9.92105V4.86842C16.0788 3.97506 15.7239 3.11829 15.0922 2.48659C14.4605 1.85489 13.6037 1.5 12.7104 1.5H8.49985M11.8683 15.8158L12.7104 17.5M5.13142 15.8158L4.28932 17.5M8.49985 1.5C5.85816 1.5 5.28806 4.08947 5.16511 5.20695C5.13479 5.48484 5.35795 5.71053 5.63669 5.71053H11.363C11.6417 5.71053 11.8649 5.48484 11.8346 5.20695C11.7116 4.08947 11.1415 1.5 8.49985 1.5Z"
              stroke="#232329"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card
          urlImg={"/images/colchao_mola.png"}
          urlImg2={"/images/camas.jpg"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">
              Colchoes de Mola Ensaca
            </h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Nos quartos da linha Padrão do Hotel Van Monet, oferecemos camas
            tipo box com colchões de mola ensacada. Esses colchões proporcionam
            suporte individualizado, ajustando-se ao contorno do corpo para um
            sono tranquilo e restaurador. As molas ensacadas reduzem a
            transferência de movimento, tornando-as ideais para casais, e
            promovem uma ventilação adequada, mantendo o colchão fresco e
            confortável durante a noite
          </h1>
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4904 7.04545V1.22727C18.4904 1.03439 18.4138 0.849404 18.2776 0.713013C18.1414 0.576623 17.9566 0.5 17.764 0.5H3.23614C3.04348 0.5 2.85872 0.576623 2.7225 0.713013C2.58627 0.849404 2.50974 1.03439 2.50974 1.22727V7.04545C1.93179 7.04545 1.37751 7.27532 0.968832 7.68449C0.560158 8.09366 0.330566 8.64862 0.330566 9.22727V16.5H1.96495V15.0455H19.0352V16.5H20.6695V9.22727C20.6695 8.64862 20.44 8.09366 20.0313 7.68449C19.6226 7.27532 19.0683 7.04545 18.4904 7.04545ZM9.77366 7.04545H4.32572V5.59091C4.32572 5.39802 4.40225 5.21304 4.53848 5.07665C4.6747 4.94026 4.85946 4.86364 5.05212 4.86364H9.04727C9.23992 4.86364 9.42468 4.94026 9.56091 5.07665C9.69713 5.21304 9.77366 5.39802 9.77366 5.59091V7.04545ZM11.2264 5.59091C11.2264 5.39802 11.303 5.21304 11.4392 5.07665C11.5754 4.94026 11.7602 4.86364 11.9528 4.86364H15.948C16.1406 4.86364 16.3254 4.94026 16.4616 5.07665C16.5979 5.21304 16.6744 5.39802 16.6744 5.59091V7.04545H11.2264V5.59091Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <CardTriple
          urlImg={"/images/cama.png"}
          urlImg2={"/images/fios_misto.png"}
          urlImg3={"/images/coberta.png"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Roupas de Cama</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Priorizamos o conforto e a durabilidade nas roupas de cama da linha
            Padrão do Hotel Van Monet. Utilizamos lençóis e fronhas de 200 fios,
            que oferecem um equilíbrio ideal entre resistência e maciez. Esta
            contagem de fios é escolhida para garantir uma textura confortável
            ao toque, ao mesmo tempo que proporciona uma ventilação adequada
            durante o sono
          </h1>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.28522 2.96856L2.92429 4.33093L3.95046 5.36271C3.9552 5.36686 3.95965 5.37101 3.96409 5.37546C4.06629 5.47774 4.06629 5.64319 3.96409 5.74518L2.92518 6.78526L4.13147 7.99256C4.23367 8.09485 4.23367 8.26029 4.13147 8.36228L2.92518 9.56958L4.13147 10.7772C4.23367 10.8792 4.23367 11.0446 4.13147 11.1469L2.92518 12.3542L4.13147 13.5615C4.23367 13.6638 4.23367 13.8292 4.13147 13.9312L2.92518 15.1388L4.28522 16.5L5.49151 15.2924C5.59371 15.1904 5.75901 15.1904 5.86092 15.2924L7.06751 16.5L8.2738 15.2924C8.37571 15.1904 8.5413 15.1904 8.64321 15.2924L9.8495 16.5L11.0558 15.2924C11.158 15.1904 11.3233 15.1904 11.4255 15.2924L12.6318 16.5L13.6707 15.4599C13.7729 15.3579 13.9382 15.3579 14.0401 15.4599L15.0793 16.5L16.4394 15.1388L15.4002 14.0987H15.4005C15.308 14.0065 15.2974 13.8577 15.3797 13.7524L16.4604 12.3753L15.2328 11.1469C15.1309 11.0446 15.1309 10.8792 15.2328 10.7772L16.4394 9.56958L15.2328 8.36228C15.1309 8.26029 15.1309 8.09485 15.2328 7.99256L16.4403 6.78437L15.4031 5.74132C15.3021 5.63992 15.3021 5.47537 15.4031 5.37368L16.4403 4.33093L15.0793 2.96856L14.0401 4.00864C13.9382 4.11064 13.7729 4.11064 13.6707 4.00864L12.6318 2.96856L11.4255 4.17616C11.3233 4.27815 11.158 4.27815 11.0558 4.17616L9.8495 2.96856L8.64321 4.17616C8.5413 4.27815 8.37571 4.27815 8.2738 4.17616L7.04647 2.94781L5.68347 4.02376C5.58068 4.1133 5.42485 4.10945 5.32709 4.01161L4.28522 2.96856Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.37091 4.14503L4.10036 2.41413C4.20257 2.31184 4.36787 2.31184 4.46977 2.41413L5.53269 3.47763L6.90606 2.39367C7.01122 2.31095 7.15994 2.32192 7.25177 2.41443L7.25207 2.41413L8.45836 3.62143L9.66495 2.41413C9.76685 2.31184 9.93215 2.31184 10.0344 2.41413L11.2406 3.62143L12.4469 2.41413C12.5491 2.31184 12.7144 2.31184 12.8164 2.41413L13.1727 2.77051L14.0555 1.88282L12.6946 0.520754L11.6554 1.56084C11.5535 1.66283 11.3882 1.66283 11.286 1.56084L10.2471 0.520754L9.04077 1.72806C8.93856 1.83034 8.77326 1.83034 8.67106 1.72806L7.46477 0.520754L6.25848 1.72806C6.15657 1.83034 5.99097 1.83034 5.88906 1.72806L4.66174 0.5L3.29874 1.57596C3.19594 1.6655 3.04012 1.66135 2.94236 1.5635L1.90048 0.520754L0.539551 1.88282L1.56573 2.9149C1.57047 2.91905 1.57491 2.9232 1.57936 2.92765C1.68156 3.02964 1.68156 3.19538 1.57936 3.29737L0.54044 4.33745L1.74673 5.54475C1.84893 5.64674 1.84893 5.81248 1.74673 5.91447L0.54044 7.12177L1.74673 8.32907C1.84893 8.43136 1.84893 8.5968 1.74673 8.69879L0.54044 9.90639L1.74673 11.1137C1.84893 11.2157 1.84893 11.3814 1.74673 11.4834L0.54044 12.6907L1.90048 14.0519L2.8914 13.0601L2.37091 12.5392C2.269 12.4369 2.269 12.2715 2.37091 12.1695L3.5772 10.9619L2.37091 9.75459C2.269 9.6526 2.269 9.48686 2.37091 9.38487L3.5772 8.17757L2.37091 6.96997C2.269 6.86798 2.269 6.70254 2.37091 6.60025L3.41101 5.55958L2.37091 4.51386C2.2696 4.41187 2.26989 4.24702 2.3715 4.14562L2.37091 4.14503Z"
              fill="black"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card
          urlImg={"/images/arcondicionado.png"}
          urlImg2={"/images/arcondicionado2.png"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">
              Ambiente climatizado
            </h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            No Hotel Van Monet, cada quarto da linha Padrão é equipado com
            ar-condicionado tipo split, reconhecido por sua eficiência
            energética e operação silenciosa. Esses sistemas proporcionam um
            controle preciso da temperatura, permitindo aos hóspedes ajustar o
            clima de seus quartos para atender às suas preferências pessoais,
            garantindo conforto em todas as estações
          </h1>
          <svg width="31" height="17" viewBox="0 0 31 17" fill="none">
            <path
              d="M18.2964 11.7195C22.4423 13.2503 27.1623 12.1022 30.5428 9.80596C30.7661 9.67839 30.6385 9.32758 30.3834 9.35947C26.7477 9.83785 23.0801 10.4119 19.7315 8.94488C17.4672 8.02002 15.3942 6.5211 13.1937 5.40489C9.17532 3.61895 4.29587 4.25679 0.564534 6.23408C0.341292 6.36165 0.436967 6.71245 0.723993 6.68056C4.55101 6.17029 8.66505 6.07462 11.8542 8.05191C13.8315 9.48704 15.7769 10.8584 18.2964 11.7195Z"
              fill="#232329"
            />
            <path
              d="M21.645 14.813C21.8364 14.6854 21.7407 14.3665 21.5174 14.3665C19.7634 14.3027 17.9775 14.3346 16.3829 13.9519C13.991 13.3778 12.205 11.7514 10.2596 10.4757C7.42127 8.65785 3.4348 8.84921 0.468859 10.3162C0.245616 10.4119 0.341292 10.7308 0.564534 10.7308C3.27534 10.7946 6.08181 11.0497 8.091 12.6443C9.36667 13.8243 10.6742 14.9405 12.4283 15.7059C15.3942 17.1411 19.0937 16.5032 21.645 14.813Z"
              fill="#232329"
            />
            <path
              d="M20.752 6.5211C23.8455 7.66921 27.4812 6.74435 29.8093 4.83084C30.0007 4.67138 29.8731 4.38435 29.6498 4.41625C27.8639 4.48003 26.1099 4.67138 24.4834 4.41625C22.0277 4.03354 20.0823 2.56652 17.9775 1.45031C14.9477 -0.112389 10.9931 0.365988 8.21856 2.05625C7.99532 2.18382 8.12289 2.50274 8.34613 2.50274C11.0569 2.34328 13.8953 2.37517 16.0639 3.8103C17.4672 4.89462 18.8704 5.88327 20.752 6.5211Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card urlImg={"/images/TV.png"} urlImg2={"/images/canais.png"} />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Smart TV</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Em cada quarto da linha Padrão do Hotel Van Monet, disponibilizamos
            uma Smart TV de 32 polegadas com alta definição e uma ampla seleção
            de canais a cabo. Os hóspedes podem desfrutar de uma variedade de
            programas, notícias, esportes e entretenimento, ou acessar suas
            próprias contas de serviços de streaming para um entretenimento
            personalizado. Esta comodidade assegura tanto relaxamento quanto
            informação, tudo ao alcance de um controle remoto
          </h1>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5 4.5C20.5 2.29086 18.7091 0.5 16.5 0.5H4.5C2.29086 0.5 0.5 2.29086 0.5 4.5V10.5C0.5 12.7091 2.29086 14.5 4.5 14.5H9.74996V16.7691C8.33333 16.852 6.92565 17.2037 5.25119 17.7925C4.86042 17.9299 4.65503 18.358 4.79242 18.7488C4.92982 19.1395 5.35797 19.3449 5.74873 19.2075C7.59206 18.5594 8.98485 18.252 10.3873 18.25C11.7931 18.248 13.2646 18.5528 15.2651 19.2123C15.6585 19.342 16.0826 19.1282 16.2123 18.7348C16.3419 18.3414 16.1282 17.9174 15.7348 17.7877C14.0284 17.2252 12.6109 16.8834 11.25 16.7819V14.5L16.5 14.5C18.7091 14.5 20.5 12.7091 20.5 10.5V4.5ZM10.5 11.25C10.9142 11.25 11.25 10.9142 11.25 10.5C11.25 10.0858 10.9142 9.75 10.5 9.75C10.0858 9.75 9.75 10.0858 9.75 10.5C9.75 10.9142 10.0858 11.25 10.5 11.25ZM10.5 5.25C9.05001 5.25 7.73854 5.8368 6.78765 6.78769C6.49476 7.08058 6.01989 7.08058 5.72699 6.78769C5.4341 6.4948 5.4341 6.01992 5.72699 5.72703C6.94768 4.50634 8.63621 3.75 10.5 3.75C12.3637 3.75 14.0522 4.50634 15.2729 5.72703C15.5658 6.01992 15.5658 6.4948 15.2729 6.78769C14.98 7.08058 14.5052 7.08058 14.2123 6.78769C13.2614 5.8368 11.9499 5.25 10.5 5.25ZM10.5 8.25C9.87844 8.25 9.31697 8.50102 8.90897 8.90901C8.61608 9.2019 8.14121 9.2019 7.84831 8.90901C7.55542 8.61612 7.55542 8.14124 7.84831 7.84835C8.52611 7.17055 9.46464 6.75 10.5 6.75C11.5353 6.75 12.4738 7.17055 13.1516 7.84835C13.4445 8.14124 13.4445 8.61612 13.1516 8.90901C12.8587 9.2019 12.3838 9.2019 12.091 8.90901C11.683 8.50102 11.1215 8.25 10.5 8.25Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card
          urlImg={"/images/frigobar.png"}
          urlImg2={"/images/frigobar2.png"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Frigobar</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Cada quarto da linha Padrão no Hotel Van Monet é equipado com um
            frigobar de 45 litros, oferecendo conveniência e privacidade. Ideal
            para manter suas bebidas e snacks resfriados, o frigobar é uma
            comodidade perfeita para hóspedes que preferem a facilidade de ter
            opções de consumo ao seu alcance, sem precisar sair do quarto. Nota:
            o frigobar é fornecido vazio, permitindo aos hóspedes personalizar
            seu conteúdo com itens adquiridos no nosso PDV de conveniência ou
            fora do hotel
          </h1>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.82259 11.101V14.1061H2.9013V11.101C2.9013 10.2238 3.09138 9.58384 3.42866 8.78768C3.74002 8.0552 4.0581 7.30608 4.02258 4.78768L4.02162 4.14352H3.90578V3.52336H4.36274V3.18896H5.30866V3.52336H5.8277V4.14352H5.70259L5.7013 4.78768C5.6661 7.30576 5.98419 8.0552 6.29523 8.78768C6.6325 9.58352 6.82259 10.2242 6.82259 11.101ZM10.037 5.39184V7.39024L10.7503 8.74V14.1064H7.87155V8.74L8.5845 7.39024V5.39184H10.037ZM6.20211 12.7586V11.101C6.20211 10.8373 6.18355 10.5749 6.13843 10.3147H3.58482C3.53618 10.5701 3.52114 10.8408 3.52114 11.101V12.7586H6.20211ZM10.2552 12.7173V9.48656H8.36658V12.7173H10.2552ZM14.8619 7.3512V3.28528H15.4085V7.3512H14.8619ZM14.8619 15.9598V8.1768H16.2341V2.45968H14.8619V0.5H12.9435V15.9598H14.8619ZM12.0079 15.9598V0.5H0.765625V15.9598H2.13971V16.5H3.42386V15.9598H10.2853V16.5H11.5698V15.9598H12.0079Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card urlImg={"/images/mesa.png"} urlImg2={"/images/cafe.png"} />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Mesa de Trabalho</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Aproveite a conveniência de uma mesa de trabalho espaçosa em cada
            quarto da linha Padrão. Projetada para proporcionar conforto e
            praticidade, esta mesa é ideal para hóspedes que precisam manter a
            produtividade durante a estadia. Com espaço suficiente para acomodar
            seu laptop e documentos, a mesa também oferece uma posição
            ergonômica que ajuda a manter o foco, seja para negócios ou
            planejamento pessoal
          </h1>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.55701 1.08584C8.12792 0.514925 8.98613 0.343284 9.73272 0.650702L13.7397 2.30062C15.0593 2.84401 15.4015 4.55504 14.3924 5.56419L11.5639 8.39261C10.5548 9.40177 8.84376 9.05956 8.30037 7.7399L7.43123 5.62913L2.44424 10.6161C1.95609 11.1043 1.95609 11.8957 2.44424 12.3839L9.81036 19.75H13.4997C13.9139 19.75 14.2497 20.0858 14.2497 20.5C14.2497 20.9142 13.9139 21.25 13.4997 21.25H5.4997C5.08548 21.25 4.7497 20.9142 4.7497 20.5C4.7497 20.0858 5.08548 19.75 5.4997 19.75H7.68904L1.38358 13.4445C0.309641 12.3706 0.309638 10.6294 1.38358 9.55546L6.81251 4.12652L6.65046 3.73296C6.34304 2.98638 6.51468 2.12817 7.0856 1.55725L7.55701 1.08584ZM20.2672 6.71406C20.2672 7.12827 19.9314 7.46406 19.5172 7.46406H18.103C17.6887 7.46406 17.353 7.12827 17.353 6.71406C17.353 6.29984 17.6887 5.96406 18.103 5.96406H19.5172C19.9314 5.96406 20.2672 6.29984 20.2672 6.71406ZM16.512 8.30523C16.2191 8.01234 15.7443 8.01234 15.4514 8.30523C15.1585 8.59813 15.1585 9.073 15.4514 9.36589L16.8656 10.7801C17.1585 11.073 17.6333 11.073 17.9262 10.7801C18.2191 10.4872 18.2191 10.0123 17.9262 9.71945L16.512 8.30523ZM14.6104 10.9568C14.6104 10.5426 14.2746 10.2068 13.8604 10.2068C13.4461 10.2068 13.1104 10.5426 13.1104 10.9568V12.371C13.1104 12.7852 13.4461 13.121 13.8604 13.121C14.2746 13.121 14.6104 12.7852 14.6104 12.371V10.9568Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <Card urlImg={"/images/wifi.png"} urlImg2={"/images/wifi2.png"} />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">Conexão WiFi</h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Mantenha-se conectado sem esforço com a nossa conexão Wi-Fi de alta
            velocidade disponível em todos os quartos da linha Padrão. Ideal
            para hóspedes que precisam de acesso constante à internet, seja para
            trabalho, entretenimento ou planejamento de atividades, nosso Wi-Fi
            confiável garante que você possa navegar, streamar e comunicar-se
            com eficiência e conforto. Com cobertura completa em cada quarto,
            você pode contar com uma conexão estável para atender todas as suas
            necessidades digitais durante a estadia
          </h1>
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.95926 1.95904C5.25216 1.66615 5.25216 1.19127 4.95926 0.898381C4.66637 0.605488 4.1915 0.605488 3.8986 0.898381C1.95406 2.84293 0.75 5.53146 0.75 8.49978C0.75 11.4681 1.95406 14.1566 3.8986 16.1012C4.1915 16.3941 4.66637 16.3941 4.95926 16.1012C5.25216 15.8083 5.25216 15.3334 4.95926 15.0405C3.28452 13.3658 2.25 11.0543 2.25 8.49978C2.25 5.94525 3.28452 3.63378 4.95926 1.95904ZM19.1014 0.898381C18.8085 0.605488 18.3336 0.605488 18.0407 0.898381C17.7478 1.19127 17.7478 1.66615 18.0407 1.95904C19.7155 3.63378 20.75 5.94525 20.75 8.49978C20.75 11.0543 19.7155 13.3658 18.0407 15.0405C17.7478 15.3334 17.7478 15.8083 18.0407 16.1012C18.3336 16.3941 18.8085 16.3941 19.1014 16.1012C21.0459 14.1566 22.25 11.4681 22.25 8.49978C22.25 5.53146 21.0459 2.84293 19.1014 0.898381ZM7.78769 4.78747C8.08058 4.49458 8.08058 4.0197 7.78769 3.72681C7.4948 3.43391 7.01992 3.43391 6.72703 3.72681C5.50634 4.9475 4.75 6.63602 4.75 8.49978C4.75 10.3635 5.50634 12.0521 6.72703 13.2727C7.01992 13.5656 7.4948 13.5656 7.78769 13.2727C8.08058 12.9799 8.08058 12.505 7.78769 12.2121C6.83681 11.2612 6.25 9.94973 6.25 8.49978C6.25 7.04982 6.83681 5.73835 7.78769 4.78747ZM16.273 3.72681C15.9801 3.43391 15.5052 3.43391 15.2123 3.72681C14.9194 4.0197 14.9194 4.49458 15.2123 4.78747C16.1632 5.73835 16.75 7.04982 16.75 8.49978C16.75 9.94973 16.1632 11.2612 15.2123 12.2121C14.9194 12.505 14.9194 12.9799 15.2123 13.2727C15.5052 13.5656 15.9801 13.5656 16.273 13.2727C17.4937 12.0521 18.25 10.3635 18.25 8.49978C18.25 6.63603 17.4937 4.9475 16.273 3.72681ZM11.5 10.9998C12.8807 10.9998 14 9.88047 14 8.49976C14 7.11904 12.8807 5.99976 11.5 5.99976C10.1193 5.99976 9 7.11904 9 8.49976C9 9.88047 10.1193 10.9998 11.5 10.9998Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>
        <Card
          urlImg={"/images/cafe_manha.png"}
          urlImg2={"/images/cafe_manha2.png"}
        />
        <div className="px-4 mt-2 text-center flex flex-col items-center ">
          <div className="flex items-center text-center justify-center">
            <h1 className="font-bold zilla text-[24px]">
              Café da manhã incluso
            </h1>
          </div>

          <h1 className="montserrat font-medium text-justify text-[14px] text-gray-600">
            Comece o dia com energia e sabor com nosso café da manhã incluso,
            servido diariamente no salão do refeitório. Nosso buffet abrangente
            apresenta uma seleção diversificada de itens frescos e nutritivos
            que atendem a todos os gostos. Desfrute de uma variedade de pães,
            frutas frescas, frios, cereais, bebidas quentes e frias, além de
            pratos quentes como ovos mexidos e salsicha ao molho. Preparado com
            ingredientes de qualidade, nosso café da manhã é a maneira perfeita
            de preparar-se para um dia de atividades ou relaxamento
          </h1>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75877 10.998L7.4438 10.9315C7.69498 10.9094 7.92332 11.0201 8.08316 11.1972L8.99654 12.4367C9.5674 11.7727 10.1154 11.0865 10.6635 10.4003L10.0469 9.692C9.88708 9.51492 9.84141 9.2493 9.93275 9.02795L10.1839 8.38604C10.5721 7.36784 10.3894 6.23896 9.70441 5.37571L6.0509 0.815931C5.75405 0.439638 5.20603 0.395369 4.81784 0.705256C4.47532 0.993009 4.45249 1.52425 4.7265 1.85627L7.74065 5.61919C7.94616 5.88481 7.87765 6.2611 7.58081 6.43818C7.32963 6.59312 6.98711 6.50458 6.7816 6.28323L3.79029 2.52031C3.49344 2.14402 2.94542 2.09975 2.55723 2.40964C2.21472 2.69739 2.19188 3.22863 2.46589 3.56065L5.48004 7.32357C5.68555 7.58919 5.61705 7.96548 5.3202 8.14256C5.06902 8.2975 4.7265 8.20896 4.52099 7.98762L1.55252 4.26896C1.2785 3.91481 0.753313 3.80413 0.365128 4.06975C-0.0458919 4.33537 -0.114395 4.88874 0.182452 5.2429L3.85879 9.80267C4.54383 10.6659 5.63988 11.1086 6.75877 10.998Z"
              fill="#232329"
            />
            <path
              d="M13.7689 13.9419C13.2437 14.6502 12.6272 15.5356 11.965 16.4431L15.3673 21.0472C15.7327 21.5563 16.4634 21.6448 16.9658 21.2685L17.9933 20.4938C18.4957 20.1175 18.5642 19.4092 18.1531 18.9444L13.7689 13.9419Z"
              fill="#232329"
            />
            <path
              d="M20.2996 1.56851C20.0941 1.05941 19.3862 0.948739 19.0437 1.39144L12.2619 9.95761C10.1611 12.6138 8.26584 14.8273 5.9824 17.3285L4.68083 18.878C4.26981 19.3649 4.36115 20.0954 4.88634 20.4938L5.91389 21.2464C6.46192 21.6448 7.21545 21.512 7.60364 20.9808C9.06504 18.8558 12.513 13.9419 13.8603 12.1932L15.4587 13.2114C16.098 13.5656 16.8973 13.3664 17.2854 12.7687C18.0618 11.5292 19.4775 8.98368 20.5051 7.03582C21.4641 5.2429 20.8248 2.91874 20.2996 1.56851Z"
              fill="#232329"
            />
          </svg>

          <div className="w-28 h-[1px] mb-6 mt-28 bg-[#989898]" />
        </div>

        <div className="bg-gradient-to-t text-center from-[#1E0D45] text-gray-100 to-[#1D5E79] drop-shadow-[0px_15px_25px_rgba(0,0,0,.7)] py-6 flex flex-col items-center justify-center ">
          <div className="px-10">
            <div className="flex items-center  justify-center">
              <h1 className="font-bold zilla text-[24px]">
                Histórias Reais, Experiências Memoráveis
              </h1>
            </div>

            <h1 className="montserrat font-medium text-justify text-[14px] text-gray-200">
              Veja o que nossos hóspedes têm a dizer sobre suas estadias no
              Hotel Van Monet
            </h1>
          </div>
          <Coments />
        </div>

        <div className="py-10 flex items-center justify-center">
          <Image
            alt="logo"
            width={500}
            height={500}
            src={"/images/logo_color.png"}
            loading="lazy"
            draggable={false}
            className="object-cover w-2/4"
          />
        </div>

        <Perguntas />

        <div className="flex flex-col items-center text-center justify-center p-4 mt-8">
          <h1 className="font-bold zilla text-[24px] mb-4">
            Nossa localização
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d116378.06666373913!2d-47.54119706388784!3d-24.2832059879025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94c557437f6a9421%3A0x6e40f5b79d964be8!2sAv.%20Don%C3%A1%20Evarista%20de%20Castro%20Ferreira%2C%20n%C2%B0%20154%20-%20Centro%2C%20Miracatu%20-%20SP%2C%2011850-000!3m2!1d-24.2832282!2d-47.4587955!5e0!3m2!1spt-BR!2sbr!4v1715209631202!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            className="border-2 border-[#186B94] rounded-2xl"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="h-10 bg-[#186B94] flex items-center justify-center montserrat gap-2 text-xs">
          Criado por
          <a href="https://xrow08.github.io/PortfolioXR/">
            <Image
              alt="logo"
              width={500}
              height={500}
              src={"/images/logoXR.png"}
              loading="lazy"
              draggable={false}
              className="object-cover w-8"
            />
          </a>
          | Todos os direitos reservados 2024
        </div>
      </section>
    </section>
  );
}
