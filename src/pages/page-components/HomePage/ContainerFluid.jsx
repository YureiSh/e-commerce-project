import { Link } from "react-router-dom";

function ContainerFluid() {

    return (
        <>
            <section className="m-w-400 flex flex-col lg:flex-row justify-center align-middle items-center gap-24 m-auto">
                <div className="h-full">
                    <img src="./FluidImgs/fluidImg.png" alt="fluid" width={800} height={600} />
                </div>
                <div className='flex flex-col max-w-65 lg:max-w-full justify-center align-middle items-center lg:items-baseline gap-12 lg:gap-10'>
                    <h5 className='font-bold text-md text-[#BDBDBD]'>SUMMER 2026</h5>
                    <h1 className='text-3xl lg:text-5xl text-center text-secondary'>Part of the Neural <br /> Universe</h1>
                    <h4 className='font-semibold text-md lg:text-2xl text-[#737373]'>We know how large objects will act, <br /> but things on a small scale.</h4>
                    <div className=' flex gap-6 items-center'>
                        <Link
                            to="/test"
                            className="px-4 lg:px-8 text-center py-4 bg-success text-white text-xl rounded-xs hover:bg-white transition"
                        >
                            BUY NOW
                        </Link>
                        <Link
                            to="/test"
                            className="px-4 lg:px-8 text-center py-4 border-success border-2 text-success text-xl rounded-xs hover:bg-[#28A862] transition"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ContainerFluid;