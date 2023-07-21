import  { useEffect, useState } from 'react';
import banner1 from '../../images/banner/banner1.png'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 8000);

    return () => clearInterval(sliderInterval);
  }, []);

  const sliderButton1 = () => {
    setCurrentSlide(1);
  };

  const sliderButton2 = () => {
    setCurrentSlide(2);
  };

  return (
    <div className="slider max-w-full h-screen relative overflow-hidden">
      <div
        id="slider-1"
        className={`container mx-auto slider-item absolute top-0 left-0 right-0 bottom-0 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      >
        <div className="w-full h-full relative">
          <img
            src={banner1}
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 px-20 transform -translate-y-1/2 text-white text-left mx-10">
            <p className="text-sm uppercase font-bold">Services</p>
            <p className="text-3xl font-bold">Hello world</p>
            <p className="text-xl mb-10 leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a
              href="#"
              className="bg-purple-800 py-3 px-6 text-white font-bold uppercase rounded hover:bg-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        id="slider-2"
        className={`container mx-auto slider-item absolute top-0 left-0 right-0 bottom-0 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      >
        <div className="w-full h-full relative">
          <img
            src="https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 px-20 transform -translate-y-1/2 text-white text-left mx-10">
            <p className="text-sm uppercase font-bold">Services</p>
            <p className="text-3xl font-bold">Hello world</p>
            <p className="text-xl mb-10 leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a
              href="#"
              className="bg-purple-800 py-3 px-6 text-white font-bold uppercase rounded hover:bg-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-12 mx-auto pb-2 absolute bottom-0 left-0 right-0">
        <button
          id="sButton1"
          onClick={sliderButton1}
          className={`bg-purple-400 rounded-full w-4 pb-2 ${currentSlide === 1 ? 'bg-purple-800' : ''}`}
        ></button>
        <button
          id="sButton2"
          onClick={sliderButton2}
          className={`bg-purple-400 rounded-full w-4 p-2 ${currentSlide === 2 ? 'bg-purple-800' : ''}`}
        ></button>
      </div>
    </div>
  );
};

export default Banner;
