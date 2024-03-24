"use client";
import { useState } from "react";
import { AgroCard } from "../AgroCard";
import { InvistaForm } from "../Forms/Invista";

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

export function AgrosInvista() {
  const [card, setCard] = useState<CardProps>();

  return (
    <div className="w-full my-10 pb-20 border-b-4 border-white border-opacity-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Selecione o Agricultor:</h1>
        <h1 className="font-semibold text-3xl w-3/4">
          Nossa equipe seleciona minuciosamente cada fazenda e agricultor para
          garantir que você tenha a confiança e a credibilidade necessárias para
          fazer o seu investimento.
        </h1>
      </div>

      <div className="flex justify-between w-full my-10 mb-20">
        <AgroCard
          name={"Francisco Rocha"}
          farmName={"Fazenda Sol Nascente"}
          urlPhoto={"/images/veio1.png"}
          addressScroll={"0x699743fd696a9eFD3e93A1E001A4713D27dDbF81"}
          addressMumbai={"0x467678EEB567104b27d621117b0042427E64cDC1"}
          addressSepolia={"0xAE8569130856dC2c7b6fec52e4c473880A617b40"}
          addressAurora={"0xb0d3022A9758e001B359353519f2D89Ad59C1CD0"}
          onClick={(card) => setCard(card)}
        />
        <AgroCard
          name={"Júlio Oliveira"}
          farmName={"Sítio Recanto da Serra"}
          urlPhoto={"/images/veio2.png"}
          addressScroll={"0x172aeb9cF7b372ebacFe2e2E764A8593710dc3F2"}
          addressMumbai={"0x58af1E096e4Ff8edCB18568b1Eb74d79bE9A6E5A"}
          addressSepolia={"0x1e3311f82593199615Be24d37C5F2d1124058C9A"}
          addressAurora={"0x467678EEB567104b27d621117b0042427E64cDC1"}
          onClick={(card) => setCard(card)}
        />
        <AgroCard
          name={"Antônio Bragança"}
          farmName={"Fazenda Rio Manso"}
          urlPhoto={"/images/veio3.png"}
          addressScroll={"0x3eEDDD342D9e6417401d236f19FD07018ad36dFF"}
          addressMumbai={"0x3296FDc623fb89A758CD5240900671be8030C46b"}
          addressSepolia={"0x75D71BAB6819ef870137126Cd80126E16475B059"}
          addressAurora={"0x58af1E096e4Ff8edCB18568b1Eb74d79bE9A6E5A"}
          onClick={(card) => setCard(card)}
        />
        <AgroCard
          name={"Natanael Lopes"}
          farmName={"Sítio Estrela Verde"}
          urlPhoto={"/images/veio4.png"}
          addressScroll={"0x5573E52fFe2EC693AeB6995A3c5b8e316d054E94"}
          addressMumbai={"0x5E78dBa3A105015eD8a70D4E7Ef46385dc1bD000"}
          addressSepolia={"0x75D71BAB6819ef870137126Cd80126E16475B059"}
          addressAurora={"0x3296FDc623fb89A758CD5240900671be8030C46b"}
          onClick={(card) => setCard(card)}
        />
        <AgroCard
          name={"Bernardo Aragão"}
          farmName={"Sítio Terra Nova"}
          urlPhoto={"/images/veio5.png"}
          addressScroll={"0xAE8569130856dC2c7b6fec52e4c473880A617b40"}
          addressMumbai={"0xF7602Cf35C08F8211d112a967FAaB8a4aECFa651"}
          addressSepolia={"0x46Bdb8f2de8152b1e74953504c4316AC9C1A3957"}
          addressAurora={"0x5E78dBa3A105015eD8a70D4E7Ef46385dc1bD000"}
          onClick={(card) => setCard(card)}
        />
      </div>
      <InvistaForm {...card!} />
    </div>
  );
}
