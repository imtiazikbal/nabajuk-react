import { CloseSquare } from 'iconsax-react';
import React, { ReactNode, useRef } from 'react';

// Define the props for the ParentSideBar component
interface IParentSideBarProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ParentSideBar: React.FC<IParentSideBarProps> = ({ children, className = "", isOpen, onClose }) => {
    const sideBarRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={`px-[40px] py-[20px] h-[100vh] overflow-y-auto custom-scrollbar fixed top-0 left-0 bg-white z-[999999] transition-transform duration-1000 ease-in-out transform w-full sm:w-[350px] ${isOpen ? "translate-x-0" : "-translate-x-full"} ${className}`}
        >
            <div className="flex justify-between items-center mb-[40px]">
                {/* Home Link and Logo */}
                <a href="/" className="flex items-center gap-[5px]">
                    <img src="/logo.png" alt="Logo" className="w-[500px]" />
                </a>

                {/* Close button */}
                <div onClick={onClose} className="w-fit text-gray-100 hover:text-[#E61646] cursor-pointer transition-all">
                <CloseSquare size="32" color="#FF8A65"/>
                </div>
            </div>

            {/* Sidebar content */}
            <div ref={sideBarRef}>
                {children}
            </div>
        </div>
    );
};

export default ParentSideBar;
