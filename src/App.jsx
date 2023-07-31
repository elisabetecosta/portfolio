import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App