function About() {
    return (
        <section className="w-full bg-white py-14 md:py-20">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center">

                        <img
                            src="/about.jpg"
                            alt="PrimeProp Consultancy"
                            className="w-full max-w-[320px] sm:max-w-105 md:max-w-120 object-contain"
                        />

                    </div>


                    {/* TEXT */}
                    <div className="text-center md:text-left">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            About <span className="text-orange-500">PrimeProp 9</span>
                        </h2>

                        <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            PrimeProp 9 is a professional land and real estate consultancy
                            based in Pune. We provide complete assistance for property
                            documentation, government approvals, legal guidance and land
                            related services.
                        </p>

                        <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                            With strong experience in the real estate sector, we help clients
                            simplify complex land procedures and ensure smooth and secure
                            property transactions.
                        </p>


                        {/* HIGHLIGHTS */}
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-500">15+ Years</h3>
                                <p className="text-gray-600">Real Estate Experience</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-500">Pune Market</h3>
                                <p className="text-gray-600">Local Expertise</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-500">Legal Support</h3>
                                <p className="text-gray-600">Documentation Guidance</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-500">End-to-End</h3>
                                <p className="text-gray-600">Consultancy Service</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About