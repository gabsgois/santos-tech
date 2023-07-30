import styled from 'styled-components';
import {
  Swiper,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';

export const Section = styled.section`
  background-color: ${theme.colors.cream};
  padding-block: 72px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-block: 56px;
  }
`;

export const Container = styled(ContainerGrid)``;

export const SwiperReact = styled(Swiper)``;

export const SwiperSlide = styled(SwiperSlideReact)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
  }
`;
