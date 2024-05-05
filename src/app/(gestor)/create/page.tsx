"use client";
import { Button } from "@/components/Button";
import { CreateCommunity } from "@/components/Forms/CreateCommunity";
import { useRouter } from "next/navigation";

export default function Create() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 text-white text-center justify-center">
      <div>
        <h1 className="font-semibold text-[30px]">inicial Set up</h1>
        <p>
          Please enter the informations about your community PULSE
          configuration. It's just once!
        </p>
      </div>
      <CreateCommunity />
    </section>
  );
}
