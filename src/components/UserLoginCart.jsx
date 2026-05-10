import { ChevronDown, ChevronUp, Heart, Search, ShoppingCart, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserLoginCart({ isMobileMenuOpen, setIsMobileMenuOpen }) {
    //Gelen user bilgisi ya da session bilgisine göre cart
    
    return (
        <>
            <div className='flex items-center gap-8 text-primary'>
                <div className='hidden items-center gap-2 lg:flex'>
                    <User size={16} />
                    <Link to="/login">Login</Link>
                    <p> / </p>
                    <Link to="/register">Register</Link>
                </div>
                <div>
                    <Search size={16} />
                </div>
                <div>
                    <ShoppingCart size={16} />
                </div>
                <div className='hidden lg:block'>
                    <Heart size={16} />
                </div>
                <button
                    type='button'
                    aria-expanded={isMobileMenuOpen}
                    aria-controls='mobile-menu'
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className='block lg:hidden'
                >
                    <ChevronUp size={16} className={isMobileMenuOpen ? '' : 'hidden'} />
                    <ChevronDown size={16} className={isMobileMenuOpen ? 'hidden' : ''} />
                </button>
            </div>

        </>
    );
}