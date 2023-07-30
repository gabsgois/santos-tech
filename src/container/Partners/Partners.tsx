import React from 'react';
import {
  interbras,
  panasonic,
  ppa,
  siemens,
  ubiquiti,
} from '../../assets/partners';
import { Text } from '../../components';
import theme from '../../theme/theme';
import {
  Container,
  Section,
  SwiperReact,
  SwiperSlide,
} from './styles';

const Partners: React.FC = () => {
  return (
    <Section>
      <Container>
        <Text
          variant="spanSmall"
          color={theme.colors.green.dark}
          uppercase
        >
          parceiros
        </Text>
        <Text
          variant="h2Desktop"
          color={theme.colors.green.dark}
        >
          Empresas que trabalhamos em colaboração
        </Text>

        <SwiperReact
          slidesPerView={1}
          navigation
          spaceBetween={30}
        >
          <SwiperSlide>
            <img src={interbras} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={panasonic} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ppa} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={siemens} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ubiquiti} alt="" />
          </SwiperSlide>
        </SwiperReact>
      </Container>
    </Section>
  );
};

export default Partners;
