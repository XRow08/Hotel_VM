"use server";

import { getBaseApiUrl } from "@/api";
import axios from "axios";

type Props = {
  walletId: string;
  contractId: string;
  operations: any[];
};

export const apiLumx = async (formData: Props): Promise<any> => {
  console.log("minting", formData);
  const responseFromTransaction = await axios.post(
    `${getBaseApiUrl()}/transactions/custom`,
    formData,
    { headers: { Authorization: `Bearer ${process.env.LUMX_API_KEY}` } }
  );
  console.log("responseFromTransaction", responseFromTransaction);

  return responseFromTransaction;
};