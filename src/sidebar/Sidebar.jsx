import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImage" src={'/images/rolaquils-web.png'} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Photography</li>
                <li className="sidebarListItem">Films</li>
                <li className="sidebarListItem">Music</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow me!</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i> 
                <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
                <i className="sidebarIcon fa-brands fa-spotify"></i>
                <i className="sidebarIcon fa-brands fa-github-alt"></i> 
            </div>
        </div>
    </div>
  )
}
