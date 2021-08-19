import React from 'react'
import { NavLink } from 'react-router-dom'
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for( let i=1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
    }
    return (<>
        <nav aria-label="Page navigation example ml-10">
            <ul className="pagination  d-flex justify-content-md-end ">
                {pageNumbers.map(pageNum => (
                    <li key={pageNum} className="page-item"> 
                    <NavLink onClick={()=>paginate(pageNum)} className="page-link" to="#">{pageNum}</NavLink></li>
                ))}
                
            </ul>
        </nav>
        </>
    )
}

export default Pagination
