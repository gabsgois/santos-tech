import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from '../../assets/solutions';
import { Container, Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme/theme';
import {
  BoxCards,
  BoxWhats,
  Card,
  Section,
  SwiperReact,
  SwiperSlide,
} from './styles';

const data = [
  {
    img: image1,
    description: 'Instalação de câmeras',
  },
  {
    img: image2,
    description: 'Interfones',
  },
  {
    img: image3,
    description: 'Acesso através de reconhecimento facial',
  },
  {
    img: image4,
    description: 'Automação de portas e portões',
  },
  {
    img: image5,
    description: 'instalação de alarmes de incêndio',
  },
  {
    img: image6,
    description: 'Automação residencial',
  },
  {
    img: image7,
    description: 'Instalação de painéis solares',
  },
  {
    img: image8,
    description: 'Carregadores veiculares',
  },
];

const Solutions: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Section>
      <Container>
        <Text variant="spanSmall">Soluções</Text>
        <Text
          variant="h2Desktop"
          color={theme.colors.green.dark}
          mb={48}
        >
          Protegemos e facilitamos o que importa
        </Text>

        {isDesktop ? (
          <BoxCards>
            {data.map(item => (
              <Card>
                <img src={item.img} alt="" />
                <Text as="h4" variant="h4Desktop">
                  {item.description}
                </Text>
              </Card>
            ))}
          </BoxCards>
        ) : (
          <SwiperReact
            slidesPerView={1}
            pagination
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={8}
          >
            {data.map(item => (
              <SwiperSlide>
                <Card>
                  <img src={item.img} alt="" />
                  <Text as="h4" variant="h4Desktop">
                    {item.description}
                  </Text>
                </Card>
              </SwiperSlide>
            ))}
          </SwiperReact>
        )}

        <BoxWhats>
          <Link
            href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              Solicite um orçamento
              <BsWhatsapp />
            </a>
          </Link>
        </BoxWhats>
      </Container>
    </Section>
  );
};

export default Solutions;
