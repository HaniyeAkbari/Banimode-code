import React from 'react';
import Con4 from './c4';
import Pagination from "./c5"


export default function Filter({totalPosts,postPerPage,setCurrentPage}) {
    

    return (
        <div className="mt-5 border-b-2 flex justify-between items-center w-[90%] px-3">
            <Con4 />
            <Pagination totalPosts={totalPosts} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
            
        </div>
    )
}


// **************************


