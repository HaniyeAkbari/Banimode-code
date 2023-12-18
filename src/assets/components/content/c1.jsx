import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sport from '../../img/sport.webp'
import elec from '../../img/elec.webp'
import jwe from '../../img/jwe.JPG'
import tool from '../../img/tool1.JPG'
import games from '../../img/games2.JPG'
import shoes from '../../img/shoes2.JPG'




export default function Con1({catShow}) {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,

  };
  return (
    <section className="w-[90%] mt-2 flex flex-wrap justify-evenly">
      <div className="lg:w-[48%] w-full mt-5  lg:min-h-[40vh]  ">
        <Slider {...settings} className="h-full  w-full overflow-hidden">
          
          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer  ">
            <img onClick={catShow} data-cat='Electronics' className="object-cover lg:h-[300px] h-[250px] md:h-[350px] w-full rounded-2xl " src={elec} alt="" />
          </figure>

          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer ">
            <img onClick={catShow}  className="object-cover lg:h-[300px] h-[250px] md:h-[350px] w-full rounded-2xl" src={sport} alt="" />
          </figure>
          

        </Slider>
      </div>
      <div className="lg:w-[48%]  w-full  lg:min-h-[40vh] mt-2 lg:mt-5">
        <Slider {...settings} className="h-full  w-full overflow-hidden">
          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer ">
            <img onClick={catShow} data-cat='Tools' className=" w-full lg:h-[300px] h-[250px] md:h-[350px] object-cover rounded-2xl " src={tool} alt="" />
          </figure>
          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer ">
            <img onClick={catShow} data-cat='Jewelery' className="object-cover lg:h-[300px] h-[250px] md:h-[350px] w-full rounded-2xl" src={jwe} alt="" />
          </figure>
        </Slider>
      </div>
      <div className=" w-full flex justify-center  lg:h-[70vh] mt-2">
        <Slider {...settings} className="h-full w-full lg:w-[80%] ">
          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer ">
            <img onClick={catShow} data-cat='Shoes' className="object-cover h-[320px] lg:h-[420px] w-full object-center rounded-2xl  " src={shoes} alt=" " />
          </figure>
          <figure  className=" category w-full h-full overflow-hidden rounded-2xl cursor-pointer ">
            <img onClick={catShow} data-cat='Games' className="object-cover h-[320px] lg:h-[420px] w-full object-center rounded-2xl" src={games} alt="" />
          </figure>
        </Slider>
      </div>
    </section>
  );
}