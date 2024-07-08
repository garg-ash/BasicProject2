import { useState } from "react"

function AddMessage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const obj = { name, email, message }

    fetch("http://localhost:8000/getdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj)
    })
      .then((response) => {
        return response.json()
      })
      .then((result)=>{
        if(result === "Data Submitted") setResponse(true)

          
          setName("")
          setEmail("")
          setMessage("")  
      });
  }

  return (
    <>
    {response ? <p> Thank you for your message</p> : ""}
      <form action="" onSubmit={handleSubmit} className="bg-slate-400 p-2 rounded m-10">
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => { setName(e.target.value) }} className="w-full p-2 rounded border-spacing-1 my-2" /><br />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full p-2 rounded border-spacing-1 my-2" /><br />
        <textarea name="" id="" placeholder="Enter your message" value={message} onChange={(e) => { setMessage(e.target.value) }} className="w-full p-2 rounded border-spacing-1 my-2"></textarea><br />
        <button type="submit" className="bg-slate-300 p-1 rounded text-black hover:bg-stone-700 hover:text-white">Send Message</button>
      </form>
    </>
  )
}

export default AddMessage
