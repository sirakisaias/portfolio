import Topbar from "./component/topbar/Topbar"
import Intro from "./component/intro/Intro"
import Portfolio from "./component/portfolio/Portfolio"
import Projects from "./component/projects/Projects"
import Contact from "./component/contact/Contact"
import Footer from "./component/footer/Footer"
import './app.scss'

function App() {
  return (
    <div className="app">
        <Topbar/>
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
