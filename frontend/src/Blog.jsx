import React from 'react'
import {Link} from "react-router-dom"

function Blog({blog}) {
  return (
    <>
    <section className='w-1/4 my-2 mx-4 p-2 rounded bg-gray-200'>
    <h3>{blog.title}</h3>
    <p>
        Author: <em>{blog.author}</em>
    </p>
    <p>{blog.content.slice(0, 100) + "..."}</p>
    <Link>Read More</Link>
    </section>
    </>
  )
}

export default Blog
