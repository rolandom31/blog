import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Sign Up</span>
        <form className="registerForm">
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email" />
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Username" />

            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password" />
            <button className="registerButton">Sign up</button>
            <button className="registerLoginBtn">Login</button>
        </form>
    </div>
  )
}
