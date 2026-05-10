import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function TeamMemberCard({teamMembers}) {
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-3xl mx-auto" >
            {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center">
                    <img src={member.img} alt={member.name} className="w-75 lg:w-full h-48 object-fill lg:object-cover rounded-md mb-3" />
                    <p className="font-semibold text-secondary">{member.name}</p>
                    <p className="text-sm text-gray-400 mb-2">{member.profession}</p>
                    <div className="flex gap-2">
                        <a href={member.linkedinUrl} >
                            <FaLinkedin size={18} className="text-primary cursor-pointer" />
                        </a>
                        <a href={member.instagramUrl} >
                            <FaInstagram size={18} className="text-primary cursor-pointer" />
                        </a>
                        <a href={member.twitterUrl} >
                            <FaTwitter size={18} className="text-primary cursor-pointer" />
                        </a>

                    </div>
                </div>
            ))}
        </div>)
}
export default TeamMemberCard