
function AboutHero() {

    return (
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 justify-around pt-12 lg:pt-4 pb-12">
            <div className="flex flex-col gap-12 text-secondary font-semibold justify-center ">
                <h5 className="font-bold text-xl" >ABOUT COMPANY</h5>
                <h1 className="text-6xl" >ABOUT US</h1>
                <h4 className="text-[#737373]" >We know how large objects will act, <br /> but things on a small scale</h4>
                <button className="w-3/4 px-8 py-4 bg-primary text-white rounded-md" >
                    Get Quote Now
                </button>
            </div>
            <div className="w-90 h-100 lg:w-142.5 lg:h-157.5 relative overflow-hidden">
                <img
                    src="/ProductImgs/001.jpg"
                    alt="001"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
export default AboutHero;