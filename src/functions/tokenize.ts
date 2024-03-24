import { DN404Address, burnWallet } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function tokenize(amount: string, address: string) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const scrollUrl = process.env.NEXT_PUBLIC_SCROLL_RPC_URL!;
    const auroraUrl = process.env.NEXT_PUBLIC_AURORA_RPC_URL!;

    const tx1 = await executeContractFunction(
      auroraUrl,
      Dn404__factory,
      DN404Address.aurora,
      "transfer",
      [burnWallet, amountNew]
    );
    console.log("tx1", tx1);

    const tx2 = await executeContractFunction(
      scrollUrl,
      Dn404__factory,
      DN404Address.scroll,
      "mint",
      [burnWallet, amountNew]
    );
    console.log("tx2", tx2);
    return tx2;
  } catch (error) {
    console.log(error);
  }
}
