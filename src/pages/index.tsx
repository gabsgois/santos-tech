import AOS from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Layout from '../Layout';
import { Hero } from '../container';

const AppPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Hero />

      {/* <Video src="/video.mp4" loop controls autoPlay /> */}
    </Layout>
  );
};

export default AppPage;
