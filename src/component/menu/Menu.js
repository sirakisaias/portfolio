import "./menu.scss"
export default function Menu({menuOpen, setMenuOpen}) {
    
    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    <li onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="#intro"> Home</a>
                    </li>
                    <li onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="#portfolio"> Portfolio</a>
                    </li>
                    <li onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="#projects"> Projects</a>
                    </li>
                    <li onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="#contact"> Contact</a>
                    </li>
                    <li onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="#footer"> Footer</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
