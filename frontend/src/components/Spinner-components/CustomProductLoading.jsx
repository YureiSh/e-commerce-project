import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CustomProductLoading() {

    useGSAP(() => {

        gsap.from("#loadingContainer span", {
            backgroundPosition: "200% center",
            duration: 1.2,
            stagger: 0.1,
            repeat: -1,
            ease: "power2.inOut"
        });
    }, []);

    return (
        <>
            <h1 id="loadingContainer" className="text-center text-2xl lg:text-9xl">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h1>
        </>
    );
}
export default CustomProductLoading;