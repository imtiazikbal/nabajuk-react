import { useState } from 'react';

const navItems = ['সর্বশেষ', 'সর্বশেষ', 'সর্বশেষ'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-200 text-black py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navigation Bar */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex justify-center items-center w-full`}
        >
          <ul className="flex flex-col md:flex-row gap-3 text-sm md:text-base lg:text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="/"
                  aria-label={`Navigate to ${item}`}
                  className="px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
