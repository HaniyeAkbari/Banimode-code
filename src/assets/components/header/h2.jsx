import logo from './../../img/banilogo.svg'

export default function MidHead({bag}) {

    return (
      <section className="w-[90%] h-[70px] flex flex-wrap justify-between mt-2">
        <div className=" md:w-1/5 w-1/2 flex items-center justify-evenly text-2xl order-0 md:order-0">
          <i className="bi bi-bag hover:text-[#00bf6f] transition duration-500 cursor-pointer relative"><div className='absolute top-0 left-[-43%] w-[25px] h-[25px] rounded-full flex justify-center items-center text-white text-xs pt-1 font-josefin bg-red-600 opacity-0 bag' >{bag}</div> </i>
          <i className="bi bi-wallet2 hover:text-[#00bf6f] transition duration-500 cursor-pointer"> </i>
          <i className="bi bi-heart hover:text-[#00bf6f] transition duration-500 cursor-pointer"> </i>
          <i className="bi bi-person-circle hover:text-[#00bf6f] transition duration-500 cursor-pointer"> </i>
        </div>
        <div className="border-black md:w-[49%] w-full flex items-center h-full relative order-2 md:order-1">
          <input type="search" name="search" className=" cursor-pointer outline-none bg-stone-100 w-full h-3/4 rounded-full px-10 " placeholder="جست و جو میان 700 برند معتبر" />
          <i className="bi bi-search absolute right-2 text-xl top-[50%] translate-y-[-50%]"></i>
        </div>
  
        <figure className="h-full md:w-[30%] w-1/2 border-black justify-end flex items-center order-1 md:order-2">
          <img src={logo}  alt="" />
        </figure>
      </section>
    )
  }