import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[120px] w-full border p-5 gap-4 border-[#EAECF0] rounded-xl flex flex-col items-start">
      {children}
    </div>
  );
}
