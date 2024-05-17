import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import useResponsive from "@/hooks/useResponsive";

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
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slidesPerView={desktop ? 1.2 : 1.1}
      initialSlide={desktop ? 0 : 1}
      centeredSlides
      centeredSlidesBounds
      spaceBetween={10}
      className="h-[300px] lg:h-[400px] w-full bg-white mt-10 lg:mt-0 lg:p-1"
    >
      <SwiperSlide className="bg-white lg:p-1">
        <img
          alt="logo"
          src={urlImg}
          loading="lazy"
          draggable={false}
          className="object-cover w-full h-full border-l-0 lg:border-l-2 border-2 border-[#186B94] bg-white rounded-r-lg lg:rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg2}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg3}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg4}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white lg:p-1">
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg5}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
