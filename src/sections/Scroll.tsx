import React, { useEffect } from 'react';

const Scroll = () => {
    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollLeft = 0; // Reset scroll position on mount
        }
    }, []); // Empty dependency array to run only on mount

    return (
        <div className="bg-[#0A3B1E] w-full text-white py-4 px-4">
            <div className="container mx-auto flex overflow-x-auto scroll-container w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                <p className="scroll-text whitespace-nowrap text-base md:text-lg font-bold">
                    নবযুগ ক্রীড়াচক্র একটি অরাজনৈতিক ক্রীড়া সংগঠন যা ক্রীড়া ও সাংস্কৃতিক কার্যক্রমের মাধ্যমে সমাজের উন্নয়নে অবদান রাখে। এই ক্লাবটি খেলাধুলার মাধ্যমে তরুণ প্রজন্মকে সুস্থ ও সৃজনশীল জীবনের পথে উদ্বুদ্ধ করার লক্ষ্যে কাজ করে।
                </p>
            </div>
        </div>
    );
};

export default Scroll;
