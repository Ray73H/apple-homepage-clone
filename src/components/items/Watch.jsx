const Watch = () => {
  return (
    <div className="absolute hidden w-screen h-auto left-0 dropdown-bg group-hover:block">
      <div className="container mx-auto z-10 w-[1100px] text-white p-8 pb-16">
        <div className="flex justify-start items-start">
          <div className="flex flex-col items-start justify-center text-2xl font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              Explore Watch
            </p>
            <a href="#" className="pb-2">
              Explore All Apple Watch
            </a>
            <a href="#" className="pb-2">
              Apple Watch Series 9
            </a>
            <a href="#" className="pb-2">
              Apple Watch Ultra 2
            </a>
            <a href="#" className="pb-2">
              Apple Watch SE
            </a>
            <a href="#" className="pb-2">
              Apple Watch Nike
            </a>
            <a href="#" className="pb-4">
              Apple Watch Hermes
            </a>
            <a href="#" className="pb-1 text-xs">
              Compare Watch
            </a>
            <a href="#" className="text-xs">
              Why Apple Watch
            </a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-28 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">Shop Watch</p>
            <a href="#" className="pb-1">
              Shop Apple Watch
            </a>
            <a href="#" className="pb-1">
              Apple Watch Studio
            </a>
            <a href="#" className="pb-1">
              Apple Watch Bands
            </a>
            <a href="#" className="pb-1">
              Apple Watch Accessories
            </a>
            <a href="#" className="pb-1">
              Apple Trade In
            </a>
            <a href="#">Financing</a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-10 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              More from Watch
            </p>
            <a href="#" className="pb-1">
              Apple Watch Support
            </a>
            <a href="#" className="pb-1">
              AppleCare+
            </a>
            <a href="#" className="pb-1">
              watchOS 10
            </a>
            <a href="#" className="pb-1">
              Apps by Apple
            </a>
            <a href="#">Apple Fitness+</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
