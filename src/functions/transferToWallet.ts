"use server";
import { apiLumx } from "@/app/actions";
import type { LoggedInUser } from "@lumx-protocol/embedded-wallet";

export async function onTransferToWallet(
  amount: string | number,
  address: string,
  user: LoggedInUser
) {
  try {
    const payload = {
      walletId: user.walletId,
      contractId: "3c90c3cc-0d44-4b50-8888-8dd25736052a",
      operations: [
        {
          functionSignature: "buy",
          functionParams: [amount, address],
        },
      ],
    };
    console.log(payload);
    await apiLumx(payload);
  } catch (error) {
    console.log(error);
  }
}
