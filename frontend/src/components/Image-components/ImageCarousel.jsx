import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { carouselImages } from '../../constants/constants';

const ImageCarousel = ({ children }) => {
    const images = carouselImages;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex];

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 6000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section className='relative'>
            <div className='flex items-center gap-4'>
                <div
                    className={`relative m-auto w-full h-240 overflow-hidden bg-cover bg-center`}
                    style={{ backgroundImage: `url(${currentImage.url})` }}>
                    <div className='h-full flex px-2 lg:px-4 justify-between items-center'>
                        <div className='flex gap-2 md:gap-48 '>
                            <button className='text-white' onClick={handlePreviousClick}>
                                <ChevronLeft size={64} />
                            </button>

                            <div className='flex items-center'>
                                {children}
                            </div>
                        </div>

                        <div>
                            <button className='text-white' onClick={handleNextClick}>
                                <ChevronRight size={64} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ImageCarousel