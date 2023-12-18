import img1 from '../../img/1.JPG'
import img5 from '../../img/5.JPG'
import img6 from '../../img/6.JPG'
import img7 from '../../img/7.JPG'
import img8 from '../../img/8.JPG'
import img9 from '../../img/9.JPG'
import img10 from '../../img/10.JPG'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Brands(){
    var settings = {
        
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
      };
    return(
        <section className="w-[90%] mt-10 flex flex-wrap items-center justify-center">
            <div className="w-full ">
            <Slider {...settings} className=' '>
                <figure className=''><img className='' src={img1} alt="" /></figure>
                <figure className=''><img className='' src={img5} alt="" /></figure>
                <figure className=''><img className='' src={img6} alt="" /></figure>
                <figure className=''><img className='' src={img7} alt="" /></figure>
                <figure className=''><img className='' src={img8} alt="" /></figure>
                <figure className=''><img className='' src={img9} alt="" /></figure>
                <figure className=''><img className='' src={img10} alt="" /></figure>
            </Slider>
            </div>
            <div className='w-[180px] h-[50px] mt-6 font-bold text-[#00bf6f] hover:border-[#00bf6f] transition duration-500 cursor-pointer rounded-full border-2 border-[#dfdfdf] flex justify-center items-center'>مشاهده همه</div>

        </section>
    )
}

