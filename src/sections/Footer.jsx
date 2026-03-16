import {
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* BRAND */}
                    <div>

                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.png"
                                alt="PrimeProp 9 Real Estate Consultancy Pune"
                                className="h-10"
                                loading="lazy"
                            />

                            <h2 className="text-gray-900 text-lg font-semibold">
                                PrimeProp 9
                            </h2>
                        </div>

                        <address className="flex items-start gap-2 text-sm text-gray-600 not-italic">

                            <FaMapMarkerAlt
                                className="mt-1 text-orange-500"
                                aria-hidden="true"
                            />

                            <p>
                                Office No. 202, B Building, 2nd Floor,
                                Bharat Bhavan, 1306 Shukrawar Peth,
                                Opp. Vidya Sahakari Bank, Pune – 411002
                            </p>

                        </address>

                    </div>


                    {/* CONTACT */}
                    <div>

                        <h3 className="text-gray-900 font-semibold mb-5 text-lg">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-600">

                            <a
                                href="tel:+918411911464"
                                className="flex items-center gap-3 hover:text-orange-500 transition"
                            >
                                <FaPhoneAlt className="text-orange-500" aria-hidden="true" />
                                +91 8411911464
                            </a>

                            <a
                                href="mailto:primeprop9@gmail.com"
                                className="flex items-center gap-3 hover:text-orange-500 transition"
                            >
                                <FaEnvelope className="text-orange-500" aria-hidden="true" />
                                primeprop9@gmail.com
                            </a>

                            <a
                                href="https://wa.me/918411911464"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 hover:text-orange-500 transition"
                            >
                                <FaWhatsapp className="text-orange-500" aria-hidden="true" />
                                Chat on WhatsApp
                            </a>

                        </div>

                    </div>


                    {/* SOCIAL */}
                    <div>

                        <h3 className="text-gray-900 font-semibold mb-5 text-lg">
                            Follow Us
                        </h3>

                        <p className="text-sm text-gray-600 mb-4">
                            Stay connected with us on social media.
                        </p>

                        <div className="flex gap-4">

                            <a
                                href="https://www.facebook.com/primeprop9.primeprop9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PrimeProp 9 Facebook"
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/primeprop9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PrimeProp 9 Instagram"
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/primeprop9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PrimeProp 9 LinkedIn"
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} PrimeProp 9. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer