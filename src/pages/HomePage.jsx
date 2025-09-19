import AdvExperiences from "../component/Home/AdvExperiences";
import Banner from "../component/Home/Banner";
import TestimonialSection from "../component/Home/TestimonialSection";
import WhyChooseSection from "../component/Home/WhyChooseSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AdvExperiences />
      <WhyChooseSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
