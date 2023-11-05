import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { icon, image1 } from '../../assets/depositions';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxBox,
  BoxCard,
  BoxClients,
  BoxImage,
  BoxText,
  Container,
  Section,
  SwiperReact,
  SwiperSlide,
} from './styles';

const Depositions: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const dataCard = [
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
    {
      image: image1,
      icon: icon,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      name: 'Roberto Silva',
      company: 'Almai',
    },
  ];

  return (
    <Section data-header="depositions">
      <Container>
        <Text variant="spanSmall">Depoimentos</Text>
        <Text
          variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
          color={theme.colors.green.dark}
          mb={48}
        >
          O que os nossos clientes falam sobre nós
        </Text>

        <BoxClients>
          <SwiperReact
            slidesPerView={isDesktop ? 3 : 1}
            navigation={isDesktop}
            pagination={{
              type: 'progressbar',
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={36}
            loop
          >
            {dataCard.map(item => (
              <SwiperSlide>
                <BoxCard>
                  <BoxBox>
                    <BoxImage>
                      <img src={item.image} alt="cliente" />
                      <img src={item.icon} alt="aspas" />
                    </BoxImage>

                    <BoxText>
                      <Text
                        mb={16}
                        color={theme.colors.green.dark}
                      >
                        {item.content}
                      </Text>

                      <Text
                        mb={2}
                        variant="h5Desktop"
                        color={theme.colors.green.dark}
                      >
                        {item.name}
                      </Text>
                      <Text color={theme.colors.green.dark}>
                        {item.company}
                      </Text>
                    </BoxText>
                  </BoxBox>
                </BoxCard>
              </SwiperSlide>
            ))}
          </SwiperReact>
        </BoxClients>

        <Link
          href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            Seja um cliente Santos Telecom
            <BsWhatsapp />
          </a>
        </Link>
      </Container>
    </Section>
  );
};

export default Depositions;
