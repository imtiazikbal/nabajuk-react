import React, { useState } from 'react';

const HeroSection = () => {
    // Set up state for the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image URLs for the slider
    const images = [
        "/team1.png", // Example image 1
        "/team2.png", // Example image 2
        "/team3.png", // Example image 3
        "/team4.png", // Example image 3

    ];

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-2 py-2">
            <div className="relative">
                <img
                    src={images[currentImageIndex]}
                    alt="Slider Image"
                    className="w-full h-auto hover:scale-105 transition duration-500 ease-in-out"
                />
                <button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
                >
                    &#8249;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
                >
                    &#8250;
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <img className='hover:scale-105 transition duration-500 ease-in-out' src="https://placehold.co/400" alt="Thumbnail 1" />
                </div>
                <div>
                    <img className='hover:scale-105 transition duration-500 ease-in-out' src="https://placehold.co/400" alt="Thumbnail 2" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
