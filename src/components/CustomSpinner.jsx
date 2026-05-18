import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CustomSpinner() {
    useGSAP(() => {
        const gradient = document.getElementById("gradient");
        gsap.set(gradient, {
            background: "linear-gradient(135deg, #fff, #0ff, #f0f)"
        })
        const tl = gsap.timeline({
            repeat: -1,
            defaults: {
                duration: 4,
                ease: "none"
            }
        })
            .to(gradient, {
                background: "linear-gradient(135deg, #0ff, #f0f, #333)"
            })
            .to(gradient, {
                background: "linear-gradient(135deg, #f0f, #333, #39ff14)"
            })
            .to(gradient, {
                background: "linear-gradient(135deg, #333, #39ff14, #0ff)"
            })
            .to(gradient, {
                background: "linear-gradient(135deg, #39ff14, #0ff, #f0f)"
            })
            .to(gradient, {
                background: "linear-gradient(135deg, #0ff, #f0f, #fff)"
            })
            .to(gradient, {
                background: "linear-gradient(135deg, #fff, #0ff, #f0f)"
            });

    }, []);

    return (
        <>
            <div id="gradient-background" className="overflow-hidden relative h-screen">
                <div className= "grid grid-cols-12 grid-rows-4" id="gradient">
                    <p className="row-start-2 col-span-1 row-span-1 text-5xl md:text-7xl lg:text-9xl text-white/75 px-2">Loading...</p>
                </div>
            </div>
        </>
    );
}
export default CustomSpinner;