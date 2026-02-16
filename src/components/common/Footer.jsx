import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import Avatar from "../micro/Avatar";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata", // IST timezone
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-neutral-800 text-black bg-white">
      <div className="container-content py-20">
        {/* Main Content */}
        <div className="relative">
          {/* Heading with Avatar */}
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-[4rem] font-medium leading-[110%] flex items-center gap-4">
              <Avatar width={100} height={62} />
              Let's Work <br />
            </h1>
            <h1 className="text-[4rem] font-medium leading-[110%] flex items-center gap-4">
              Together
            </h1>
          </div>

          {/* About Me Circle - Positioned absolutely */}
          <div className="absolute right-0 top-0 w-32 h-32 md:w-40 md:h-40 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <span className="text-black font-semibold text-sm md:text-base">
              About me
            </span>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:kundan.webdev@gmail.com"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-orange-500 transition-colors"
            >
              kundan.webdev@gmail.com
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-orange-500 transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-neutral-800 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Local Time */}
            <div>
              <p className="text-neutral-500 text-sm mb-1">LOCAL TIME</p>
              <p className="text-black text-lg font-medium">{localTime} IST</p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-neutral-500 text-sm mb-3">SOCIALS</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;