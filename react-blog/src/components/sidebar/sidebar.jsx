import "./sidebar.css"

export default function Sidebar (){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="/images/image_2.jpg" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium saepe fugit, vero illo ut consequatur enim.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">tech</li>
                <li className="sidebarListItem">Style</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-solid fa-square-envelope"></i>
            </div>                
            </div>
        </div>
    )
}