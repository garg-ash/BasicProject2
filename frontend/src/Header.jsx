import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
    <h2>
      <Link to = '/' className='text-black text-xl font-black'>
      Full Stack App</Link>
    </h2>
    <input type="text" placeholder='Search Term' className='' />
    <nav>
    <ul className='flex flex-end'>
        <li>
        <Link to = "addblog" className='text-white text-m bg-slate-400 p-1 rounded hover:text-black hover:bg-zinc-300 mx-2'>Add Blog</Link>
        </li>
        <li>
            <Link to = "/addmessage" className='text-white text-m bg-slate-400 p-1 rounded hover:text-black hover:bg-zinc-300 mx-2'>Add Message</Link>
        </li>
        <li>
            <Link to = "/show" className='text-white text-m bg-slate-400 p-1 rounded hover:text-black hover:bg-zinc-300 mx-2'>Show Message</Link>
        </li>
    </ul>
    </nav>
    </header>
    </>
  )
}

export default Header
