import AOS from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Layout from '../Layout';
import { Hero } from '../container';
import Contact from '../container/Contact/Contact';
import Partners from '../container/Partners/Partners';
import Solutions from '../container/Solutions/Solutions';

const AppPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Hero />
      <Solutions />

      {/* <Video src="/video.mp4" loop controls autoPlay /> */}

      <Partners />
      <Contact />
    </Layout>
  );
};

export default AppPage;
