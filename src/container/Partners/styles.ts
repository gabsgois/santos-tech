import styled from 'styled-components';
import {
  Swiper,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import { btnNext, btnPrev } from '../../assets/partners';
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

export const SwiperReact = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-button-next,
  .swiper-button-prev {
    height: 54px;
    width: 54px;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
      display: none;
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
    }
  }

  .swiper-button-next {
    right: 0;
    position: absolute;
    background-image: url(${btnNext});
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 1;
  }

  .swiper-button-prev {
    left: 0;
    position: absolute;
    background-image: url(${btnPrev});
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 1;
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
  }
`;
