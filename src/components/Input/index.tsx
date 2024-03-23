import classNames from "classnames";

type Props = {
  placeholder: string;
  type?: string;
  className?: string;
};

export function Input({
  placeholder,
  type = "text",
  className,
  ...props
}: Props) {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={classNames(
        "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50",
        className
      )}
    />
  );
}
