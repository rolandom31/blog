import { useContext } from "react"
import { useRef } from "react/cjs/react.production.min"
import { Context } from "../../../context/Context"
import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    const {user} = useContext(Context);
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img className="settingsImg" 
                    src={user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                     <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="username" />
                <label >Email</label>
                <input type="email" placeholder="email@email.com" />
                <label >Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
