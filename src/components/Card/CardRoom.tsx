import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function CardRoom({
  urlImg,
  urlImg2,
  urlImg3,
  urlImg4,
  urlImg5,
}: {
  urlImg: string;
  urlImg2: string;
  urlImg3: string;
  urlImg4: string;
  urlImg5: string;
}) {
  return (
    <Swiper
      grabCursor={true}
      slidesPerView={1.1}
      initialSlide={1}
      centeredSlides
      centeredSlidesBounds
      spaceBetween={10}
      className="h-[300px] w-full bg-white mt-10"
    >
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-l-0 border-2 border-[#186B94] rounded-r-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg2}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg3}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg4}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <Image
            alt="logo"
            width={50000}
            height={50000}
            src={urlImg5}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-2xl"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
