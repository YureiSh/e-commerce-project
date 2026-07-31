import TeamMemberCard from "../../../components/TeamMemberCard";


const teamMembers = [
    { id: 1, name: "Gökhan Özdemir", profession: "Project Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
    { id: 2, name: "Enis Ata Erkol", profession: "Full Stack Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
    { id: 3, name: "Username", profession: "Profession", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop", linkedinUrl: "/test", instagramUrl: "/test", twitterUrl: "/test" },
];

function AboutCta() {

    return (
        <section>
            <div className="flex flex-col gap-12">
                <div className="max-w-290 m-auto text-center font-semibold ">
                    <h2 className="text-secondary text-5xl" >Meet Our Team</h2>
                    <p className="text-[#737373] pt-4" >Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="pt-12 pb-12">
                    <TeamMemberCard teamMembers={teamMembers} />
                </div>
            </div>
            <div className="bg-[#FAFAFA]">
                <div className="font-semibold text-center pt-12 pb-12" >
                    <h2 className="text-secondary text-5xl" >Big Companies Are Here</h2>
                    <p className="text-[#737373] pt-12" >Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    {/* Company vectors */}
                </div>
            </div>

            <div className="h-160 grid grid-cols-12 grid-rows-1">
                <div className="bg-[#2A7CC7] text-white h-full col-span-12 lg:col-span-8 flex flex-col justify-center">
                    <div className="font-semibold flex flex-col gap-12 mx-16 lg:mx-32 text-center lg:text-start">
                        <h5 className="text-2xl">WORK WITH US</h5>
                        <h2 className="text-4xl">Now Let's grow Yours</h2>
                        <p>The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th</p>
                        <div>
                            <button className="border rounded-md px-6 py-3">Button</button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block bg-[#FAFAFA] h-full col-span-4">
                    {/*image */}
                </div>
            </div>
        </section>
    );
}
export default AboutCta;