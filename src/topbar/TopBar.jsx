import "./topbar.css"


export default function TopBar() {
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
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className="topRight">
        <img 
        className="topImage"
        src={'/images/rolaquils-web.png'} alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
