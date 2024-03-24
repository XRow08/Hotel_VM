import { DN404Address } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function tokenize(amount: string, address: string) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const sepoliaUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;
    const auroraUrl = process.env.NEXT_PUBLIC_AURORA_RPC_URL!;

    const tx1 = await executeContractFunction(
      auroraUrl,
      Dn404__factory,
      DN404Address.aurora,
      "mint",
      [address, amountNew]
    );
    console.log("tx1", tx1);

    const tx2 = await executeContractFunction(
      sepoliaUrl,
      Dn404__factory,
      DN404Address.sepolia,
      "mint",
      [address, amountNew]
    );
    console.log("tx2", tx2);
  } catch (error) {
    console.log(error);
  }
}
