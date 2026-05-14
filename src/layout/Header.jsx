import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLoginCart from '../components/UserLoginCart';
import { menuItems } from '../constants/constants';
import { useSelector } from 'react-redux';
import DropdownMenu from '../components/DropdownMenu';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const user = useSelector((store) => store.client.user);

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
                    <UserLoginCart isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}
                        dropdownOpen={dropdownOpen}
                        setDropdownOpen={setDropdownOpen}
                        dropdownRef={dropdownRef}
                    />
                </div>
            </div>
            {isMobileMenuOpen ?
                <nav
                    id='mobile-menu'
                    className={isMobileMenuOpen ? 'flex flex-col gap-6 mt-4 mb-8 justify-center items-center text-3xl lg:hidden' : 'hidden'}
                    aria-label='Mobile navigation'
                >
                    <ul className='flex flex-col gap-6 items-center'>
                        {isMobileMenuOpen && menuItems.map((item) => (
                            <li key={item.label} className='list-none text-gray-500'>
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {Object.keys(user).length > 0 ?
                        <div>
                            <div ref={dropdownRef} className='flex text-primary items-center gap-2 lg:flex'>
                                <User size={24} />
                                <button className='cursor-pointer'
                                    onClick={() => setDropdownOpen(prev => !prev)}
                                    onBlur={() => setDropdownOpen(false)}
                                >{user.name}</button>
                                <DropdownMenu 
                                dropdownOpen={dropdownOpen} 
                                setDropdownOpen={setDropdownOpen}
                                dropdownRef={dropdownRef}
                                />
                            </div>
                        </div> :
                        <div className='flex text-primary items-center gap-2 lg:flex'>
                            <User size={24} />
                            <Link to="/login">Login</Link>
                            <p> / </p>
                            <Link to="/signup">Register</Link>
                        </div>
                    }
                </nav> : null}
        </section>
    );
};

export default Header;