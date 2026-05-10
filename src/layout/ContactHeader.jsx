import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactHeader() {
    return (
        <header className="contact-header">
            
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Phone size={18} />
                        <h6>(225) 555-0118</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Mail size={18} />
                        <h6>michelle.rivera@example.com</h6>
                    </div>
                </div>

                <div>
                    <h6>Follow Us  and get a chance to win 80% off</h6>
                </div>

                <div className='flex gap-2 items-center'>
                    <h6>Follow Us : </h6>
                    <FaInstagram size={18} className='text-white' href='#' />
                    <FaYoutube size={18} className='text-white' href='#' />
                    <FaFacebook size={18} className='text-white' href='#' />
                    <FaTwitter size={18} className='text-white' href='#' />
                </div>

            </div>
        </header>
    );
}