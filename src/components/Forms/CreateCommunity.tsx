"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateCommunity() {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const style =
    "bg-black w-full p-3 rounded-lg border border-white border-opacity-50";

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start gap-2"
    >
      <div className="w-full flex flex-col gap-6 mb-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Community name</h1>
          <input
            {...register("amount", { required: true })}
            placeholder="Enter the community name"
            type="text"
            className={style}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Frequency of the pulse</h1>
          <select {...register("amount", { required: true })} className={style}>
            <option value="Period">Period</option>
            <option value="Days 02 and 16 of each month">Days 02 and 16 of each month</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">NFT Reward link</h1>
          <input
            {...register("amount", { required: true })}
            placeholder="https://gsaJDGdk.xyz/jahaj"
            type="text"
            className={style}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Token link</h1>
          <input
            {...register("amount", { required: true })}
            placeholder="https://gsaJDGdk.xyz/jahaj"
            type="text"
            className={style}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Number of tokens</h1>
          <input
            {...register("amount", { required: true })}
            placeholder="Select number of tokens"
            type="number"
            className={style}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <Button
          children={"Create"}
          type="submit"
          bgColor={"white"}
          onClick={() => push("/create/confirmation")}
        />
        <Button
          children={"Cancel"}
          type="button"
          bgColor={"black"}
          onClick={() => push("/welcome")}
        />
      </div>
    </form>
  );
}
