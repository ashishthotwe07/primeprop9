import { Suspense, lazy } from "react"
import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"

// Lazy load sections (improves performance)
const Home = lazy(() => import("./sections/Home"))
const About = lazy(() => import("./sections/About"))
const Services = lazy(() => import("./sections/Services"))
const Contact = lazy(() => import("./sections/Contact"))

function App() {

  return (
    <>
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main>

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>

          <section id="home" aria-label="Home Section">
            <Home />
          </section>

          <section id="about" aria-label="About Our Company">
            <About />
          </section>

          <section id="services" aria-label="Our Services">
            <Services />
          </section>

          <section id="contact" aria-label="Contact Information">
            <Contact />
          </section>

        </Suspense>

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App