import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { footerData } from '../constants/constants';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='max-w-360 m-auto'>
                <div className='flex flex-col lg:flex-row items-baseline lg:items-center justify-between'>
                    <div><h3 className='bandage' >Bandage</h3></div>
                    <div className='flex gap-3' >
                        <FaFacebook size={18} className='text-primary' href='#' />
                        <FaInstagram size={18} className='text-primary' href='#' />
                        <FaTwitter size={18} className='text-primary' href='#' />
                    </div>
                </div>
                <hr className='mt-12 text-[#E6E6E6] text-shadow-2xs' />
            </div>

            <div className='bg-white'>
                <div className='max-w-360 flex flex-col lg:flex-row m-auto justify-between px-4 lg:px-0 pt-16 pb-16 gap-16'>
                    {footerData.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-secondary mb-3 text-xl">{section.title}</h3>

                            <ul className='flex flex-col gap-2'>
                                {section.links.map((link) => (
                                    <li key={link.label} className='font-bold text-[#737373]' >
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="font-bold"> Get in Touch </h3>

                        <input 
                        placeholder='Your Email'
                        />
                    </div>
                </div>
            </div>

            <div className='max-w-360 m-auto'>
                <div className='mt-10' >
                    <h6 className='font-bold text-[#737373]' >Made With Love By Finland All Right Reserved </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;