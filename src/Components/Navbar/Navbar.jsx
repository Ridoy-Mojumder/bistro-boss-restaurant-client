import { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const { user, logOut } = useContext(AuthContext);
    const dropdownRef = useRef();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();




    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully.');
                navigate('/login');
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
                console.error("Error logging out:", error);
            });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };



    const links = (
        <div className="flex flex-col md:flex-row md:space-x-4">
            <NavLink to="/" className="p-2 hover:text-gray-400" >Home</NavLink>
            <NavLink to="/contact" className="p-2 hover:text-gray-400">Contact Us</NavLink>
            <NavLink to="/menu" className="p-2 hover:text-gray-400">Our Menu</NavLink>
            <NavLink to="/order" className="p-2 hover:text-gray-400">Order Food</NavLink>
            <NavLink to="/secret" className="p-2 hover:text-gray-400">Order Secret</NavLink>
            {!user ? <NavLink to="/login" className="p-2 hover:text-gray-400">Login</NavLink> :
                <>
                    <Link className="p-2 hover:text-gray-400" onClick={handleLogOut}><button>Sign Out</button></Link>
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <button onClick={toggleDropdown}>
                                <img src={user.photoURL} alt="User" className="rounded-full" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 -mt-5 py-2 w-48 bg-white rounded-lg shadow-xl">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        {user.displayName}
                                    </div>
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            }
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
