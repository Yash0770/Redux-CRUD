import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'

import { connect   } from 'react-redux'
import { updateUser, userInfo } from '../redux/allActions'

class EditUser extends Component {
    constructor(props){
      super(props)

      console.log("props", props)

      this.state = {
        name : '',
        email : '',
        phone : '',
        redirect : false
      }
    }  
    componentDidMount(){ 
      console.log("this.props", this.props.myUsers.items);
      
      this.props.getUserDetail(this.props.myUsers.items[1].id) 
    }

    componentDidUpdate(){
        if(this.state.name == ''){
            const { name, email, phone } = this.props.myUsers.user;
            console.log("name", name);
            this.state({
              name: name,
              email: email,
              phone: phone
            })
        }
    }
    inputHandler = (e)=>{
      this.setState({[e.target.name]: e.target.value})
    }
    submitButton = async()=>{
        const newData = Object.assign(this.props.myUsers.user, this.state)
        // console.log(newData);
        this.props.updateUserInfo(newData)
        this.setState({redirect : true})
        // window.location.href = '/home';
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
    myUsers : state.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getUserDetail : (id)=> { (dispatch(userInfo(id))) },
    updateUserInfo : (data)=> { dispatch(updateUser(data)) }

  
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (EditUser)