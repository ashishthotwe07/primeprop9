import { useState, useRef, useEffect } from "react"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)

    const scrollToSection = (id) => {

        const section = document.getElementById(id)

        if (section && navRef.current) {

            const navbarHeight = navRef.current.offsetHeight

            const elementPosition =
                section.getBoundingClientRect().top + window.scrollY

            const offsetPosition = elementPosition - navbarHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })

            setMenuOpen(false)
        }
    }

    // Close menu when clicking outside
    useEffect(() => {

        const handleClickOutside = (event) => {

            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false)
            }

        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [])

    return (

        <nav
            ref={navRef}
            className="w-full bg-white shadow-md sticky top-0 z-50"
        >

            <div className="max-w-7xl mx-auto flex items-center px-4 md:px-6 py-3">

                {/* Logo */}
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <img
                        src="/logo.png"
                        alt="PrimeProp9"
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    />
                </div>

                {/* Right Side */}
                <div className="ml-auto flex items-center gap-6">

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">

                        <button onClick={() => scrollToSection("home")} className="hover:text-orange-500 transition">
                            Home
                        </button>

                        <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition">
                            About
                        </button>

                        <button onClick={() => scrollToSection("services")} className="hover:text-orange-500 transition">
                            Services
                        </button>

                        <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition">
                            Contact
                        </button>

                    </div>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/918411911464"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-orange-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium hover:bg-orange-600 transition whitespace-nowrap"
                    >
                        <FaWhatsapp />
                        Get Consultation
                    </a>

                    {/* Mobile Menu Button */}
                    <button
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

                    <div className="flex flex-col gap-4 px-6 py-6">

                        <button onClick={() => scrollToSection("home")} className="text-left hover:text-orange-500">
                            Home
                        </button>

                        <button onClick={() => scrollToSection("about")} className="text-left hover:text-orange-500">
                            About
                        </button>

                        <button onClick={() => scrollToSection("services")} className="text-left hover:text-orange-500">
                            Services
                        </button>

                        <button onClick={() => scrollToSection("contact")} className="text-left hover:text-orange-500">
                            Contact
                        </button>

                    </div>

                </div>

            )}

        </nav>
    )
}

export default Navbar