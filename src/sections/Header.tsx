import { useState } from 'react';
import ParentSideBar from '../components/ParentSideBar'; // Adjust the path as needed
import { HambergerMenu } from 'iconsax-react'; // Ensure this import is correct
import HomeLogo from './HomeLogo';

const navItems = ['সর্বশেষ', 'সর্বশেষ', 'সর্বশেষ'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCloseSidebar = () => setIsOpen(false); // Close the sidebar

  return (
    <div>
      {/* Logo and Hamburger Menu for Mobile */}
      <div className="flex justify-between items-center py-4 px-4 md:px-0 md:py-0 md:mb-4">
        <div className='flex justify-between items-center gap-4'>
            {/* Home Logo */}
        <HomeLogo />

{/* Hamburger Menu for Mobile */}
<div className="md:hidden cursor-pointer">
  <HambergerMenu
    size="32"
    className="text-2xl focus:outline-none"
    color="#FF8A65"
    variant="Outline"
    onClick={toggleMenu}
  />
</div>
        </div>
  
      </div>

      {/* Sidebar */}
      <ParentSideBar isOpen={isOpen} onClose={handleCloseSidebar}>
        <ul className="flex flex-col gap-4 text-sm">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                aria-label={`Navigate to ${item}`}
                className="px-4 py-2 rounded-md hover:bg-tertiary transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </ParentSideBar>

      {/* Desktop Navigation Bar */}
      <header className="bg-secondary text-black py-4 px-4  hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          {/* Navigation Bar for Desktop */}
          <nav className="hidden md:flex justify-center items-center w-full">
            <ul className="flex gap-3 text-sm md:text-base lg:text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    aria-label={`Navigate to ${item}`}
                    className="px-4 py-2 rounded-md hover:bg-tertiary transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
