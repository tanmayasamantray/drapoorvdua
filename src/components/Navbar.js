// Updated src/components/Navbar.js (with click-toggle for dropdown)
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white text-primary-text p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Dr. Apoorv Dua</Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <li><Link to="/" className="block py-2 hover:text-accent-blue">Home</Link></li>
          <li><Link to="/about-us" className="block py-2 hover:text-accent-blue">About Us</Link></li>
          <li className="relative">
            <button 
              onClick={toggleDropdown}
              className="block py-2 hover:text-accent-blue flex items-center"
            >
              Specialities
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 md:block">
                <li><Link to="/joint-replacement" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>Joint Replacement</Link></li>
                <li><Link to="/sport-injury" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>Sports Injury</Link></li>
                <li><Link to="/acl-surgery" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>ACL PCL Surgery</Link></li>
                <li><Link to="/gfc-therapy" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>GFC Therapy</Link></li>
                <li><Link to="/shoulder-joint-treatment" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>Shoulder Treatment</Link></li>
                <li><Link to="/fractures-and-trauma" className="block px-4 py-2 hover:bg-light-bg" onClick={() => setIsDropdownOpen(false)}>Fractures & Trauma</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/rehabilitation" className="block py-2 hover:text-accent-blue">Rehabilitation</Link></li>
          <li><Link to="/contact-us" className="block py-2 hover:text-accent-blue">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;