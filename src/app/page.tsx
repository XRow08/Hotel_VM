"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 text-white text-center justify-center">
      <Image
        alt="logo"
        width={66}
        height={66}
        src={"/images/logo.svg"}
        loading="lazy"
        draggable={false}
        className="object-cover"
      />
      <div>
        <h1 className="font-semibold text-[30px] ">Log in</h1>
        <p>Welcome back!</p>
      </div>
      <Button
        children={"Log in with wallet"}
        bgColor="white"
        onClick={() => push("community")}
      />
      <Button children={"Log in with Farcaster"} bgColor="purple" />
      <p>
        Don't have an account?{" "}
        <span className="font-semibold cursor-pointer">Sign up</span>
      </p>
    </section>
  );
}
