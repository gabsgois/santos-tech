import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import {
  bgVetorSolutions,
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
  BoxHeader,
  BoxText,
  BoxWhats,
  Card,
  Section,
  SwiperReact,
} from './styles';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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
    <Section data-header="solutions">
      <Container>
        <BoxHeader>
          <BoxText>
            <Text variant="spanSmall">Soluções</Text>

            <Text
              variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
              color={theme.colors.green.dark}
              // mb={48}
            >
              Protegemos e facilitamos o que importa
            </Text>
          </BoxText>

          <img src={bgVetorSolutions} alt="" />
        </BoxHeader>

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
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              type: 'progressbar',
            }}
            modules={[Pagination]}
          >
            {data.map(item => (
              <SwiperSlide style={{ maxWidth: 'fit-content' }}>
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
