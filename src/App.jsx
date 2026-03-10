import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Services from "./sections/Services"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App