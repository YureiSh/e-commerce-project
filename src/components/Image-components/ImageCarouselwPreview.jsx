import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ImageCarouselwPreview({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex];

    const handlePreviousClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => handleNextClick(), 6000);
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section className="flex flex-col items-center">

            <div
                className="relative w-90 h-90 lg:w-120 lg:h-120 overflow-hidden rounded-xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${currentImage.url})` }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20" />

                <button
                    onClick={handlePreviousClick}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-1 transition-all duration-200"
                >
                    <ChevronLeft size={36} />
                </button>

                <button
                    onClick={handleNextClick}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-1 transition-all duration-200"
                >
                    <ChevronRight size={36} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                i === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex gap-2 mt-4 max-w-120">
                {images.map((image, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            i === currentImageIndex
                                ? "border-primary scale-105 shadow-md"
                                : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                        <img src={image.url} alt={image.url} width={90} height={90} className="object-cover w-22.5 h-22.5" />
                    </button>
                ))}
            </div>

        </section>
    );
}

export default ImageCarouselwPreview;