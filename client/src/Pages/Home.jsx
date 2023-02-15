import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import Greet from "../components/Greet/Greet";
import Reviews from "../components/Reviews/Reviews";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Banner from "./../components/Banner/Banner";
import Tools from "./../components/Tools/Tools";
import Footer from "./../components/Footer/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
import { useState } from "react";
const Home = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <div className="home">
      {show && <GoToTop />}
      <Banner />
      <Greet />
      <Tools />
      <WhyChooseUs />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
