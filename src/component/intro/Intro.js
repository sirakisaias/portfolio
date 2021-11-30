import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            strings: ['FrontEnd', 'BackEnd', 'UX/UI' ] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.jpg" alt="profile pic"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sirak Hailemichael</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                    <a href="#portfolio">
                        <KeyboardArrowDown className="keyboardArrowDown"/>
                    </a> 
                </div>
                
            </div>    
        </div>
    )
}
