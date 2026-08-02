import { ChevronDown, ChevronUp, Heart, Search, ShoppingCart, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import CartDropdown from '../layout/layout-components/CartDropdown';

export default function UserLoginCart({ isMobileMenuOpen, setIsMobileMenuOpen, dropdownOpen, setDropdownOpen, dropdownRef }) {
    //Gelen user bilgisi ya da session bilgisine göre cart
    const [isCartOpen, SetIsCartOpen] = useState(false);

    const user = useSelector((store) => store.client.user);
    const cart = useSelector((store) => store.shoppingCart.cart);

    return (
        <>
            <div className='flex items-center gap-8 text-primary'>
                {Object.keys(user).length > 0 ?
                    <div>
                        <div ref={dropdownRef} className='hidden items-center gap-2
                         lg:flex'>
                            <User size={16} />
                            <button className='cursor-pointer'
                                onClick={() => setDropdownOpen(prev => !prev)}
                            >{user.name}</button>
                            <DropdownMenu dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} dropdownRef={dropdownRef} />
                        </div>
                    </div> :
                    <div className='hidden items-center gap-2 lg:flex'>
                        <User size={16} />
                        <Link to="/login">Login</Link>
                        <p> / </p>
                        <Link to="/signup">Register</Link>
                    </div>
                }
                <div className='cursor-pointer customImg'>
                    <Search size={16} />
                </div>
                <div className='relative'>
                    <ShoppingCart size={16} onClick={() => SetIsCartOpen(!isCartOpen)} className={`select-none cursor-pointer
                        ${cart.length > 0 ? "fill-primary animate-bounce" : "null"}
                        ${isCartOpen ? "scale-120" : null}`} />
                    {isCartOpen &&
                        <CartDropdown className="text-black">
                            <div className='m-2'>
                                <div className="text-xl px-2" >My cart ({cart?.length})</div>

                                <div>
                                    {cart.map((item) => (
                                        <div key={item.product.id} className="flex gap-1 justify-baseline border-b mb-3 pb-6 pt-6">
                                            <div className='flex items-center justify-center w-20 h-20'>
                                                <img className=' w-full h-full object-cover object-center' src={item.product.imageUrls[0]} alt={item.product.name} />
                                            </div>
                                            <div className='flex flex-col px-3'>
                                                <h3 className='font-semibold text-black/75 text-[18px]' >{item.product.name}</h3>
                                                <p className='font-semibold text-[13px] text-[#737373]' >Count: {item.count}</p>
                                                <h4 className='font-semibold text-[18px] text-primary' >$ {item.product.price}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-around mb-4 pt-1" >
                                    <Link to="/cart" >
                                        <button className="cursor-pointer border rounded-md px-8 py-1 bg-gray-100 hover:bg-[#FAFAFA] ">My cart</button>
                                    </Link>
                                    <button className="cursor-pointer border rounded-md px-1 py-1 bg-primary text-white hover:bg-primary/75">Complete Purchase</button>
                                </div>
                            </div>
                        </CartDropdown>
                    }
                </div>
                <div className='hidden lg:block cursor-pointer customImg'>
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