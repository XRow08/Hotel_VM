"use client";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 text-white text-center justify-center">
      <div className="w-[80%]">
        <h1 className="font-semibold text-[30px] ">Welcome!</h1>
        <p>You don't have actions created yet. Create your first!</p>
      </div>
      <Button
        children={"Create new community"}
        bgColor="blue"
        onClick={() => push("create")}
      />
      <Button children={"Enter in a community"} bgColor="black" />
    </section>
  );
}
