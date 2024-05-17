import { OneComment } from "./OneComment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import useResponsive from "@/hooks/useResponsive";

export function Coments() {
  const responsive = useResponsive();
  const desktop = responsive === "desktop";
  return (
    <Swiper
      grabCursor={true}
      centeredSlides
      centeredSlidesBounds
      slidesPerView={desktop ? 3.3 : 1.2}
      spaceBetween={desktop ? 40 : 10}
      initialSlide={2}
      loop
      modules={[Pagination, EffectCoverflow]}
      className="mt-8 w-full h-[240px]"
    >
      <SwiperSlide>
        <OneComment
          name="Adriana Alves Pereira"
          comment={
            "A qualidade do sono aqui é incomparável. A cama é um sonho e o serviço é impecável!"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <OneComment
          name="Aline Tolentino"
          comment={
            "Uma gracinha...  Limpinho, funcionários simpáticos, café da manhã diversificado, 4 minutos da rodoviária. Saí agradecida ao local e às pessoas"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <OneComment
          name="Claudete Nascimento"
          comment={
            "Os proprietários são gentis, receptivos, o quarto bem limpo, o cafe da manhã é muito bem servido"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <OneComment
          name="Tiberio Ribeiro"
          comment={
            "Muito agradável, fomos bem atendidos. O quarto muito limpo, tudo funcionando perfeitamente e por fim o café da manhã muito bom. Recomendo!"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <OneComment
          name="Rogério Da Silva"
          comment={
            "Lugar tranquilo e bem limpo, os funcionários super educados, café da manhã com variedades, o local é de fácil acesso próximo ao pronto socorro, terminal rodoviário e BR 116"
          }
        />
      </SwiperSlide>
    </Swiper>
  );
}
