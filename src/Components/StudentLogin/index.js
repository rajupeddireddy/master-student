
import {Component} from "react"

import {redirect} from "react-router-dom"

import "./student.css"

class StudentLogin extends Component{
    state = {username: "", password: "", usernameErr: "", passwordErr: ""}

    onFormSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state 
        if (username === ""){
            this.setState({usernameErr: "*Reqired"})
        }
        if (password === ""){
            this.setState({passwordErr: "*Required"})
        }
        else{
             redirect("/calculations")
        }
        
    }

    onUsernameChange = (event) => {
        let usernameInput = event.target.value;
        if (usernameInput === ""){
            this.setState({errMsg: "*Required"})
            return
        }
        this.setState({username: usernameInput, usernameErr: ""})
        
    }

    onPasswordChange = (event) => {
        let passwordInput = event.target.value;
        if (passwordInput === ""){
            this.setState({passwordErr: "*Required"})
            return
        }
        this.setState({password: passwordInput, passwordErr: ''})
       }

    render(){
        const {username, password, usernameErr, passwordErr} = this.state
      return (
    <div className='st-login-page-container'>
        <form className='st-login-form' onSubmit = {this.onFormSubmit}>
            <p className='st-label-text'>Usename</p>
            <input className = "st-input-element" value = {username} onChange = {this.onUsernameChange} placeholder = "Enter Username"/>
            {usernameErr !== "" && <p className="st-err-msg">{usernameErr}</p>}
            <p className='st-label-text'>Password</p>
            <input className = "st-input-element" value = {password} onChange = {this.onPasswordChange} type = "password" placeholder = "Enter Password"/>
            {passwordErr !== "" && <p className="st-err-msg">{passwordErr}</p>}
            <button className='st-login-btn' type = "submit">Login</button>
        </form>
    </div>
)
}
}

export default StudentLogin;