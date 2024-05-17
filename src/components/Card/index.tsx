import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import useResponsive from "@/hooks/useResponsive";

export function Card({ urlImg, urlImg2 }: { urlImg: string; urlImg2: string }) {
  const responsive = useResponsive();
  const desktop = responsive === "desktop";
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect={"coverflow"}
      grabCursor={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        modifier: 1,
      }}
      slidesPerView={1.1}
      initialSlide={0}
      centeredSlides
      centeredSlidesBounds
      spaceBetween={10}
      className="h-[300px] lg:h-[400px] w-full bg-white mt-10 lg:mt-0 lg:p-1"
    >
      <SwiperSlide className="bg-white lg:p-1">
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg}
            loading="lazy"
            draggable={false}
            className="object-cover object-center bg-center w-full border-l-0 lg:border-l-2 h-full border-2 border-[#186B94] rounded-r-2xl lg:rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white lg:p-1">
        <img
          alt="logo"
          src={urlImg2}
          loading="lazy"
          draggable={false}
          className="object-cover object-center w-full border-r-0 lg:border-r-2 h-full rounded-l-2xl lg:rounded-lg border-2 border-[#186B94]"
        />
      </SwiperSlide>
    </Swiper>
  );
}
