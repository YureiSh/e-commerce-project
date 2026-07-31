import CustomVideoPlayer from "../../../components/UI-components/CustomVideoPlayer";

const constants = [
    { h1: "15k", h5: "Happy Customers" },
    { h1: "150k", h5: "Monthly Visitors" },
    { h1: "15", h5: "Countries  Worldwide" },
    { h1: "100+", h5: "Top Partners" },
]

function AboutMain() {

    return (
        <section className="max-w-300 m-auto flex flex-col gap-36 pt-12 pb-24" >
            <div className="flex flex-col lg:flex-row items-center font-semibold ">
                <div className="flex flex-col gap-4" >
                    <p className="text-red-500" >Problems trying</p>
                    <h3 className="text-secondary text-2xl" >Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>
                <div className="text-[#737373]  " >
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-around gap-24 lg:gap-0" >
                {constants.map((constant) => (
                    <div key={constant.h1} className="flex flex-col items-center font-semibold" >
                        <h1 className="text-secondary text-6xl" > {constant.h1} </h1>
                        <h5 className="text-[#737373] text-xl" > {constant.h5} </h5>
                    </div>
                ))}
            </div>

            <div className="m-auto pb-24">
                {/*video*/}
                <CustomVideoPlayer/>
            </div>
        </section>
    )
}
export default AboutMain;