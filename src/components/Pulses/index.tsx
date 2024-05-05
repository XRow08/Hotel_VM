import { useState } from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

export function Pulses() {
  const [pulses, setPulses] = useState(true);
  const { push } = useRouter();
  
  return (
    <section>
      <div className="flex items-center justify-between border-b">
        <h1
          onClick={() => setPulses(true)}
          className={`font-semibold text-lg transition-all duration-300 ease-in-out text-center w-full ${
            pulses ? "text-blue border-b border-blue" : "text-white"
          }`}
        >
          New PULSE's
        </h1>
        <h1
          onClick={() => setPulses(false)}
          className={`font-semibold text-lg transition-all duration-300 ease-in-out text-center w-full ${
            !pulses ? "text-blue border-b border-blue" : "text-white"
          }`}
        >
          My history
        </h1>
      </div>
      {pulses ? (
        <ul className="flex flex-col pt-10">
          <li className="flex items-center justify-between border-b pb-2">
            <h1 className="w-1/2">Title</h1>
            <h1 className="w-1/3">Date</h1>
            <h1 className="w-1/4">Action</h1>
          </li>
          <li className="flex items-center justify-between text-gray-300 text-start border-b py-4">
            <h1 className="w-1/2">New Feature App</h1>
            <h1 className="w-1/3">24/05/2024</h1>
            <Button bgColor="white" className="w-1/4" children={"Start"} onClick={() => push("/execute")} />
          </li>
          <li className="flex items-center justify-between text-gray-300 text-start border-b py-4">
            <h1 className="w-1/2">New Feature App</h1>
            <h1 className="w-1/3">24/05/2024</h1>
            <Button bgColor="white" className="w-1/4" children={"Start"} onClick={() => push("/execute")} />
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col pt-10">
          <li className="flex items-center justify-between border-b pb-2">
            <h1 className="w-1/2">Title</h1>
            <h1 className="w-1/3">Date</h1>
            <h1 className="w-1/3 pl-4">Points</h1>
          </li>
          <li className="flex items-center justify-between border-b py-6 text-gray-300">
            <h1 className="w-1/2">New Post</h1>
            <h1 className="w-1/3">24/05/2024</h1>
            <h1 className="w-1/3 text-center">10</h1>
          </li>
          <li className="flex items-center justify-between border-b py-6 text-gray-300">
            <h1 className="w-1/2">New Post</h1>
            <h1 className="w-1/3">24/05/2024</h1>
            <h1 className="w-1/3 text-center">10</h1>
          </li>
        </ul>
      )}
    </section>
  );
}
