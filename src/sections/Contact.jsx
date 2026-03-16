import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

function Contact() {

    return (
        <div className="w-full bg-white py-14 md:py-20">

            <div className="max-w-7xl mx-auto px-5">

                {/* Title */}
                <div className="text-center mb-12">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Contact <span className="text-orange-500">PrimeProp 9</span>
                    </h2>

                    <p className="text-gray-600 mt-3 text-sm sm:text-base">
                        Get in touch with us for professional land and real estate consultancy in Pune.
                    </p>

                </div>


                {/* Contact Layout */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Details */}
                    <div className="space-y-6">

                        <address className="not-italic space-y-6">

                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" aria-hidden="true" />
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Office No. 202, B Building, 2nd Floor, Bharat Bhavan <br />
                                    1306 Shukrawar Peth, Opp. Vidya Sahakari Bank <br />
                                    Pune – 411002
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-orange-500 text-xl" aria-hidden="true" />
                                <a
                                    href="tel:+918411911464"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    +91 8411911464
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-orange-500 text-xl" aria-hidden="true" />
                                <a
                                    href="mailto:primeprop9@gmail.com"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    primeprop9@gmail.com
                                </a>
                            </div>

                        </address>


                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918411911464"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with PrimeProp 9 on WhatsApp"
                            className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
                        >
                            <FaWhatsapp />
                            Chat on WhatsApp
                        </a>

                    </div>


                    {/* Google Map */}
                    <div className="w-full h-87.5 rounded-lg overflow-hidden shadow">

                        <iframe
                            title="PrimeProp 9 Office Location in Pune"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.575716912171!2d73.85249465821184!3d18.509787448280356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06d994ab465%3A0x2b6ab28034a9a181!2sBharat%20Bhavan!5e1!3m2!1sen!2sin!4v1773057641460!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact