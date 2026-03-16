import Hero from "../sections/hero/Hero";
import About from "../sections/about/About";
import RecentWork from "../sections/recent-work/RecentWork";
import Activity from "../sections/activity/Activity";
import Experience from "../sections/experience/Experience";
import Certificates from "../sections/certificates/Certificates";

import Divider from "../components/micro/Divider";

const Home = () => {
  return (
    <>
      <Hero />
      <Divider className="mt-20" />
      <About />
      <Divider className="mt-20" />
      <RecentWork />
      <Divider className="mt-20" />

      <Activity />
      <Divider className="mt-20" />

      <Experience />
      <Divider className="mt-20" />

      <Certificates />
    </>
  );
};

export default Home;
