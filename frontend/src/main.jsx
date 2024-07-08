import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Show from './Show.jsx'
import Header from './Header.jsx';
import Edit from './Edit.jsx'
import Addblog from './Addblog.jsx';
import AddMessage from './AddMessage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 < Header />
 <Routes>
    <Route path='/' element = {<App />} />
    <Route path='/show' element = {<Show />} />
    <Route path="/edit/:idToEdit" element={<Edit />}></Route>
    <Route path='/addblog' element = {<Addblog />} />
    <Route path='/addmessage' element = {<AddMessage />} />
 </Routes>
 </BrowserRouter>
)
