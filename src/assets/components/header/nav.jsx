export default function Nav({catShow}) {
    let flag = 0

    const show = (e) => {
        let child = Array.from(e.target.children)

        flag++

        if (window.innerWidth < 769) {
            child.forEach((i) => {

                if (flag % 2 == 1) {
                    i.style.display = 'flex'
                } else {
                    i.style.display = 'none'
                }
            })

        }
    }





return (
    <nav className=" w-[90%] mt-2 ">
        <ul className=" w-full flex justify-evenly border-b mt-[70px] md:mt-0 pb-2" >
            <li onClick={show} className="cursor-pointer font-bold text-[#00bf6f]  relative group"> دسته بندی کالاها
                <div className="absolute top-full bg-white left-[-50px] z-40 w-[200px] md:w-[120px] md:left-0 hidden justify-around md:hidden md:group-hover:block shadow-2xl rounded-2xl">
                    <ul className="text-sm w-[80px] pt-2 md:hidden border-l">
                        <li onClick={catShow} data-cat='Clothing' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">مد و فشن</li>
                        <li onClick={catShow} data-cat='Home' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">خانه مد</li>
                        <li onClick={catShow} data-cat='Beauty' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">زیبایی و سلامت</li>
                        <li onClick={catShow} data-cat='Electronics' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">الکترونیک</li>
                        <li onClick={catShow} data-cat='Sports' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">اسپرت</li>
                        <li onClick={catShow} data-cat='Kids' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">کیدز</li>
                        <li onClick={catShow} data-cat='Jewelery' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">جواهرات</li>
                        <li onClick={catShow} data-cat='Games' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">بازی</li>
                        <li onClick={catShow} data-cat='Health' className="category cursor-pointer p-1 text-black hover:text-[#00bf6f] transition duration-300  ">سلامت</li>
                    </ul>
                    <ul className="text-sm w-[80px] pt-2 md:w-full  ">
                        <li onClick={catShow} data-cat='Shoes' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">کفش</li>
                        <li onClick={catShow} data-cat='Computers' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">کامپیوتر</li>
                        <li onClick={catShow} data-cat='Tools' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">ابزار</li>
                        <li onClick={catShow} data-cat='Books' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">کتاب</li>
                        <li onClick={catShow} data-cat='Music' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">موزیک</li>
                        <li onClick={catShow} data-cat='Movies' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">فیلم</li>
                        <li onClick={catShow} data-cat='Garden' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">باغبانی</li>
                        <li onClick={catShow} data-cat='Baby' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">کودک</li>
                        <li onClick={catShow} data-cat='Grocery' className="hover:text-[#00bf6f] category md:p-2 p-1 text-black transition duration-500">خوار و بار</li>
                    </ul>
                </div>

            </li>
            <li onClick={catShow} data-cat='Clothing' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">مد و فشن</li>
            <li onClick={catShow} data-cat='Home' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">خانه مد</li>
            <li onClick={catShow} data-cat='Beauty' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">زیبایی و سلامت</li>
            <li onClick={catShow} data-cat='Electronics' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">الکترونیک</li>
            <li onClick={catShow} data-cat='Sports' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">اسپرت</li>
            <li onClick={catShow} data-cat='Kids' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">کیدز</li>
            <li onClick={catShow} data-cat='Jewelery' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">جواهرات</li>
            <li onClick={catShow} data-cat='Games' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">بازی</li>
            <li onClick={catShow} data-cat='Health' className="cursor-pointer hover:text-[#00bf6f] category transition duration-300 hidden md:block ">سلامت</li>
            <li onClick={show} className="cursor-pointer relative text-[#00bf6f]  group font-bold ">فروش ویژه
                <ul className="absolute bg-white z-50 text-sm top-full pt-2 w-[150%] flex-wrap md:w-[250%] md:left-[-90%] hidden md:group-hover:block rounded-2xl shadow-2xl">
                    <li className="hover:text-[#00bf6f] p-1 md:p-2  category text-black transition duration-500">شگفت انگیز</li>
                    <li className="hover:text-[#00bf6f] p-1 md:p-2  category text-black transition duration-500">2=5 لباس زیر</li>
                    <li className="hover:text-[#00bf6f] p-1 md:p-2  category text-black transition duration-500">اوتلت</li>
                    <li className="hover:text-[#00bf6f] p-1 md:p-2  category text-black transition duration-500">50% تخفیف بیشتر در سبد خرید زیلان</li>
                </ul>
            </li>
        </ul>
    </nav>
)
}