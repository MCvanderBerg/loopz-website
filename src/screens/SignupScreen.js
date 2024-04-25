import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Router } from "../types/Types";


const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    const onRegisterClick = () => {
        navigate(Router.Signup)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return(
       <form className="signup" onSubmit={onSubmit}>
        <h3>Signup</h3>
        <label>Email</label>
        <input type="email" onChange={changeEmail} value={email}/>
        <label>Password</label>
        <input type="text" onChange={changePassword} value={password}/>
        <label>UserName</label>
        <input type="text" onChange={changePassword} value={password}/>
        <label>Name</label>
        <input type="text" onChange={changePassword} value={password}/>
        <label>Surname</label>
        <input type="text" onChange={changePassword} value={password}/>
        <label>Phone number</label>
        <input type="text" onChange={changePassword} value={password}/>
        <button>Login</button>
        <button type="button" onClick={onRegisterClick}>Register</button>
       </form> 
    )
}

export default SignupScreen;