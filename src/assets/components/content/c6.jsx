import log1 from '../../img/log1.JPG'
import log2 from '../../img/log2.JPG'
import log3 from '../../img/log3.JPG'
import log4 from '../../img/log4.PNG'
import backSh from '../../img/featurebg.PNG'


export default function Con6() {


    return (
        <section className='w-[90%] mt-10 flex flex-wrap items-center sm:justify-evenly justify-center'>
            <figure className='md:w-[25%] relative group lg:w-[20%] sm:w-[45%] w-[75%] flex flex-wrap justify-center p-1 sm:h-[300px]'>
                <img src={log3} className='w-1/2 h-1/2'  alt="" />
                <figcaption className='p-1 flex items-center text-sm md:text-base'>ارسال رایگان برای خریدهای بالای ۱ میلیون و ۴۰۰هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.</figcaption>
                <img src={backSh} className=' absolute bottom-3  opacity-0 transition duration-500 group-hover:opacity-20' alt="" />
            </figure>
            <figure className='md:w-[25%] relative group lg:w-[20%] sm:w-[45%] w-[75%] flex flex-wrap justify-center p-1 h-[300px]'>
                <img src={log2} className='w-1/2 h-1/2'  alt="" />
                <figcaption className='p-1 flex items-center text-sm md:text-base'>تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند.</figcaption>
                <img src={backSh} className=' absolute bottom-3  opacity-0 transition duration-500 group-hover:opacity-20' alt="" />
            </figure>
            <figure className='md:w-[25%] relative group lg:w-[20%] sm:w-[45%] w-[75%] flex flex-wrap justify-center p-1 h-[300px]'>
                <img src={log4} className='w-1/2 h-1/2'  alt="" />
                <figcaption className='p-1 flex items-center text-sm md:text-base'>تا ۷ روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده می‌شود.</figcaption>
                <img src={backSh} className=' absolute bottom-3  opacity-0 transition duration-500 group-hover:opacity-20' alt="" />
            </figure>
            <figure className='md:w-[25%] relative group lg:w-[20%] sm:w-[45%] w-[75%] flex flex-wrap justify-center p-1 h-[300px]'>
                <img src={log1} className='w-1/2 h-1/2'  alt="" />
                <figcaption className='p-1 flex items-center text-sm md:text-base'>میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تلاش با تمام قوا برای ارائه بهترین خدمات به مشتریان عزیز می باشد.</figcaption>
                <img src={backSh} className=' absolute  bottom-3 opacity-0 transition duration-500 group-hover:opacity-20' alt="" />
            </figure>
        </section>
    )
}