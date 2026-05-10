import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import TeamMemberCard from "../../../components/TeamMemberCard";

const teamMembers = [
    { id: 1, name: "Gökhan Özdemir", profession: "Project Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
    { id: 2, name: "Enis Ata Erkol", profession: "Full Stack Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
    { id: 3, name: "Username", profession: "Profession", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
];

function TeamMain() {

    return (
        <>
            <section className="pt-8 pb-16">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">Meet Our Team</h2>

                {/*TeamMemberCard is tailored for 3x1 rows */ }
                <TeamMemberCard teamMembers={teamMembers} />

                <div className="flex flex-col items-center text-center py-20 px-6">
                    <h2 className="text-4xl font-bold text-secondary mb-4">Start your 14 days free trial</h2>
                    <p className="text-gray-400 text-sm mb-8">
                        Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                        do met sent. RELIT official consequent.
                    </p>

                    <button className="bg-primary text-white font-semibold px-10 py-3 rounded-md mb-8 hover:scale-105 transition-transform duration-200">
                        Try it free now
                    </button>

                    <div className="flex gap-5">
                        <FaTwitter size={24} className="text-primary cursor-pointer" />
                        <FaFacebook size={24} className="text-primary cursor-pointer" />
                        <FaInstagram size={24} className="text-primary cursor-pointer" />
                        <FaLinkedin size={24} className="text-primary cursor-pointer" />
                    </div>
                </div>

            </section>
        </>
    );
}
export default TeamMain