import { Phone, MapPin, Mail } from "lucide-react";

const cards = [
    { icon: Phone, emails: ["georgia.young@example.com", "georgia.young@ple.com"], featured: false },
    { icon: MapPin, emails: ["georgia.young@example.com", "georgia.young@ple.com"], featured: true },
    { icon: Mail, emails: ["georgia.young@example.com", "georgia.young@ple.com"], featured: false },
];


function ContactMain() {

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-24 pt-4 pb-16 bg-[#FAFAFA] lg:bg-white">
                <div className="text-center text-secondary font-semibold">
                    <h6 className="text-xl">VISIT OUR OFFICE</h6>
                    <h2 className="text-4xl">We help small businesses <br /> with big ideas</h2>
                </div>

                <div className="flex flex-col lg:flex-row  items-center justify-center gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center p-20 flex-1 
                                ${card.featured ? "bg-secondary text-white" : "bg-white"}`}
                        >
                            <card.icon size={54} strokeWidth={2} className="text-primary mb-6" />

                            {card.emails.map((email, i) => (
                                <p key={i} className={`text-sm ${card.featured ? "text-primary/80" : "text-gray-500"}`}>
                                    {email}
                                </p>
                            ))}

                            <p className={`font-semibold text-base my-5 ${card.featured ? "text-white" : "text-secondary"}`}>
                                Get Support
                            </p>

                            <button className={`px-8 py-2.5 rounded-full text-sm font-semibold border-2 border-primary transition-all 
                            duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(41,171,226,0.4)] text-primary`}>
                                Submit Request
                            </button>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}
export default ContactMain;