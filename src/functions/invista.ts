import { burnWallet } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function invista(
  amount: string,
  address: string,
  contracts: { scroll: string; aurora: string; sepolia: string }
) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const scrollUrl = process.env.NEXT_PUBLIC_SCROLL_RPC_URL!;
    const sepoliaUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;
    const auroraUrl = process.env.NEXT_PUBLIC_AURORA_RPC_URL!;

    const tx1 = await executeContractFunction(
      scrollUrl,
      Dn404__factory,
      contracts.scroll,
      "burn",
      [burnWallet, amountNew]
    );
    console.log("tx1", tx1);

    const tx3 = await executeContractFunction(
      auroraUrl,
      Dn404__factory,
      contracts.aurora,
      "transfer",
      ["0x000000000000000000000000000000000000D3ad", amountNew]
    );
    console.log("tx3", tx3);

    const tx2 = await executeContractFunction(
      sepoliaUrl,
      Dn404__factory,
      contracts.sepolia,
      "mint",
      [address, amountNew]
    );
    console.log("tx2", tx2);

    return tx2;
  } catch (error) {
    console.log(error);
  }
}
