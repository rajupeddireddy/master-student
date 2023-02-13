import {Component} from "react"

import {Navigate} from "react-router-dom"

import "./index.css"

class MasterLogin extends Component{
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
            const {history} = this.props 
          
            console.log(history)
        
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
    <div className='login-page-container'>
        <form className='login-form' onSubmit = {this.onFormSubmit}>
            <p className='label-text'>Employee Id</p>
            <input className = "input-element" value = {username} onChange = {this.onUsernameChange} placeholder = "Enter Username"/>
            {usernameErr !== "" && <p className="err-msg">{usernameErr}</p>}
            <p className='label-text'>Password</p>
            <input className = "input-element" value = {password} onChange = {this.onPasswordChange} type = "password" placeholder = "Enter Password"/>
            {passwordErr !== "" && <p className="err-msg">{passwordErr}</p>}
            <button className='login-btn' type = "submit">Login</button>
        </form>
    </div>
)
}
}

export default MasterLogin;