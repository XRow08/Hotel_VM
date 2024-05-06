import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  bgColor: "purple" | "white" | "blue" | "black";
  active?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  width?: string
};

export function Button({
  children,
  bgColor,
  className,
  type = "button",
  onClick,
  disabled,
  loading,
  width = "w-full"
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        `rounded-lg h-[44px] font-semibold text-lg active:scale-95 transition-all duration-300 ease-in-out ${width}`,
        { "bg-white text-black": bgColor === "white" },
        { "bg-purple text-white": bgColor === "purple" },
        { "bg-blue text-black": bgColor === "blue" },
        { "bg-[#2A2D34] text-[#98A2B3]": bgColor === "black" },
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
