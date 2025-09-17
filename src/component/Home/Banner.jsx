import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

// import "animate.css";
import "animate.css/animate.min.css";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const data = useLoaderData();
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
            {data.map((image, idx) => (
              <SwiperSlide key={idx} className="rounded-xl overflow-hidden">
                <img
                  src={image.image}
                  alt={`Eco Adventure ${idx + 1}`}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to <br />
            <div className="inline-block animate__animated animate__fadeInLeft animate__slower animate__delay-1s">
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
