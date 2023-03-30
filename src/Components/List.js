import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/allActions'

function List({user}) {
    const {name,email,phone,id} = user
    const dispatch = useDispatch()
  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td><Link to={`/edit-user/${id}`}><button type='button' className='btn btn-primary'>Edit</button></Link>
                <button type='button' className='btn btn-danger ms-2' onClick={()=>dispatch(deleteUser(id))}>Delete</button>
        </td>
    </tr>
  )
}

export default List
