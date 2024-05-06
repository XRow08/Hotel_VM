"use client";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { onCompleteActivity } from "@/functions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function Execute() {
  const { push } = useRouter();
  const [tasks, setTasks] = useState(false);
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();

  async function onSubmit() {
    setLoading(true);
    await onCompleteActivity(address!);
    setLoading(false);
    setTasks(true);
  }

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
      {!tasks ? (
        <div className="space-y-4">
          <Button children={"Like"} bgColor="blue" loading={loading} />
          <Button
            children={"Share"}
            bgColor="blue"
            loading={loading}
            onClick={onSubmit}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              alt="image"
              width={40}
              height={40}
              src={"/images/checkIcon.svg"}
              loading="lazy"
              draggable={false}
              className="object-cover"
            />
            <h1 className="font-semibold text-[30px]">TASKS DONE!</h1>
            <p>
              Congratulations! Now you have a base configuration to your
              community PULSE's.
            </p>
          </div>
          <Button
            children={"See my PULSE's"}
            type="button"
            bgColor={"white"}
            onClick={() => push("/community")}
          />
        </div>
      )}
    </section>
  );
}
