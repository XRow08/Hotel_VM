"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Success() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 text-white text-center justify-center">
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
        <h1 className="font-semibold text-[30px]">SUCCESSFULLY CREATED!</h1>
        <p>
          Congratulations! Now you have a base configuration to your community
          PULSE's.
        </p>
      </div>
      <Button
        children={"Continue"}
        type="button"
        bgColor={"white"}
        onClick={() => push("/home")}
      />
    </section>
  );
}
