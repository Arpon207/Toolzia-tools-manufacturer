import client1 from "../../assets/featured clients/client-01.webp";
import client2 from "../../assets/featured clients/client-02.webp";
import client3 from "../../assets/featured clients/client-03.webp";
import client4 from "../../assets/featured clients/client-04.webp";
import client5 from "../../assets/featured clients/client-05.webp";
import client6 from "../../assets/featured clients/client-06.webp";

const Featured_Clients = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 my-20 w-3/4 mx-auto gap-10 items-center justify-center">
      <img src={client1} alt="" />
      <img src={client2} alt="" />
      <img src={client3} alt="" />
      <img src={client4} alt="" />
      <img src={client5} alt="" />
      <img src={client6} alt="" />
    </div>
  );
};

export default Featured_Clients;
