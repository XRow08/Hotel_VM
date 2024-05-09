import { Stars } from "./Stars";

export function OneComment({
  name,
  comment,
}: {
  name: string;
  comment: string;
}) {
  return (
    <a
      target="_blank"
      href="https://www.google.com/maps/place/Hotel+Van+Monet/@-24.2832233,-47.4613758,17z/data=!4m21!1m11!3m10!1s0x94c557437f6a9421:0x6e40f5b79d964be8!2sHotel+Van+Monet!5m2!4m1!1i2!8m2!3d-24.2832282!4d-47.4587955!10e7!16s%2Fg%2F11tryfl3v3!3m8!1s0x94c557437f6a9421:0x6e40f5b79d964be8!5m2!4m1!1i2!8m2!3d-24.2832282!4d-47.4587955!16s%2Fg%2F11tryfl3v3?entry=ttu"
      className="bg-white flex flex-col justify-between text-black rounded overflow-hidden h-[220px]"
    >
      <div className="p-3 flex flex-col items-start gap-2">
        <h1 className="font-semibold zilla text-[20px]">{name}</h1>
        <p className="montserrat text-start leading-4">{comment}</p>
      </div>
      <div className="space-y-2">
        <Stars />
        <div className="bg-[#1E92CF] w-full h-4" />
      </div>
    </a>
  );
}
