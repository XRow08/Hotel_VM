import { useRouter } from "next/navigation";

export function BackButton({ link }: { link: string }) {
  const { push } = useRouter();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => push(link)}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M15.8333 9.99996H4.16663M4.16663 9.99996L9.99996 15.8333M4.16663 9.99996L9.99996 4.16663"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="font-semibold">Back</h1>
    </div>
  );
}
