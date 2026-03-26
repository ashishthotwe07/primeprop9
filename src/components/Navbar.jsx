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
        <>
            {/* Navbar */}
            <header>
                <nav
                    ref={navRef}
                    className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
                >

                    <div className="max-w-7xl mx-auto flex items-center px-4 md:px-6 py-3">

                        {/* Logo */}
                        <a
                            href="#home"
                            className="flex items-center cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("home")
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="PrimeProp9 Real Estate Consultancy"
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            />
                        </a>

                        {/* Right Side */}
                        <div className="ml-auto flex items-center gap-6">

                            {/* Desktop Nav */}
                            <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">

                                {["home", "about", "services", "contact"].map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => scrollToSection(item)}
                                            className="hover:text-orange-500 transition cursor-pointer capitalize"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}

                            </ul>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918411911464"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-orange-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium hover:bg-orange-600 transition whitespace-nowrap cursor-pointer"
                            >
                                <FaWhatsapp />
                                Get Consultation
                            </a>

                            {/* Mobile Button */}
                            <button
                                className="md:hidden text-xl cursor-pointer"
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

                                {["home", "about", "services", "contact"].map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => scrollToSection(item)}
                                            className="text-left hover:text-orange-500 cursor-pointer capitalize"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    )}

                </nav>
            </header>

            {/* Spacer to prevent content hiding under fixed navbar */}
            <div className="h-17.5 md:h-20"></div>
        </>
    )
}

export default Navbar