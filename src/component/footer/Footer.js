import "./footer.scss"
import { Person,Mail } from "@material-ui/icons"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-wrapper">
                <div className="left">
                    <div className="container">
                        <Person className="icon"/>
                        <span> +1-341-314-7063</span>
                    </div>
                    <div className="container">
                        <Mail className="icon"/>
                        <span> hailemichaelsirak@gmail.com</span>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
