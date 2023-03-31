import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/allActions'

function Registration() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const navigate = useNavigate()
    const [inputField, setInputField] = useState({
        name : '',
        email : '',
        phone : ''
    })
    const inputHandler = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value})
    }
    const submitButton = async ()=>{
        Object.assign(inputField,{id:shortid.generate()})
        // console.log(inputField);
        dispatch(userRegister(inputField))
        // history.push('/home')
        // navigate.push('/home')
        navigate('/home')
    }
  return (
    <div className='container'>
        <div className="row login">
            <h3 className="heading text-center" style={{marginTop : '20px'}}>Add Registration</h3><br />

            <div className="col md-2"></div>
            <div className="col md-6">

                <form autoComplete='off' action="/login-user" method="post">

                        <div className="mb-3">
                            <label className='form-label'>User name</label>
                            <input type="text" className='form-control' name='name' autoComplete='off' value={inputField.name} onChange={inputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Email</label>
                            <input type="email" className='form-control' name='email' autoComplete='off' value={inputField.email} onChange={inputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Phone</label>
                            <input type="text" className='form-control' name='phone' autoComplete='off' value={inputField.phone} onChange={inputHandler}/>
                        </div>

                        <div>
                            <button type='button' className='btn btn-primary' onClick={submitButton}>Add user</button>&nbsp;&nbsp;
                            <Link to='/home'><button type='button' className='btn btn-success' id='addUserBtn'>Back</button></Link>
                        </div>
                </form>
            </div>
        </div>

      </div>
  )
}

export default Registration
