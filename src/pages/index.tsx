import AOS from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Layout from '../Layout';
import { About, Contact, Hero, Solutions } from '../container';

const AppPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Hero />
      <Solutions />
      <About />
      {/* <Projects /> */}
      {/* <Depositions /> */}
      {/* <Partners /> */}
      <Contact />
    </Layout>
  );
};

export default AppPage;
