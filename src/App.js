import Topbar from "./component/topbar/Topbar"
import Intro from "./component/intro/Intro"
import Portfolio from "./component/portfolio/Portfolio"
import Projects from "./component/projects/Projects"
import Contact from "./component/contact/Contact"
import Footer from "./component/footer/Footer"
import Menu from "./component/menu/Menu"
import './app.scss'
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="section">
          <Intro/>
          <Portfolio/> 
          <Projects/>
          <Contact/> 
        </div>
        <Footer/> 
    </div>
  );
}

export default App;
