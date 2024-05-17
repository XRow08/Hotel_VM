import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

export function CardTriple({
  urlImg,
  urlImg2,
  urlImg3,
}: {
  urlImg: string;
  urlImg2: string;
  urlImg3: string;
}) {
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
      <SwiperSlide className="lg:p-1">
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-l-0 lg:border-l-2 border-2 border-[#186B94] rounded-r-2xl lg:rounded-xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden h-full">
          <img
            alt="logo"
            src={urlImg2}
            loading="lazy"
            draggable={false}
            className="object-cover w-full h-full border-2 border-[#186B94] rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="lg:p-1">
        <img
          alt="logo"
          src={urlImg3}
          loading="lazy"
          draggable={false}
          className="object-cover w-full h-full border-r-0 lg:border-r-2 rounded-l-2xl lg:rounded-xl border-2 border-[#186B94]"
        />
      </SwiperSlide>
    </Swiper>
  );
}
