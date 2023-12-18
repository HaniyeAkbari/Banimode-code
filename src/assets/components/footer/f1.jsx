import bg from '../../img/newsletter.svg'

export default function Email(){
return(
    <section className="w-[90%] mt-5 flex flex-wrap items-center justify-center " >
        <div  className='w-full bg-footer bg-no-repeat text-center flex-wrap  mt-5 flex justify-center items-center h-[50vh] '>
           <div className='w-full'>
           <h2 className='text-2xl font-bold p-2'>ثبت نام در خبرنامه بانی مد</h2>
            <h4 className=' p-2'>اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید</h4>
           </div>
           <div className='w-full flex justify-center flex-wrap py-3'>
            <input placeholder='آدرس ایمیل شما' type="text" className='w-[400px] text-sm font-bold mx-5 px-3 h-[60px] rounded-full focus:outline-none p-2 bg-stone-200' />
            <button className='w-[130px] h-[60px] mt-5 sm:mt-0 bg-[#00bf6f] hover:bg-[#25a26e] flex justify-center font-bold items-center text-white rounded-full'>ارسال<i className='bi bi-arrow-left ms-2 flex items-center'></i></button>
            </div>
        </div>
    </section>
)
}