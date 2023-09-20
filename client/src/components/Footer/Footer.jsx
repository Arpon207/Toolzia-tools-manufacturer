import NavIcon from "../../assets/Icons/tools.png";
import {
  contact,
  production,
  quickLinks,
  social,
} from "../../constants/footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-10 bg-[#FF6666] md:hidden"></div>
      <footer className=" bg-[url('/src/assets/curve_overlay_big.png')] bg-[#1A191D] py-20">
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-[30%_80%] gap-10 lg:gap-0 text-base-200 [&_h3]:text-[#FF6666] [&_h3]:text-xl [&_h3]:mb-2 [&_li]:text-md  [&_li:hover]:text-[#FF6666] [&_li]:cursor-pointer [&_li]:duration-200 mb-10">
          <div>
            <h3 className="flex gap-2 font-semibold mb-5">
              <img src={NavIcon} alt="" width={25} />
              Toozia
            </h3>
            <p className="text-sm mb-5">
              A leading developer of A-grade commercial, <br /> industrial and
              residential projects in USA. <br /> Since its foundation the
              company.
            </p>
            <div className="flex gap-5">
              {social.map(({ link, icon }, i) => (
                <Link
                  to={link}
                  className="hover:scale-125 ease-in duration-200"
                >
                  <img src={icon} alt="" width={25} />
                </Link>
              ))}
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 lg:gap-0">
            <div>
              <div>
                <h3>Contact Company</h3>
                <ul>
                  {contact.map(({ icon, name }, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <img className="contact_icon" src={icon} alt="" />
                      <p>{name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h3>Quick Links</h3>
                <ul>
                  {quickLinks.map(({ link, name }, i) => (
                    <li key={i}>
                      <Link to={link}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h3>Customer Services</h3>
                <ul>
                  {production.map(({ link, name }, i) => (
                    <li key={i}>
                      <Link to={link}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="divider before:bg-white after:bg-white before:h-[1px] after:h-[1px] w-4/5 mx-auto"></div>
        <div className="w-4/5 mx-auto text-base-200 flex justify-between">
          <p className="">Copyright © 2022 TOOLZIA-Tool Manufacturer.</p>
          <p className="hover:text-[#FF6666] duration-200 cursor-pointer">
            Terms & Policy
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
