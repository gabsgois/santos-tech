import { About } from '@/containers/About';
import { Contacts } from '@/containers/Contacts';
import { Hero } from '@/containers/Hero';
import { Partners } from '@/containers/Partners';
import { Projects } from '@/containers/Projects';
import { Solutions } from '@/containers/Solutions';
import { Testimonials } from '@/containers/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />

      <Solutions />
      <About />
      <Projects />
      <Testimonials />
      <Partners />
      <Contacts />
    </>
  );
}
