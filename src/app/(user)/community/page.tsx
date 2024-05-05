"use client";
import { Card } from "@/components/Card";
import { Pulses } from "@/components/Pulses";

export default function Community() {
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 px-6 pt-20 text-white">
      <h1 className="font-semibold text-[20px] text-center">Ipê City community</h1>
      <Card>
        <h4 className="font-semibold">PULSE's done</h4>
        <h4 className="font-semibold text-[30px]">23</h4>
      </Card>
      <Card>
        <h4 className="font-semibold">Total points earned</h4>
        <h4 className="font-semibold text-[30px]">1265</h4>
      </Card>
      <Card>
        <h4 className="font-semibold">Ranking of the month</h4>
        <h4 className="font-semibold text-[30px]">12º position</h4>
      </Card>
      <h1 className="font-semibold text-[30px] text-start">MY PULSE'S</h1>
      <Pulses />
    </section>
  );
}
