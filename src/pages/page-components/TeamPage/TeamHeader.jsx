import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function TeamHeader({ images }) {

    return (
        <>
            <section className="pt-8 pb-12">
                <div className="flex flex-col items-center font-semibold text-secondary gap-8 pt-12 pb-12">
                    <h5 className="text-[#737373] text-xl">WHAT WE DO</h5>
                    <h1 className="text-5xl text-center lg:text-start">Innovation tailored for you</h1>
                    <div className="text-[#737373] flex ">
                        <Link className="text-secondary" to="/" >Home</Link>
                        <ChevronRight />
                        <span>Team</span>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-12 grid-rows-2 gap-2 h-150">
                        <div className="col-span-12 md:col-span-8 row-span-3 md:row-span-2 relative group overflow-hidden">
                            <img src={images[0].url} alt={images[0].id} className="w-full h-full object-cover" />
                        </div>

                        <div className="col-span-6 md:col-span-2 row-span-2 md:row-span-1 relative group overflow-hidden">
                            <img src={images[1].url} alt={images[2].id} className="w-full h-full object-cover" />
                        </div>

                        <div className="col-span-6 md:col-span-2 row-span-2 md:row-span-1 relative group overflow-hidden">
                            <img src={images[2].url} alt={images[2].id} className="w-full h-full object-cover" />
                        </div>

                        <div className="col-span-6 md:col-span-2 row-span-3 md:row-span-1 relative group overflow-hidden">
                            <img src={images[4].url} alt={images[3].id} className="w-full h-full object-cover" />
                        </div>

                        <div className="col-span-6 md:col-span-2 row-span-3 md:row-span-1 relative group overflow-hidden">
                            <img src={images[3].url} alt={images[3].id} className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
export default TeamHeader;