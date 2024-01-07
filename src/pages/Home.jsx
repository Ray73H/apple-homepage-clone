import iphoneImg from "../images/iphone-bg.jpg";
import secondIphone from "../images/iphone-bg2.jpg";
import watch from "../images/watch-bg.jpg";

const Home = () => {
  return (
    <div>
      {/* Iphone 15 Pro */}
      <a href="/" className="block w-screen h-[85vh] mb-3">
        <div className="relative h-[85vh]">
          <div className="bg-black text-white flex flex-col items-center justify-center pt-20">
            <h1 className="text-5xl font-bold z-10">iPhone 15 Pro</h1>
            <h2 className="text-2xl pt-3 z-10">
              Titanium. So strong. So light. So Pro.
            </h2>
            <div className="flex items-center justify-center space-x-4 text-xl pt-3 pb-2 z-10">
              <a href="#" className="custom-link">
                Learn more
                <span className="ml-1">{">"}</span>
              </a>
              <a href="#" className="custom-link">
                Buy
                <span className="ml-1">{">"}</span>
              </a>
            </div>
          </div>
          <img
            className="absolute inset-0 w-full h-full object-cover transform scale-100"
            src={iphoneImg}
            alt="iphone"
          />
        </div>
      </a>
      {/* Iphone 15 */}
      <a href="/" className="block w-screen h-[80vh] mb-3">
        <div className="relative h-[80vh]">
          <div className="bg-white text-black flex flex-col items-center justify-center pt-14">
            <h1 className="text-5xl font-bold z-10">iPhone 15</h1>
            <h2 className="text-2xl pt-3 z-10">
              New camera. New design. Newphoria.
            </h2>
            <div className="flex items-center justify-center space-x-4 text-xl pt-3 pb-2 z-10">
              <a href="#" className="custom-link2">
                Learn more
                <span className="ml-1">{">"}</span>
              </a>
              <a href="#" className="custom-link2">
                Buy
                <span className="ml-1">{">"}</span>
              </a>
            </div>
          </div>
          <img
            className="absolute inset-0 w-full h-full object-cover transform scale-100"
            src={secondIphone}
            alt="iphone"
          />
        </div>
      </a>
      {/* Watch */}
      <a href="/" className="block w-screen h-[100vh]">
        <div className="relative h-[100vh] mb-3">
          <div className="bg-white text-white flex flex-col items-center justify-end min-h-screen pb-16">
            <h1 className="text-5xl font-bold z-10">WATCH</h1>
            <p className="text-large z-10">SERIES 9</p>
            <h2 className="text-2xl pt-2 z-10">
              Double tap. A magical new way to use Apple Watch.
            </h2>
            <div className="flex items-center justify-center space-x-4 text-xl pt-5 z-10">
              <a
                href="#"
                className="bg-white text-black px-5 py-2 rounded-full"
              >
                Learn more
              </a>
              <a
                href="#"
                className="bg-white text-black px-5 py-2 rounded-full"
              >
                Buy
              </a>
            </div>
          </div>
          <img
            className="absolute inset-0 w-full h-full object-cover transform scale-100"
            src={watch}
            alt="iphone"
          />
        </div>
      </a>
    </div>
  );
};

export default Home;
