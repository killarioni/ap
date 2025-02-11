import { Link } from "react-router-dom/cjs/react-router-dom.min"
import"./register.css"

export default function Register (){
    return(
        <div className="register" >
                <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Usarname</label>
                <input type="text" className="registerInput" placeholder="Enter your usarname..."/>
                <label >Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..."/>
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."/>
            <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
            </button>

        </div>
    )
}