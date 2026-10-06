import Image from "next/image";

export default function Footer() {
    const whatsappNumber = "+27827807396";
    const phoneNumber = "+27113625832";
    const cellNumber = "+27827807396";
    const emailAddress = "admin@zatoeng.co.za";

    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1. Brand and Details */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                        <Image 
                            src="./Zato Engineering Logo.png"
                            alt="Zato Engineering Logo"
                            width={40}
                            height={55}
                            className="object-contain filter brightness-110 h-auto"
                        />
                        <div className="flex flex-col justify-center items-start tracking-tight font-sans">
                            <span className="text-xl font-black uppercase text-zato-gold leading-none tracking-wide">
                                Zato
                            </span>
                            <span className="text-xs font-semibold uppercase text-slate-200 tracking-[0.3em] leading-none mt-1">
                                Engineering
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 max-w-sm">
                        Precision grinding, structural machining, and custom engineering solutions built for high-performance durability.
                    </p>
                </div>

                {/* Column 2. Direct Contact Links */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-white font-bold text-lg border-b border-slate-800 pb-2 mb-1">
                        Contact Us
                    </h3>

                    {/* Telephone Link */}
                    <a
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-zato-gold transition-colors duration-200"
                    >
                        <span className="font-semibold">Tel:</span> {phoneNumber}
                    </a>

                    {/* WhatsApp Link */}
                    <a 
                        href={`https://wa.me/${whatsappNumber}?text=Hello%20Zato%20Engineering,%20I%20Have%20an%20Inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                        <span className="font-semibold">WhatsApp</span> <span>Chat with us on WhatsApp</span>
                    </a>

                    {/* Mailto Link */}
                    <a
                        href={`mailto:${emailAddress}?subject=Engineering%20Inquiry`}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-zato-gold transition-colors duration-200"
                    >
                        <span className="font-semibold">Email</span> {emailAddress}
                    </a>
                </div>

                {/* Column 3. Google Maps Location */}
                <div className="flex flex-cols space-y-3">
                    <h3 className="text-white font-bold text-lg border-b border-slate-800 pb-2 mb-1">
                        Our Location
                    </h3>
                    <div className="w-full h-40 rounded-lg overflow-hidden border border-slate-800">
                        {/* This section is for the i-frame link for the exact google maps location */}
                        <iframe
                            title="Zato Engineering Location"
                            src=""
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:-px-8 mt-8 pt-4 border-t border-slate-900 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Zato Engineering. All rights reserved.
            </div>
        </footer>
    );
}