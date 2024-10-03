import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  imageAlmai,
  imageCaizen,
  imageEscola,
  imageLavanderia,
  imageSet,
  imageUltragaz,
} from '../../assets/projects';
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
    img: imageAlmai,
    title: 'Instituto Almai',
    description:
      'Computadores, rede cabeada e wireless com suporte técnico',
  },
  {
    id: 2,
    img: imageCaizen,
    title: 'Caizen - Comunicação Visual',
    description:
      'Instalação e manutenção de Sistema de segurança',
  },
  {
    id: 3,
    img: imageSet,
    title: 'Set Logística',
    description:
      'Sistema de Segurança Eletrônica CFTV e Alarme e TI',
  },
  {
    id: 4,
    img: imageUltragaz,
    title: 'Ultragaz Guáruja',
    description: 'Sistema de Segurança Eletrônica CFTV e Alarme',
  },
  {
    id: 5,
    img: imageEscola,
    title:
      'Escola - E.E. Esmeraldo Soares Tarquínio de Campos Filho',
    description: 'Sistema de Segurança Eletrônica CFTV e Alarme',
  },
  {
    id: 6,
    img: imageLavanderia,
    title: 'Lavanderia da Sorte',
    description: 'Câmeras, interfones e automação',
  },
];

const Projects: React.FC = () => {
  const [openGallery, setOpenGallary] = useState(false);
  const { isDesktop } = useWindowSize();

  const handleGallery = (id: number) => {
    setOpenGallary(true);
  };

  return (
    <Section data-header="projects">
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
            variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
            color={theme.colors.cream}
            mb={42}
          >
            Conheça alguns dos projetos que já realizamos
          </Text>
        </BoxTitle>

        <SwiperReact
          slidesPerView="auto"
          navigation
          // pagination={!isDesktop }
          pagination={{
            type: 'progressbar',
          }}
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
