"use server";

import { getBaseApiUrl } from "@/api";
import config from "../../lumx.json";
import { typedFetch } from "@/api/typed-fetch";

type Transaction = {
  status: string;
  message: string;
  transactionHash: string;
  id: string;
};

export const startTransaction = async (
  walletId: string,
  prevState: any,
  formData: FormData
): Promise<Transaction> => {
  console.log("minting", walletId, formData, config.itemTypeId);

  const pollTransaction = async () => {
    const responseFromTransaction = await fetch(
      `${getBaseApiUrl()}/transactions/custom`,
      {
        method: "POST",
        body: JSON.stringify({
          walletId: "",
          contractId: "",
          operations: [],
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.LUMX_API_KEY}`,
        },
      }
    );

    const dataFromTransaction = await responseFromTransaction.json();
    return dataFromTransaction;
  };

  const transactionResult = await pollTransaction();

  return transactionResult;
};
