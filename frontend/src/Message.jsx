import React from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Message() {
  return (
    <>
    <tr>
        <td>{Sno}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.message}</td>
        <td>
            <Link to = "" onclick={(e) => handleDelete(e, data._id)}> <DeleteIcon/></Link>
            ||
            <Link to = {`/edit/${data._id}`}><EditIcon /></Link>
        </td>
    </tr>
    </>
  )
}

export default Message
