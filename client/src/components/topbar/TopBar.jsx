import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css"



export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF= "http://localhost:5003/images";

  const handleLogout =  ()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className='top'>
        <div className="topLeft">
        <a className="topIcon" href="https://instagram.com/rolaquils"> <i className=" fa-brands fa-instagram"></i> </a>
        <a className="topIcon" href="https://www.linkedin.com/in/rolandom31"> <i className="fa-brands fa-linkedin-in"></i></a>
        <a className="topIcon" href="https://open.spotify.com/user/1283286273?si=97e8bc30ae1e475c">  <i className=" fa-brands fa-spotify"></i></a>
        <a className="topIcon" href="https://github.com/rolandom31"> <i className=" fa-brands fa-github-alt"></i> </a>
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
                <li className="topListItem" onClick={handleLogout}>
                {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="settings">
             <img 
              className="topImage"
              src="https://unsplash.it/id/0/1080/720" alt="" />
            </Link>
             
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
