import { Dn404__factory } from "@/contracts";
import { readContractFunction } from "./executeFunctions";

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

export async function getSupply(card: CardProps) {
  const scrollRPC = process.env.NEXT_PUBLIC_SCROLL_RPC_URL!;
  const mumbaiUrl = process.env.NEXT_PUBLIC_MUMBAI_RPC_URL!;
  const sepoliaUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;

  const tx1 = await readContractFunction(
    scrollRPC,
    Dn404__factory,
    card.addressScroll,
    "totalSupply",
    []
  );
  const scrollSupply = Number(tx1) / 10 ** 18;

  const tx2 = await readContractFunction(
    mumbaiUrl,
    Dn404__factory,
    card.addressMumbai,
    "totalSupply",
    []
  );
  const mumbaiSupply = Number(tx2) / 10 ** 18;

  const tx3 = await readContractFunction(
    sepoliaUrl,
    Dn404__factory,
    card.addressSepolia,
    "totalSupply",
    []
  );
  const sepoliaSupply = Number(tx3) / 10 ** 18;

  const circulationLotes = mumbaiSupply + sepoliaSupply;

  const total = mumbaiSupply + sepoliaSupply + scrollSupply;

  return { scrollSupply, circulationLotes, total };
}
