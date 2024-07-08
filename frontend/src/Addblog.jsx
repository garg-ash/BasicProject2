import React, { useState } from 'react'

function Addblog() {
    const [title, setTitle] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [content, setContent] = useState("")


    function handleSubmit(e){
      e.preventDefault()
      
      const blog = { title, authorName, content }

      fetch("http://localhost:8000/addblog", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(blog)
    })
      .then((response) => {
        return response.json()
      })
      .then((result)=> console.log(result))
  }
  return (
    <>
    
    <form action="" onSubmit={handleSubmit} className="bg-slate-400 p-2 rounded m-10">
        <input type="text" placeholder='Enter Blocks title' value={title} onChange={(e)=> {setTitle(e.target.value)}} className="w-full p-2 rounded border-spacing-1 my-2"/> < br/>
        <input type="text" placeholder='Enter author name' value={authorName} onChange={(e)=> {setAuthorName(e.target.value)}} className="w-full p-2 rounded border-spacing-1 my-2"/> < br/>
        <textarea name="" id="" placeholder='content' value={content} onChange={(e)=> {setContent(e.target.value)}} className="w-full p-2 rounded border-spacing-1 my-2"></textarea>< br/>
        <button className="bg-slate-300 p-1 rounded text-black hover:bg-stone-700 hover:text-white">Add Blog</button>
    </form>
    </>
  )
}

export default Addblog
