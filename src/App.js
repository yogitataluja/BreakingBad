import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './Components/Posts'
import Pagination from './Components/Pagination'
import logo from './images/logo.png'
import Search from './Components/Search'
const App = () => {
  const [posts, setposts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)
  const[query, setQuery]= useState([""])
  
  
  useEffect(() => {
    const fetchpost = async () => {
      setLoading(true)
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setposts(response.data)
      setLoading(false)

    }
    fetchpost()
  }, [query])

  // pagination(10)
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  // change post with page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <>
      <header className="center">
        <img src={logo} alt="logo" />
        <Search getQuery={(e)=> setQuery(e)} />
      </header>
      <div className="container main_div mt-3">
        <div className="row ">
        <Posts  posts={currentPosts} loading={loading} />
        </div>
        <Pagination  postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </>
  )
}

export default App

