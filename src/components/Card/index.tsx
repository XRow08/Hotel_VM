import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Card({ urlImg, urlImg2 }: { urlImg: string; urlImg2: string }) {
  return (
    <Swiper
      grabCursor={true}
      slidesPerView={1.05}
      className="h-[300px] w-full bg-white mt-10"
    >
      <SwiperSlide>
        <div className="overflow-hidden h-full pr-2">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg}
            loading="lazy"
            draggable={false}
            className="object-cover w-full border-l-0 h-full border-2 border-[#186B94] rounded-r-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="logo"
          width={50000}
          height={50000}
          src={urlImg2}
          loading="lazy"
          draggable={false}
          className="object-cover w-full border-r-0 h-full rounded-l-2xl border-2 border-[#186B94]"
        />
      </SwiperSlide>
    </Swiper>
  );
}
