"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreatePulse() {
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
          <h1 className="text-sm font-medium">Objective</h1>
          <select {...register("amount", { required: true })} className={style}>
            <option value="Like and Share">Like and Share</option>
            <option value="Like">Like</option>
            <option value="Share">Share</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Where</h1>
          <select {...register("amount", { required: true })} className={style}>
            <option value="Like and Share">Forcaster</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm font-medium">Post preview</h1>
          <textarea
            {...register("amount", { required: true })}
            placeholder="Write here"
            className={style}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <Button
          children={"Next"}
          type="submit"
          bgColor={"white"}
          onClick={() => push("/new-pulse/confirmation")}
        />
        <Button
          children={"Cancel"}
          type="button"
          bgColor={"black"}
          onClick={() => push("/home")}
        />
      </div>
    </form>
  );
}
