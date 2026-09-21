import { useEffect, useState } from "react";

function RenderMessage() {
    const [isMounted, setIsMounted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimer = window.setTimeout(() => setIsVisible(true), 50);
        const hideTimer = window.setTimeout(() => setIsVisible(false), 3600);
        const removeTimer = window.setTimeout(() => setIsMounted(false), 4300);

        return () => {
            window.clearTimeout(showTimer);
            window.clearTimeout(hideTimer);
            window.clearTimeout(removeTimer);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className={[
                "fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm",
                "transition-opacity duration-700 ease-in-out",
                isVisible ? "opacity-100" : "opacity-0"
            ].join(" ")}
            aria-live="polite"
        >
            <div
                className={[
                    "mx-4 max-w-2xl rounded-2xl border border-white/20 bg-white/85 p-6 text-center shadow-2xl",
                    "transition-all duration-700 ease-in-out",
                    isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
                ].join(" ")}
            >
                <p className="text-base font-medium text-gray-800 leading-relaxed">
                    This Project&apos;s backend works on free-tier Render.com EC2 instance. That is why API calls first time will take 50 seconds to run. Thank you for patience.
                </p>
            </div>
        </div>
    );
}

export default RenderMessage;