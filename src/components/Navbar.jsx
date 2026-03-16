import { useState, useRef, useEffect } from "react"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)

    const scrollToSection = (id) => {

        const section = document.getElementById(id)

        if (!section || !navRef.current) return

        const navbarHeight = navRef.current.offsetHeight
        const elementPosition = section.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })

        setMenuOpen(false)
    }

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false)
            }

        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)

    }, [])

    return (

        <header>
            <nav
                ref={navRef}
                className="w-full bg-white shadow-md sticky top-0 z-50"
                aria-label="Main Navigation"
            >

                <div className="max-w-7xl mx-auto flex items-center px-4 md:px-6 py-3">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("home")
                        }}
                    >
                        <img
                            src="/logo.png"
                            alt="PrimeProp9 Real Estate Consultancy"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            loading="eager"
                            width="160" height="60"
                        />
                    </a>


                    {/* Right Side */}
                    <div className="ml-auto flex items-center gap-6">

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">

                            <li>
                                <button onClick={() => scrollToSection("home")} className="hover:text-orange-500 transition">
                                    Home
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition">
                                    About
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("services")} className="hover:text-orange-500 transition">
                                    Services
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition">
                                    Contact
                                </button>
                            </li>

                        </ul>


                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/918411911464"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp for consultation"
                            className="flex items-center gap-2 bg-orange-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium hover:bg-orange-600 transition whitespace-nowrap"
                        >
                            <FaWhatsapp />
                            Get Consultation
                        </a>


                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden text-xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                    </div>

                </div>


                {/* Mobile Menu */}
                {menuOpen && (

                    <div className="md:hidden absolute left-0 top-full w-full bg-white shadow-lg">

                        <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700">

                            <li>
                                <button onClick={() => scrollToSection("home")} className="text-left hover:text-orange-500">
                                    Home
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("about")} className="text-left hover:text-orange-500">
                                    About
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("services")} className="text-left hover:text-orange-500">
                                    Services
                                </button>
                            </li>

                            <li>
                                <button onClick={() => scrollToSection("contact")} className="text-left hover:text-orange-500">
                                    Contact
                                </button>
                            </li>

                        </ul>

                    </div>

                )}

            </nav>
        </header>

    )
}

export default Navbar