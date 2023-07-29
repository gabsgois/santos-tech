import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
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
import { Btn } from '../../components/Button/styles';
import { useWindowSize } from '../../providers';
import theme from '../../theme/theme';
import { BoxCards, Card, Section, SwiperReact } from './styles';

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
  const isDesktop = useWindowSize();

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
            spaceBetween={30}
          >
            <SwiperSlide>
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
            </SwiperSlide>
          </SwiperReact>
        )}

        <Btn mt={48} size="medium" color="greenDark">
          Solicite um orçamento
        </Btn>
      </Container>
    </Section>
  );
};

export default Solutions;
