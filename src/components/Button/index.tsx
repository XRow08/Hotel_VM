import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  color?: string;
  active?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

export function Button({
  children,
  color = "green",
  className,
  type = "button",
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
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
