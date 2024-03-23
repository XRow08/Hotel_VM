"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

export function InvistaForm() {
  const { register, handleSubmit } = useForm();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md h-[65px] w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="w-full flex justify-end gap-6"
    >
      <div className="w-3/4 flex gap-10">
        <input
          {...register("amount", { required: true })}
          placeholder="Insira o valor"
          type="number"
          className={style}
        />
        <div className="flex flex-col gap-10 w-full">
          <Button type="submit" children={"Tokenize sua Safra"} />
          <Button
            type="button"
            children={"Compense carbono na Blockchain da Aurora"}
          />
        </div>
      </div>
    </form>
  );
}
