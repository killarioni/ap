import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & node</span>
                <span className="headerTitleLg">blog</span>
            </div>
            <img className="headerImg" src="/images/header.jpg " alt="" />
        </div>
    )
}