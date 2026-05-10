import React from 'react';
import { Link } from 'react-router-dom';

import PageContent from '../layout/PageContent';
import ImageCarousel from '../components/ImageCarousel';
import EditorsPick from './page-components/HomePage/EditorsPick';
import BestSellers from './page-components/HomePage/BestSellers';
import ContainerFluid from './page-components/HomePage/ContainerFluid';
import HomePageBlog from './page-components/HomePage/HomePageBlog';

export default function HomePage() {
    return (
        <>
            <PageContent>
                <ImageCarousel>
                    <div className='flex flex-col max-w-65 lg:max-w-full items-center lg:items-baseline gap-24 lg:gap-20 text-white'>
                        <h5 className='font-bold text-md'>SUMMER 2026</h5>
                        <h1 className='text-5xl lg:text-7xl text-center'>NEW COLLECTION</h1>
                        <h4 className='font-bold text-md lg:text-2xl'>We know how large objects will act, <br /> but things on a small scale.</h4>
                        <Link
                            to="/test"
                            className="px-4 lg:px-8 max-w-1/3 text-center py-4 bg-success text-white text-xl rounded-xs hover:bg-[#28A862] transition"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </ImageCarousel>
                <EditorsPick />
                <BestSellers />
                <ImageCarousel>
                    <div className='flex flex-col max-w-65 lg:max-w-full items-center lg:items-baseline gap-24 lg:gap-20 text-white'>
                        <h5 className='font-bold text-md'>SUMMER 2026</h5>
                        <h1 className='text-5xl lg:text-7xl text-center'>Vita Classic Product</h1>
                        <h4 className='font-bold text-md lg:text-2xl'>We know how large objects will act, <br /> but things on a small scale.</h4>
                        <div className=' flex gap-6 items-center'>
                            <span>$16.48</span>
                            <Link
                                to="/test"
                                className="px-4 lg:px-8 text-center py-4 bg-success text-white text-xl rounded-xs hover:bg-[#28A862] transition"
                            >
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </ImageCarousel>
                <ContainerFluid/>
                <HomePageBlog/>

            </PageContent>
        </>
    );
}