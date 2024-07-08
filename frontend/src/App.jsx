import React, { useEffect, useState } from 'react'
import Blog from './Blog';

function App() {
  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/getblogs")
    .then((response)=> response.json())
    .then((result)=> {
      console.log(result)
      setBlogs(result)
    })
  })
  return (
    <>
    <main className='flex flex-wrap'>
    {blogs.length > 0
          ? blogs.map((blog, index) => {
              return <Blog key={index} blog={blog} />;
            })
          : ""}
    </main>
    </>
  )
}

export default App
