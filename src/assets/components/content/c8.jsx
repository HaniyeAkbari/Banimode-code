
import img1 from '../../img/1.webp'
import img2 from '../../img/2.webp'
import img3 from '../../img/3.webp'
import img4 from '../../img/4.webp'
import img5 from '../../img/5.webp'
import img6 from '../../img/6.webp'
import img7 from '../../img/7.webp'
import img8 from '../../img/8.webp'
import img9 from '../../img/9.webp'
import img10 from '../../img/10.webp'


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

export default function Magazine() {

  return (
    <section className='w-[90%] flex flex-wrap justify-center items-center md:mt-10 mt-2'>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          270: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          100: {
            slidesPerView: 1,
            spaceBetween: 40
          },
        }}

      >
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img1} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>راهکار های تشخیص چرم مصنوعی از چرم طبیعی</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img2} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>معرفی محوصلات برند یو اس پولو کیدز</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img3} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>معرفی بهترین روش ها برای از بین بردن جای لک</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img4} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>جذاب ترین استایل های هنری</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img5} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>روز مجرد ها چه روزی است ؟</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img6} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>چگونه از شر پوست چرب خلاص شویم؟؟</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img7} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>معرفی محصولات برند نیلی ایندیگو + راهنمای خرید</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img8} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>معرفی محصولات برند کروم + راهنمای خرید</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img9} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>چند مدل آرایش ترند زنانه</figcaption>
        </figure></SwiperSlide>
        <SwiperSlide><figure className="group hover:cursor-pointer">
          <img src={img10} alt="" />
          <figcaption className='group-hover:text-[#00bf6f] transition duration-500 whitespace-nowrap overflow-hidden text-ellipsis p-1'>کیف های جورجینا گران تراند یا محتویات</figcaption>
        </figure></SwiperSlide>
      </Swiper>
      <div className='w-[180px] h-[50px] -mt-5 md:mt-0 font-bold text-[#00bf6f] hover:border-[#00bf6f] transition duration-500 cursor-pointer rounded-full border-2 border-[#dfdfdf] flex justify-center items-center'>مشاهده همه</div>
    </section>
  );
}
