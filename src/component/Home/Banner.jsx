import { Swiper, SwiperSlide } from "swiper/react";
import BannerBg from "../../assets/image/banner-bg.png";

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
    <div
      className="hero min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat w-full overflow-hidden"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="hero-content w-full max-w-full lg:max-w-7xl mx-auto flex-col-reverse md:flex-row-reverse lg:flex-row-reverse gap-6 sm:gap-8 md:gap-10 lg:gap-16">
        {/* Swiper Section */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper overflow-hidden"
          >
            {data.map((image, idx) => (
              <SwiperSlide
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image.image}
                  alt={`Eco Adventure ${idx + 1}`}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-950 leading-tight">
            Welcome to <br className="hidden sm:block" />
            <div className="inline-block animate__animated animate__fadeInLeft animate__slower animate__delay-1s">
              Eco Adventures
            </div>
          </h1>

          <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-950 leading-relaxed">
            Explore the beauty of nature with unforgettable eco-friendly
            adventures. From mountains to oceans, experience it all in a
            sustainable way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
