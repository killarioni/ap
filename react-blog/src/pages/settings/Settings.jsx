import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar"

export default function Settings (){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Accaunt</span>
                    <span className="settingsDeleteTitle">Delete Your Accaunt</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settigsPP">
                        <img className="settigsPPImg" src="./images/image_1.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="text" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Usarname</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}