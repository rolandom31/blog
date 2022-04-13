import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"
import "./sidebar.css"
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get('/categories');
            setCats(res.data);
        }
        getCats();
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <motion.img className="sidebarImage" src={'/images/rolaquils-web.png'} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link to= {`/?cat=${c.name}`} className="link">
                     <motion.li className="sidebarListItem"whileHover={{ scale: 1.1 }}>{c.name}</motion.li>
                    </Link>
                   
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow me!</span>
            <motion.div className="sidebarSocial">
                <a className="sidebarIcon" href="https://instagram.com/rolaquils"><motion.i className=" fa-brands fa-instagram"whileHover={{ scale: 1.1 }}></motion.i> </a>
                <a className="sidebarIcon" href="https://www.linkedin.com/in/rolandom31"><motion.i className=" fa-brands fa-linkedin-in"whileHover={{ scale: 1.1 }}></motion.i></a>
                <a className="sidebarIcon" href="https://open.spotify.com/user/1283286273?si=97e8bc30ae1e475c"><motion.i className=" fa-brands fa-spotify"whileHover={{ scale: 1.1 }}></motion.i></a>
                <a className="sidebarIcon" href="https://github.com/rolandom31"><motion.i className="fa-brands fa-github-alt"whileHover={{ scale: 1.1 }}></motion.i> </a>
            </motion.div>
        </div>
    </div>
  )
}
