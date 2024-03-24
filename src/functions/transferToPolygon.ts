import { DN404Address } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function transferToPolygon(
  amount: string | number,
  address: string
) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const rpcUrl = process.env.NEXT_PUBLIC_SCROLL_RPC_URL!;
    const mumbaiUrl = process.env.NEXT_PUBLIC_MUMBAI_RPC_URL!;

    const tx1 = await executeContractFunction(
      rpcUrl,
      Dn404__factory,
      DN404Address.scroll,
      "burn",
      [amountNew]
    );
    console.log(tx1);

    const tx2 = await executeContractFunction(
      mumbaiUrl,
      Dn404__factory,
      DN404Address.mumbai,
      "mint",
      [address, amountNew]
    );
    console.log(tx2);
  } catch (error) {
    console.log(error);
  }
}
