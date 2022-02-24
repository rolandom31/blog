import { Link } from "react-router-dom";
import "./topbar.css"


export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i> 
            <i className="topIcon fa-brands fa-linkedin-in"></i>
            <i className="topIcon fa-brands fa-spotify"></i>
            <i className="topIcon fa-brands fa-github-alt"></i> 
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/about">About</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/contact">Contact</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">Write</Link>
                </li>
                <li className="topListItem">
                {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
              <img 
              className="topImage"
              src={'/images/rolaquils-web.png'} alt="" />
          ) :(
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
                
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">Register</Link>
              </li>
            
            </ul>
          )

          }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  
  )
}
