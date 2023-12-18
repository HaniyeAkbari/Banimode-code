import { useState } from "react"
import Con1 from "./c1"
import { useEffect } from "react"
import Con2 from "./c2"
import Con3 from "./c3"
import Header from "../header/header"
import Brands from "./c7"
import Con6 from "./c6"
import Magazine from "./c8"


export default function Content() {

    let shopBag = document.getElementsByClassName("bag")[0]


    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage]= useState(4)
    const [bag , setBag]=useState(0)
    const [product, setProduct] = useState([])
    

    let link ='https://653fd22145bedb25bfc14aaa.mockapi.io/store/products'

    const [url, setUrl] = useState(link)

    // *************

    const catShow = (e) => {
        let data = e.target.getAttribute('data-cat')
        setUrl(link + '?category=' + data)
        setCurrentPage(1)
        // 

    }

    const handling = (e)=>{
        e.target.setAttribute('disabled','')
        e.target.innerText='Item Successfully Added'
       setBag(bag+1)
        shopBag.style.opacity=1
      }
      
   




    useEffect(() => {

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                alert('something went wrong')
            }


        }).then(items => {
        
            setProduct(items)
     

        }).catch(error => {

            console.log(error);
        })
    }, [url])

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = product.slice(firstPostIndex , lastPostIndex)

    // *********************************************************************

    return (
        <>
            <Header catShow={catShow} bag={bag} />
            <main className="w-full justify-evenly flex-wrap flex font-ravi" >

                <Con1 catShow={catShow} />

                <Con3  totalPosts={product.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}  />

                 {
                    currentPosts.map((item) => {


                        return (
                            <article key={item.id} className="flex md:w-[40%] w-full mt-8">
                                <Con2 handling={handling} img={item.image} price={item.price} date={item.date} title={item.name} desc={item.desc} material={item.material} />
                            </article>
                        )



                    })
                }
                <Con6/>
                <Brands/> 
                <Magazine/>


            </main>
        </>
    )
}

