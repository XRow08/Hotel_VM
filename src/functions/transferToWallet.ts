import { DN404Address, burnWallet } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function transferToWallet(
  amount: string | number,
  address: string
) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const sepoliaRPC = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;

    const tx1 = await executeContractFunction(
      sepoliaRPC,
      Dn404__factory,
      DN404Address.sepolia,
      "burn",
      [burnWallet, amountNew]
    );
    console.log("tx1", tx1);

    const tx2 = await executeContractFunction(
      sepoliaRPC,
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
