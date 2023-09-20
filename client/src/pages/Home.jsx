import Banner from "../components/Banner/Banner";
import Business_summeries from "../components/Business_summeries/Business_summeries";
import Featured_Clients from "../components/Featured_Clients/Featured_Clients";
import Footer from "../components/Footer/Footer";
import Greet from "../components/Greet/Greet";
import Reviews from "../components/Reviews/Reviews";
import Tools from "../components/Tools/Tools";
import Why_Choose_Us from "../components/Why_Choose_Us/Why_Choose_Us";

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
