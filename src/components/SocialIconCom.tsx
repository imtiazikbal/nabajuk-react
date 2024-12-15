import React from 'react';

/**
 * SocialIcon Component
 * A reusable component for displaying social media icons.
 * Customize by passing additional icons or styles as needed.
 */
interface ISocialIcon {
    imgUrl: string;
    link?: string;
}

const SocialIcons: ISocialIcon[] = [
    {
        imgUrl: "/facebook.svg",
        link: "https://www.facebook.com/newerasportingclubnizmawna"
    },
    {
        imgUrl: "/youtube.svg",
        link: "https://www.youtube.com"
    }
];

const SocialIconCom = () => {
    return (
        <div className="flex items-center justify-end gap-4">
            {SocialIcons.map((icon, index) => (
                <a 
                    href={icon.link || ""} 
                    key={index} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Link to ${icon.imgUrl.split('/')[1].split('.')[0]}`}
                >
                    <img
                        className="w-8 p-1 bg-secondary rounded-lg hover:bg-gray-300 transition duration-200 ease-in-out"
                        src={icon.imgUrl}
                        alt={`${icon.imgUrl.split('/')[1].split('.')[0]} Icon`}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialIconCom;
