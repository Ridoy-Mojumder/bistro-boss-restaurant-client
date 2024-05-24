import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    const links = (
        <div className="flex flex-col md:flex-row md:space-x-4">
            <NavLink to="/" className="p-2 hover:text-gray-400" >Home</NavLink>
            <NavLink to="/contact" className="p-2 hover:text-gray-400">Contact Us</NavLink>
            <NavLink to="/menu" className="p-2 hover:text-gray-400">Our Menu</NavLink>
            <NavLink to="/order" className="p-2 hover:text-gray-400">Order Food</NavLink>
            <NavLink to="/signout" className="p-2 hover:text-gray-400">Sign Out</NavLink>
        </div>
    );

    return (
        <nav className="bg-gray-800 text-white p-4 fixed inset-x-0 top-0 z-10 bg-opacity-30 max-w-screen-xl mx-auto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-yellow-500">
                        BISTRO BOSS
                    </h1>
                    <h2 className="text-lg font-light text-gray-300" style={{ letterSpacing: '0.3em' }}>
                        Restaurant
                    </h2>
                </div>
                <div className="hidden md:flex">
                    {links}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="absolute bg-gray-800 w-full p-4">
                    {links}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
