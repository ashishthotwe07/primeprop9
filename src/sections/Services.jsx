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
            id: "liaisoning",
            icon: FaHandshake,
            title: "Liaisoning & Consulting",
            desc: "End-to-end land and real estate liaisoning solutions from location survey to final documentation, approvals and development guidance."
        },
        {
            id: "sanctions",
            icon: FaLandmark,
            title: "PMRDA / PMC / PCMC Sanctions",
            desc: "Professional assistance for development approvals and sanctions from PMRDA, PMC and PCMC authorities."
        },
        {
            id: "fire",
            icon: FaFire,
            title: "Fire & Environment Clearance",
            desc: "Support in obtaining Fire NOC and environmental clearances required for land and construction projects."
        },
        {
            id: "legal",
            icon: FaFileSignature,
            title: "Legal Queries & Land Issues",
            desc: "Consultation for resolving legal queries and documentation issues related to land and property."
        },
        {
            id: "govt",
            icon: FaSearchLocation,
            title: "Government Office Work",
            desc: "Guidance for land related work with Collector, Commissioner, Talathi and Tahsildar offices."
        },
        {
            id: "demarcation",
            icon: FaMapMarkedAlt,
            title: "Land Demarcation",
            desc: "Professional assistance for accurate land boundary identification and demarcation services."
        }
    ]

    return (
        <div className="w-full bg-gray-50 py-14 md:py-20">

            <div className="max-w-7xl mx-auto px-5">

                {/* Title */}
                <div className="text-center mb-12">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Our <span className="text-orange-500">Services</span>
                    </h2>

                    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                        PrimeProp 9 provides professional liaisoning, land consultancy,
                        approval assistance and documentation support for real estate
                        development in Pune.
                    </p>

                </div>


                {/* Services Grid */}
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                    {services.map((service) => {

                        const Icon = service.icon

                        return (

                            <li
                                key={service.id}
                                className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition"
                            >

                                <div
                                    className="text-orange-500 text-xl md:text-2xl mb-3"
                                    aria-hidden="true"
                                >
                                    <Icon />
                                </div>

                                <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">
                                    {service.desc}
                                </p>

                            </li>

                        )

                    })}

                </ul>

            </div>

        </div>
    )
}

export default Services