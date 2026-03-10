import {
    FaHandshake,
    FaSearchLocation,
    FaFileSignature,
    FaFire,
    FaLandmark,
    FaMapMarkedAlt
} from "react-icons/fa"

function Services() {

    const services = [
        {
            icon: <FaHandshake />,
            title: "Liaisoning & Consulting",
            desc: "End-to-end solution from location survey to final documentation including sanctioning and construction."
        },
        {
            icon: <FaLandmark />,
            title: "PMRDA / PMC / PCMC Sanctions",
            desc: "Assistance for approvals and sanctions from PMRDA, PMC and PCMC authorities."
        },
        {
            icon: <FaFire />,
            title: "Fire & Environment Clearance",
            desc: "Assistance in obtaining Fire NOC and Environment related clearances."
        },
        {
            icon: <FaFileSignature />,
            title: "Legal Queries & Land Issues",
            desc: "Assistance in resolving legal queries and issues related to Land & Real Estate."
        },
        {
            icon: <FaSearchLocation />,
            title: "Government Office Work",
            desc: "Guidance related to Collector, Commissioner, Talathi and Tahsildar office work related to land."
        },
        {
            icon: <FaMapMarkedAlt />,
            title: "Land Demarcation",
            desc: "Professional assistance for land boundary identification and demarcation."
        }
    ]

    return (
        <section className="w-full bg-gray-50 py-14 md:py-20">

            <div className="max-w-7xl mx-auto px-5">

                <div className="text-center mb-12">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Our <span className="text-orange-500">Services</span>
                    </h2>

                    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                        PrimeProp 9 provides complete liaisoning and consulting services for
                        land and real estate approvals, documentation and development.
                    </p>

                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition"
                        >

                            <div className="text-orange-500 text-xl md:text-2xl mb-3">
                                {service.icon}
                            </div>

                            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">
                                {service.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Services