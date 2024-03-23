import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  color?: string;
  active?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
};

export function Button({
  children,
  color = "green",
  className,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      className={classNames(
        "w-full rounded-lg h-[65px] font-semibold text-lg text-[#0B3534]",
        { "bg-green-primary": color === "green" },
        className
      )}
    >
      {children}
    </button>
  );
}
