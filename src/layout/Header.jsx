import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserLoginCart from '../components/UserLoginCart';
import { menuItems } from '../constants/constants';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <section>
            <div className='header flex flex-wrap justify-between items-center'>
                <div className='flex gap-8 items-center'>
                    <div>
                        <h3 className='bandage' >Bandage</h3>
                    </div>
                    <nav className='hidden lg:block' aria-label='Primary navigation'>
                        <ul className='flex gap-3'>
                            {menuItems.map((item) => (
                                <li key={item.label} className='list-none text-gray-500 basicHover'>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <UserLoginCart
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                </div>
            </div>
            <nav
                id='mobile-menu'
                className={isMobileMenuOpen ? 'flex flex-col gap-3 mt-4 justify-center items-center text-3xl lg:hidden' : 'hidden'}
                aria-label='Mobile navigation'
            >
                <ul className='flex flex-col gap-3 items-center'>
                    {isMobileMenuOpen && menuItems.map((item) => (
                        <li key={item.label} className='list-none text-gray-500'>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Header;