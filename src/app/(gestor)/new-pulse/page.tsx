"use client";
import { Button } from "@/components/Button";
import { CreatePulse } from "@/components/Forms/CreatePulse";
import { useRouter } from "next/navigation";

export default function NewPulse() {
  const { push } = useRouter();

  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 px-6 py-20 text-white">
      <div className="space-y-2 text-center">
        <h1 className="font-semibold text-[30px]">NEW PULSE</h1>
        <p>Please enter the informations about your first community PULSE.</p>
      </div>
      <CreatePulse />
    </section>
  );
}
