import { ChevronDown, ChevronUp, Heart, Search, ShoppingCart, User } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

export default function UserLoginCart({ isMobileMenuOpen, setIsMobileMenuOpen, dropdownOpen, setDropdownOpen, dropdownRef }) {
    //Gelen user bilgisi ya da session bilgisine göre cart
    
    const user = useSelector((store) => store.client.user);

    return (
        <>
            <div className='flex items-center gap-8 text-primary'>
                {Object.keys(user).length > 0 ?
                    <div>
                        <div ref={dropdownRef} className='hidden items-center gap-2
                         lg:flex'>
                            <User size={16}/>
                            <button className='cursor-pointer' 
                            onClick={() => setDropdownOpen(prev => !prev)}
                            >{user.name}</button>
                            <DropdownMenu  dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} dropdownRef={dropdownRef} />
                        </div>
                    </div> :
                    <div className='hidden items-center gap-2 lg:flex'>
                        <User size={16} />
                        <Link to="/login">Login</Link>
                        <p> / </p>
                        <Link to="/signup">Register</Link>
                    </div>
                }
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