import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

// import "animate.css";
import "animate.css/animate.min.css";

const Banner = () => {
  return (
    <div className="hero bg-green-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Swiper Section */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
          >
            <SwiperSlide className="rounded-xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/XZPj8zZB/pexels-aronvisuals-1743165.jpg"
                alt="Eco Adventure 1"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/PZh1HzcZ/pexels-rafael-augusto-barbosa-da-silva-100709281-33930553.jpg"
                alt="Eco Adventure 2"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/jk59fSqm/pexels-stywo-1054218.jpg"
                alt="Eco Adventure 3"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to <br />
            <div className="inline-block animate__animated animate__bounce animate__slower animate__delay-1s animate__infinite">
              Eco Adventures
            </div>
          </h1>

          <p className="py-6 text-sm md:text-base">
            Explore the beauty of nature with unforgettable eco-friendly
            adventures. From mountains to oceans, experience it all in a
            sustainable way.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
