"use client";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Pulses } from "@/components/Pulses";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Community() {
  const { push } = useRouter();

  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 px-6 py-20 text-white">
      <BackButton link="/community" />
      <div className="space-y-2">
        <h1 className="text-center text-blue">Ipê City community</h1>
        <h1 className="font-semibold text-[20px] text-center">
          Engagement post
        </h1>
        <h1 className="text-[14px] text-center text-gray-300">
          Date: 02/05/2024
        </h1>
      </div>

      <h1 className="font-semibold text-[30px] text-center">EXECUTAR PULSE</h1>

      <div className="space-y-4 my-4">
        <div className="space-y-2">
          <h1 className="font-medium text-sm">Objective</h1>
          <h1 className="font-bold">Like and Share</h1>
        </div>

        <div className="space-y-2">
          <h1 className="font-medium text-sm">Where</h1>
          <h1 className="font-bold">Forcaster</h1>
        </div> 
      </div>

      <div className="space-y-1">
        <p className="text-sm font-medium">Post preview</p>
        <Card>
          <p>
            We are sharing that now we have a new amazing tool for our
            community! Now we go to the Mooooonx!
          </p>
          <Image
            alt="image"
            width={135}
            height={128}
            src={"/images/image.svg"}
            loading="lazy"
            draggable={false}
            className="object-cover"
          />
        </Card>
      </div>

      <h1 className="text-center">Tasks</h1>
      <div className="space-y-4">
        <Button children={"Like"} bgColor="blue" />
        <Button children={"Share"} bgColor="blue" />
      </div>
    </section>
  );
}
