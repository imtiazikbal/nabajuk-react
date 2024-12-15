const HomeLogo = () => {
    return (
      <div className="flex justify-start items-center py-4">
        {/* Logo Image with responsive widths */}
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-[300px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] " 
        />
      </div>
    );
  };
  
  export default HomeLogo;
  