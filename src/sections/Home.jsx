import { FaWhatsapp } from "react-icons/fa"

function Home() {

    const scrollToServices = () => {
        const section = document.getElementById("services")
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="w-full bg-gray-50 pt-8 pb-14 md:pt-16 md:pb-20">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center order-1 md:order-2">

                        <img
                            src="/hero.jpg"
                            alt="PrimeProp 9 Land Consultancy"
                            className="w-full max-w-75 sm:max-w-90 md:max-w-120 object-contain"
                        />

                    </div>


                    {/* TEXT */}
                    <div className="order-2 md:order-1 text-center md:text-left">

                        {/* BRAND */}
                        <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            PrimeProp 9
                        </div>

                        {/* MAIN HEADING */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Land & Real Estate
                            <span className="text-orange-500 block">
                                Liaisoning & Consultancy
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                            PrimeProp 9 is a Land & Real Estate Consultancy company providing
                            property and land related liaisoning, consultancy and assistance
                            under one roof. We offer end-to-end solutions from location survey
                            to final documentation including approvals and development guidance.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-7 flex gap-3 justify-center md:justify-start">

                            <a
                                href="https://wa.me/918411911464"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-md font-medium hover:bg-orange-600 transition"
                            >
                                <FaWhatsapp />
                                Get Consultation
                            </a>

                            <button
                                onClick={scrollToServices}
                                className="px-5 py-3 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition cursor-pointer"
                            >
                                View Services
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Home