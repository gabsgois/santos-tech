import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { imageProjects } from '../../assets/projects';
import { Lightbox, Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxSlides,
  BoxText,
  BoxTitle,
  Container,
  Section,
  SwiperReact,
  SwiperSlide,
} from './styles';

const data = [
  {
    id: 1,
    img: imageProjects,
    title: 'Condomínio Washington Luis',
    description: 'Instalação de câmeras',
  },
  {
    id: 2,
    img: imageProjects,
    title: 'Almai - Clínica especializada em Autismo',
    description: 'Instalação de Computadores e rede',
  },
  {
    id: 3,
    img: imageProjects,
    title: 'Clínica Dentária',
    description: 'Instalação de câmeras, interfones e automação',
  },
];

const Projects: React.FC = () => {
  const [openGallery, setOpenGallary] = useState(false);
  const { isDesktop } = useWindowSize();

  const handleGallery = (id: number) => {
    setOpenGallary(true);
  };

  return (
    <Section>
      <Container>
        <BoxTitle>
          <Text
            variant="spanSmall"
            color={theme.colors.cream}
            uppercase
          >
            projetos
          </Text>

          <Text
            variant="h2Desktop"
            color={theme.colors.cream}
            mb={42}
          >
            Conheça alguns dos projetos que já realizamos
          </Text>
        </BoxTitle>

        <SwiperReact
          slidesPerView="auto"
          navigation
          pagination={!isDesktop}
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          loop
        >
          {data.map(item => (
            <SwiperSlide>
              <BoxSlides key={item.id}>
                <img src={item.img} alt="" />

                <BoxText>
                  <Text
                    variant="h4Desktop"
                    color={theme.colors.cream}
                  >
                    {item.title}
                  </Text>

                  <Text
                    variant="body"
                    color={theme.colors.cream}
                  >
                    {item.description}
                  </Text>
                </BoxText>
              </BoxSlides>
            </SwiperSlide>
          ))}
        </SwiperReact>
      </Container>

      <Lightbox
        open={openGallery}
        images={data}
        onClose={() => setOpenGallary(false)}
      />
    </Section>
  );
};

export default Projects;
