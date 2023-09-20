import React from "react";
import { commitments } from "../../constants/commitments";
import avatar from "../../assets/no-image.jpg";

const Why_Choose_Us = () => {
  return (
    <div className="py-32">
      <div className="flex flex-col lg:flex-row h-fit w-4/5 mx-auto gap-10">
        <div className="flex-[2] p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-3 border-b border-[#FF6666] text-[#FF6666] w-fit pb-2">
            Why We are Best in Industry
          </h2>
          <p className="mb-5 text-md text-gray-600">
            Ever since, we have dedicated ourselves to making industrial Hand
            tools with the goal to become the best manufacturers of Tools in
            World. Here's some reasons why we're unique. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos nulla repudiandae
            adipisci at! Quasi itaque, iusto tempora alias totam nihil harum
            atque veniam! Dignissimos magni quam velit repudiandae. Perferendis
            nam placeat eum iusto? Blanditiis in provident soluta eveniet quia
            minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus mollitia molestiae quam illum architecto ad sint quis
            similique quod provident? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, consequatur?
          </p>
          <div className="flex gap-5 mb-5 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium">John Doe</h3>
              <p className="text-sm">Founder, Toolzia</p>
            </div>
          </div>
          <button className="btn bg-[#FF6666] lg:mr-5 hover:bg-[#e25555] border-none text-white">
            More Details
          </button>
        </div>

        <div className="commitments_card flex-[3] grid lg:grid-cols-2 [&>*:nth-child(2)]:bg-[#FF6666] [&>*:nth-child(3)]:bg-neutral-focus [&>*:nth-child(3)]:text-base-200 [&>*:nth-child(2)]:text-base-200 border">
          {commitments.map(({ icon, title, desc }, i) => (
            <div key={i} className="p-10 flex flex-col lg:flex-row gap-3">
              <div className="flex-[2] flex justify-center items-center lg:block">
                <img className="w-2/4 lg:w-[100%] " src={icon} alt="" />
              </div>
              <div className="flex-[4]">
                <h3 className="text-xl mb-2 font-semibold">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why_Choose_Us;
