const IPad = () => {
  return (
    <div className="absolute hidden w-screen h-auto left-0 dropdown-bg group-hover:block">
      <div className="container mx-auto z-10 w-[1100px] text-white p-8 pb-16">
        <div className="flex justify-start items-start">
          <div className="flex flex-col items-start justify-center text-2xl font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              Explore iPad
            </p>
            <a href="#" className="pb-2">
              Explore All iPad
            </a>
            <a href="#" className="pb-2">
              iPad Pro
            </a>
            <a href="#" className="pb-2">
              iPad Air
            </a>
            <a href="#" className="pb-2">
              iPad
            </a>
            <a href="#" className="pb-2">
              iPad mini
            </a>
            <a href="#" className="pb-2">
              Apple Pencil
            </a>
            <a href="#" className="pb-4">
              Keyboards
            </a>
            <a href="#" className="pb-1 text-xs">
              Compare iPad
            </a>
            <a href="#" className="text-xs">
              Why iPad
            </a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-28 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">Shop iPad</p>
            <a href="#" className="pb-1">
              Shop iPad
            </a>
            <a href="#" className="pb-1">
              iPad Accessories
            </a>
            <a href="#" className="pb-1">
              Apple Trade In
            </a>
            <a href="#">Financing</a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-10 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              More from iPad
            </p>
            <a href="#" className="pb-1">
              iPad Support
            </a>
            <a href="#" className="pb-1">
              AppleCare+ for iPad
            </a>
            <a href="#" className="pb-1">
              iPadOS 17
            </a>
            <a href="#" className="pb-1">
              Apps by Apple
            </a>
            <a href="#" className="pb-1">
              iCloud+
            </a>
            <a href="#">Education</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPad;
