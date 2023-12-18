export default function Pagination({totalPosts,postPerPage,setCurrentPage}){
    let pages = []
    for(let i = 1 ; i<= Math.ceil(totalPosts/postPerPage) ; i++){
        pages.push(i)
    }

    
    function handling(e){
        let buttons = document.querySelectorAll('.pageNum')
        
        
        buttons.forEach((btn)=>{
            btn.style.background='white'
            btn.style.color='#00bf6f'
        })
        setCurrentPage(e.target.innerText)
        e.target.style.background='#00bf6f'
        e.target.style.color='white'
    }
    return(
        <div className="flex flex-wrap w-[70%] md:w-[50%] items-center justify-center font-josefin" >
            {
                pages.map((num,index)=>{
                    return(
                        <button className="pageNum duration-300 transition first-of-type:bg-[#00bf6f] first-of-type:text-white text-[#00bf6f] p-2 m-1 h-[15px] w-[15px] md:w-[30px] md:h-[30px] flex text-xs md:text-base justify-center items-center rounded-full  active:bg-[#00bf6f]"  key={index} onClick={handling}>{num}</button>
                    )
                })
            }
        </div>
    )
}