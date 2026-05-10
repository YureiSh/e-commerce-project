import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactHeaderData = {

};

function ContactHeader() {

    return (
        <>
            <section className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-baseline justify-around items-center pt-4 pb-12">
                
                <div className="flex flex-col items-center lg:items-baseline text-secondary font-semibold gap-12 mx-0 my-auto">
                    <h5 className=" text-xl">CONTACT US</h5>
                    <h1 className="text-7xl text-center lg:text-start">Get in touch <br /> today!</h1>
                    <h4 className="text-[#737373]">We know how large objects will act, <br /> but things on a small scale</h4>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl">Phone ; +451 215 215 </h3>
                        <h3 className="text-2xl">Fax : +451 215 215</h3>
                        <div className="flex gap-8 pt-8">
                            <FaTwitter size={32} />
                            <FaFacebook size={32} />
                            <FaInstagram size={32} />
                            <FaLinkedin size={32} />
                        </div>
                    </div>

                </div>
                
                <div className="max-w-150 max-h-200 overflow-hidden flex items-center justify-center rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1773332598414-44a45e364d85?q=80&w=687&auto=format&fit=crop"
                        alt="random image"
                        className="w-full h-full object-cover"
                    />
                </div>

            </section>
        </>
    );
}
export default ContactHeader;