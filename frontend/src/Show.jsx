import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';
import Message from './Message';

function Show() {
    const [data, setData] = useState("")
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http:localhost:8000/showData")
            const result = await response.json()
            setData(result)
        }
        fetchData();
    }, [])
    return (
        <>
        <main>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.length > 0 ? (
                data.map((dt, index) => {
                  return (
                    <Message
                      key={index}
                      data={dt}
                      sno={sno++}
                      handleDelete={handleDelete}
                    />
                  );
                })
              ) : (
                <tr>
                  <th colSpan="5">No Messages to Show</th>
                </tr>
              )}
                </tbody>
                </table>

            </div>
        </main>
        </>
    )
        
}

export default Show
