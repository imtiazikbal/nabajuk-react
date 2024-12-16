const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-2 py-2">
            <div><img src="https://placehold.co/1100x810" alt="" /></div>
            <div className="flex flex-col gap-2">
                <div>
                    <img src="https://placehold.co/400" alt="" />
                </div>
                <div>
                    <img src="https://placehold.co/400" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;