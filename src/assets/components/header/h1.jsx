export default function TopHead() {
    return (
      <section className="w-full flex justify-end bg-[rgb(240,240,240)] ">
        <div className="flex md:w-[58%] w-full md:h-[70px] h-[50px] items-center justify-between">
          <div className=" text-lg md:text-2xl cursor-pointer bg-transparent h-full flex items-center">
            <span className=" animate-flash1  text-stone-200 p-1 drop-shadow-2xl ">تا</span>
            <span className=" animate-flash2  text-stone-200 p-1 drop-shadow-2xl ">70%</span>
            <span className=" animate-flash3  text-stone-200 p-1 drop-shadow-2xl ">تخفیف</span>
          </div>
          <div className="border-2 border-[#ff4500] rounded-full bg-transparent flex items-center sm:me-11 md:me-24 me-2">
            <h3 className="p-1 text-lg md:text-2xl text-[#ff4500] cursor-pointer">
              <span className=" font-bold ">خرید</span>
              <span >
                <i className=" animate-fade-in1 bi bi-chevron-compact-left"></i>
                <i className=" animate-fade-in2  bi bi-chevron-compact-left"></i>
                <i className=" animate-fade-in3  bi bi-chevron-compact-left"></i>
              </span>
            </h3>
          </div>
        </div>
      </section>
  
    )
  }