import Banner from "../components/Homepage/Banner";
import Business_summeries from "../components/Homepage/Business_summeries";
import Featured_Clients from "../components/Homepage/Featured_Clients";
import Footer from "../components/Footer/Footer";
import Greet from "../components/Homepage/Greet";
import Reviews from "../components/Homepage/Reviews";
import Tools from "../components/Homepage/Tools";
import Why_Choose_Us from "../components/Homepage/Why_Choose_Us";

const Home = () => {
  return (
    <div>
      <Banner />
      <Greet />
      <Tools />
      <Why_Choose_Us />
      <Business_summeries />
      <Featured_Clients />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
