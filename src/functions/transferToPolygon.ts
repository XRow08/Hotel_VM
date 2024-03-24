"use server";
import { apiLumx } from "@/app/actions";
import type { LoggedInUser } from "@lumx-protocol/embedded-wallet";

export async function onPolygon(amount: string | number, user: LoggedInUser) {
  try {
    const payload = {
      walletId: user.walletId,
      contractId: "3c90c3cc-0d44-4b50-8888-8dd25736052a",
      operations: [
        {
          functionSignature: "burn",
          functionParams: [amount],
        },
      ],
    };
    console.log(payload);
    await apiLumx(payload);
  } catch (error) {
    console.log(error);
  }

  try {
    const payload = {
      walletId: user.walletId,
      contractId: "3c90c3cc-0d44-4b50-8888-8dd25736052a",
      operations: [
        {
          functionSignature: "mint",
          functionParams: [user.walletAddress, amount],
        },
      ],
    };
    console.log(payload);
    await apiLumx(payload);
  } catch (error) {
    console.log(error);
  }
}
