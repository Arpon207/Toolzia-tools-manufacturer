import {
  background,
  businessSummaries,
} from "../../constants/business_summeries";

const Business_summeries = () => {
  return (
    <div
      className={` bg-[#1A191D] pb-28  text-base-200`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-[#FF6666] w-3/4 mx-auto pt-16">
        <h3 className="text-3xl text-center  font-semibold">
          MILLIONS BUSINESS TRUST US
        </h3>
        <p className="text-2xl text-center  font-medium">
          TRY TO UNDERSTAND USERS EXPECTATION
        </p>
      </div>
      <div className="business_summeries_card grid grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto mt-20">
        {businessSummaries.map(({ icon, title, amount }, i) => (
          <div
            key={i}
            className="flex  flex-col text-center items-center gap-5"
          >
            <img className="" width={80} src={icon} alt="" />
            <h3 className="text-4xl font-semibold text-[#FF6666]">{amount}+</h3>
            <h5 className="text-xl">{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business_summeries;
