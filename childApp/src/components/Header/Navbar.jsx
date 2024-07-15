import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/child.png"; // Update the path to your logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    
  
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20 sticky top-0">
                <a href="/" className="flex items-center">
                    <img src={logo} height={300} width={200} className="h-8" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/contact">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact Us
                        </button>
                    </Link>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between ${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${location.pathname === "/" ? "text-white bg-blue-700 md:text-blue-700" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${location.pathname === "/about" ? "text-white bg-blue-700 md:text-blue-700" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/daycare" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${location.pathname === "/daycare" ? "text-white bg-blue-700 md:text-blue-700" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`}>
                                Day Care
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${location.pathname === "/blog" ? "text-white bg-blue-700 md:text-blue-700" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
