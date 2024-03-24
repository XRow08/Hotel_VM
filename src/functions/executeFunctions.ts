import { calculateGasLimit } from "@/helpers/CalculateGasLimit";
import { JsonRpcProvider, ethers } from "ethers";

export async function executeContractFunction(
  rpcUrl: string,
  contractFactory: any,
  contractAddress: string,
  functionName: string,
  functionArgs: any[]
) {
  try {
    const provider = new JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_PRIVATE_KEY!,
      provider
    );
    const contract = contractFactory.connect(contractAddress, wallet);

    const gasLimit = await calculateGasLimit(
      contract,
      functionName,
      functionArgs
    );
    console.log(gasLimit);
    const response = await contract[functionName](...functionArgs, {
      gasLimit,
    });
    console.log(response);

    const tx = await response.wait();
    console.log(tx);

    return tx;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after handling it
  }
}

export async function readContractFunction(
  rpcUrl: string,
  contractFactory: any,
  contractAddress: string,
  functionName: string,
  functionArgs: any[]
) {
  try {
    const provider = new JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_PRIVATE_KEY!,
      provider
    );
    const contract = contractFactory.connect(contractAddress, wallet);

    const gasLimit = await calculateGasLimit(
      contract,
      functionName,
      functionArgs
    );
    console.log(gasLimit);
    const response = await contract[functionName](...functionArgs, {
      gasLimit,
    });
    console.log(response);
    
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after handling it
  }
}
