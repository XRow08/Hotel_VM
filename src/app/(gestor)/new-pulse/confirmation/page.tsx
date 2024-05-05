"use client";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Confirmation() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 py-20 text-white text-center justify-center">
      <div className="space-y-2">
        <h1 className="font-semibold text-[30px]">SUMMARY</h1>
        <h1 className="font-semibold text-[20px]">Ipê City community</h1>
        <p>Please check the informations to continue.</p>
      </div>
      <div className="space-y-8 my-4 flex flex-col items-start w-full text-start">
        <div className="space-y-2 text-[#98A2B3]">
          <h1 className="font-medium text-sm">Community name</h1>
          <h1 className="font-bold">Ipê city community</h1>
        </div>

        <div className="space-y-2 text-[#98A2B3]">
          <h1 className="font-medium text-sm">Frequency of the pulse</h1>
          <h1 className="font-bold">Days 02 and 16 of each month</h1>
        </div>

        <div className="space-y-2 text-[#98A2B3]">
          <h1 className="font-medium text-sm">NFT Reward link</h1>
          <h1 className="font-bold">https://gsaJDGdk.xyz/jahaj</h1>
        </div>

        <div className="space-y-2 text-[#98A2B3]">
          <h1 className="font-medium text-sm">Token link</h1>
          <h1 className="font-bold">https://gsaJDGdk.xyz/jahaj</h1>
        </div>

        <div className="space-y-2 text-[#98A2B3]">
          <h1 className="font-medium text-sm">Number of tokens</h1>
          <h1 className="font-bold">1</h1>
        </div>

        <div className="space-y-2">
          <h1 className="font-medium text-sm">Objective</h1>
          <h1 className="font-bold">Like and Share</h1>
        </div>

        <div className="space-y-2">
          <h1 className="font-medium text-sm">Where</h1>
          <h1 className="font-bold">Forcaster</h1>
        </div>

        <div className="space-y-2 w-full">
          <h1 className="font-medium text-sm">Post preview</h1>
          <textarea
            disabled
            value={
              "We are sharing that now we have a new amazing tool for our community! Now we go to the Mooooonx!"
            }
            className="bg-black w-full p-3 rounded-lg border border-white border-opacity-50"
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <Button
          children={"That's it! Continue"}
          type="submit"
          bgColor={"blue"}
          onClick={() => push("/new-pulse/success")}
        />
        <Button
          children={"Back"}
          type="button"
          bgColor={"black"}
          onClick={() => push("/new-pulse")}
        />
      </div>
    </section>
  );
}
