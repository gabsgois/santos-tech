import AOS from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Layout from '../Layout';
import Solutions from '../container/Solutions/Solutions';

const AppPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      {/* <Hero /> */}
      <Solutions />
      {/* <About /> */}
      {/* <Video src="/video.mp4" loop controls autoPlay /> */}
      {/* <Depositions />
      <Partners />
      <Contact /> */}
    </Layout>
  );
};

export default AppPage;
