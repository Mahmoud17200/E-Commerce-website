import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperNavButtons() {
  let swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img src="/svg icons/svgexport-62.svg" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src="/svg icons/svgexport-52.svg" />
      </button>
    </div>
  );
}
