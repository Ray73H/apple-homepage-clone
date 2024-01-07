const Store = () => {
  return (
    <div className="absolute hidden w-screen h-auto left-0 dropdown-bg group-hover:block">
      <div className="container mx-auto z-10 w-[1100px] text-white p-8 pb-16">
        <div className="flex justify-start items-start">
          <div className="flex flex-col items-start justify-center text-2xl font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">Shop</p>
            <a href="#" className="pb-2">
              Shop the Latest
            </a>
            <a href="#" className="pb-2">
              Mac
            </a>
            <a href="#" className="pb-2">
              iPad
            </a>
            <a href="#" className="pb-2">
              iPhone
            </a>
            <a href="#" className="pb-2">
              Apple Watch
            </a>
            <a href="#">Accessories</a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-28 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              Quick Links
            </p>
            <a href="#" className="pb-1">
              Find a Store
            </a>
            <a href="#" className="pb-1">
              Order Status
            </a>
            <a href="#" className="pb-1">
              Apple Trade In
            </a>
            <a href="#">Financing</a>
          </div>
          <div className="flex flex-col items-start justify-center text-xs pl-10 font-bold">
            <p className="text-gray-300 py-4 text-xs font-normal">
              Shop Special Stores
            </p>
            <a href="#" className="pb-1">
              Certified Refurbished
            </a>
            <a href="#" className="pb-1">
              Education
            </a>
            <a href="#" className="pb-1">
              Buisness
            </a>
            <a href="#" className="pb-1">
              Veterans and Military
            </a>
            <a href="#">Government</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
