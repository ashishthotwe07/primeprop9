import { FaWhatsapp } from "react-icons/fa"

function Home() {

    const scrollToServices = () => {
        const section = document.getElementById("services")
        if (!section) return
        section.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="w-full bg-gray-50 pt-8 pb-14 md:pt-16 md:pb-20">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center order-1 md:order-2">

                        <img
                            src="/hero.webp"
                            alt="PrimeProp 9 Real Estate Consultancy Pune"
                            width="800"
                            height="600"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="order-2 md:order-1 text-center md:text-left">

                        {/* BRAND */}
                        <p className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            PrimeProp 9
                        </p>

                        {/* MAIN HEADING */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Land & Real Estate
                            <span className="text-orange-500 block">
                                Liaisoning & Consultancy
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                            PrimeProp 9 provides professional land and property consultancy,
                            offering liaisoning, approvals, documentation assistance and
                            development guidance under one roof.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-7 flex gap-3 justify-center md:justify-start">

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/918411911464"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp for property consultation"
                                className="flex items-center gap-2 bg-orange-500 text-white 
                                px-3 py-2 text-sm md:px-5 md:py-3 md:text-base
                                rounded-md font-medium hover:bg-orange-600 transition"
                            >
                                <FaWhatsapp />
                                Get Consultation
                            </a>

                            {/* View Services Button */}
                            <button
                                onClick={scrollToServices}
                                className="px-3 py-2 text-sm md:px-5 md:py-3 md:text-base
                                border border-orange-500 text-orange-500 rounded-md
                                hover:bg-orange-50 transition cursor-pointer"
                            >
                                View Services
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home