import industry from "../../assets/industry.jpg";

const Greet = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-20 lg:my-0 w-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-20 justi">
          <div className="lg:max-w-[40%] relative">
            <img src={industry} className=" rounded-lg shadow-2xl" />
            <div className="flex gap-3  items-center  p-5 absolute bottom-20 right-0 lg:right-[-2rem] bg-base-200 rounded shadow-sm">
              <h3 className="text-6xl text-[#FF6666] font-semibold">23+</h3>
              <p className="text-2xl text-neutral font-medium">
                Years of <br /> experience
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-[#FF6666] text-xl mb-3 font-semibold">
              Welcome to Toolzia
            </h5>
            <h3 className=" text-3xl lg:text-5xl font-semibold mb-5 lg:mb-10">
              We are the leading Tools manufacturer in the world
            </h3>
            <p className="mb-10 lg:mb-20 text-md">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                itaque voluptas facere, vero pariatur nemo doloremque quas
                similique libero deserunt voluptatem consequatur minima.
                Praesentium sunt architecto
              </li>
              <br />
              <br />
              <li>
                explicabo cumque officia. Iste cum qui ipsam facilis veniam
                nobis beatae, ratione sit accusantium, molestiae laborum
                deleniti quo commodi voluptatibus? Sint libero odit tempora
                excepturi molestias sapiente quos repudiandae rerum, officia,
                asperiores perferendis pariatur! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quibusdam, cupiditate.
              </li>
            </p>

            <button className="btn bg-[#FF6666] hover:bg-[#e25555] border-none text-white ">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
