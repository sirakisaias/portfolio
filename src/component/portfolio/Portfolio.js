import { useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const list =[
        {
            id:"featured",
            title: "Featured",
        },
        {
            id:"web",
            title: "Web App",
        },
        {
            id:"design",
            title: "Design",
        },
        {
            id:"brand",
            title: "Branding",
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/profile.jpg" alt="profile "/>
                    <h3>First App</h3>
                </div>
                <div className="item">
                    <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png" alt=""/>
                    <h3>Second App</h3>
                </div>
                <div className="item">
                    <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png" alt=""/>
                    <h3>Third App</h3>
                </div>
                <div className="item">
                    <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png" alt=""/>
                    <h3>Fourth App</h3>
                </div>
                <div className="item">
                    <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png" alt=""/>
                    <h3>Fifth App</h3>
                </div>
                <div className="item">
                    <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png" alt=""/>
                    <h3>Sixth App</h3>
                </div>
            </div>
        </div>
    )
}
