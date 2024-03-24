import { DN404Address } from "@/constants";
import { Dn404__factory } from "@/contracts";
import { executeContractFunction } from "./executeFunctions";

export async function ethersAndPolygon(
  amount: string,
  address: string,
  toChain: string
) {
  try {
    const amountNew = BigInt(Number(amount) * 10 ** 18);
    const mumbaiUrl = process.env.NEXT_PUBLIC_MUMBAI_RPC_URL!;
    const sepoliaUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;

    const tx1 = await executeContractFunction(
      toChain === "sepolia" ? mumbaiUrl : sepoliaUrl,
      Dn404__factory,
      toChain === "sepolia" ? DN404Address.mumbai : DN404Address.sepolia,
      "burn",
      [amountNew]
    );
    console.log("tx1", tx1);

    const tx2 = await executeContractFunction(
      toChain === "sepolia" ? sepoliaUrl : mumbaiUrl,
      Dn404__factory,
      toChain === "sepolia" ? DN404Address.sepolia : DN404Address.mumbai,
      "mint",
      [address, amountNew]
    );
    console.log("tx2", tx2);
  } catch (error) {
    console.log(error);
  }
}
