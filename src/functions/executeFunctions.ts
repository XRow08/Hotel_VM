import { contractAddress } from "@/constants";
import { Pulse__factory } from "@/contracts";
import { calculateGasLimit } from "@/helpers/CalculateGasLimit";
import { ethers } from "ethers";

export async function onSetDeadline() {
  /* try {
    const { dateToTimestamp } = DateFormat;

    const contract = Pulse__factory.connect(contractAddress, provider);

    const gasLimit = await calculateGasLimit(contract, "", []);

    const timestamp = dateToTimestamp();
    const response = await contract.setDeadline([]);
    console.log(response);

    const tx = await response.wait();
    console.log(tx);

    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  } */
}

export async function onSetEligibility(address: string, ethereum: any) {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const pulse = Pulse__factory.connect(contractAddress, signer);
    const gasLimit = await calculateGasLimit(pulse, "setEligibility", [
      address,
    ]);
    console.log(gasLimit);
    const response = await pulse.setEligibility(address, true, { gasLimit });
    console.log(response);
    const tx = await response.wait();
    console.log(tx);
    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function onCompleteActivity(address: string, ethereum: any) {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const pulse = Pulse__factory.connect(contractAddress, signer);
    const gasLimit = await calculateGasLimit(pulse, "completeActivity", [
      address,
    ]);
    console.log(gasLimit);
    const response = await pulse.completeActivity(address, { gasLimit });
    console.log(response);
    const tx = await response.wait();
    console.log(tx);
    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
