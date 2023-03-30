import React, {Component} from 'react'
import { Link, redirect } from 'react-router-dom'

import { connect, Connect } from 'react-redux'
import { userInfo } from '../redux/allActions'

class EditUser extends Component {
    constructor(props){
      super(props)

      this.state = {
        name : '',
        email : '',
        phone : '',
        redirect : false
      }
    }  
    componentDidMount(){ 
      this.props.getUserDetail(this.props.match.params.id)
        // console.log(this.props);
    }
    componentDedUpdate(){

    }
    inputHandler = (e)=>{
      this.setState({[e.target.name]: e.target.value})
    }
    submitButton = async()=>{

    }
    render(){
      const {name, email, phone} = this.state
      const { redirect } = this.state

      if (redirect) {
        return <redirect to='/home' />
      }

      return (
        <div className="container">
          <div className="row login">
            <h3 className="heading" style={{marginTop: '20px'}}>Edit Registration</h3><br />

            <div className="col md-2"></div>

            <div className="col md-6">

                <form autoComplete='off' action="/loin-user" method='post'>
                  <div className="mb-3">
                    <label className='form-label'>User Name</label>
                    <input type="text" className='form-control' name='name' value={name} onChange={this.inputHandler} />
                  </div>
                  
                  <div className="mb-3">
                    <label className='form-label'>Email</label>
                    <input type="text" className='form-control' name='email' value={email} onChange={this.inputHandler} />
                  </div>

                  <div className="mb-3">
                    <label className='form-label'>Phone</label>
                    <input type="text" className='form-control' name='phone' value={phone} onChange={this.inputHandler} />
                  </div>

                  <div>
                        <button type='button' className='btn btn-primary' onClick={this.submitButton}>Edit user</button>&nbsp;&nbsp;
                        <Link to='/home'><button type='button' className='btn btn-success' id='addUserBtn'>Back</button></Link>
                  </div>

                </form>

            </div>
          </div>
        </div>
      )

    }
}


const mapStateToProps = (state)=>{
  return {
    myUser : state.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getUserDetail : (id)=> (dispatch(userInfo))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (EditUser)