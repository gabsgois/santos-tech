import styled from 'styled-components';
import {
  Swiper,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import { bgDepositions } from '../../assets/depositions';
import { btnNext, btnPrev } from '../../assets/partners';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.cream};
  /* background-image: url(${bgDepositions});
  background-repeat: no-repeat;
  background-position-x: 1264px;
  background-position-y: 63px; */
  object-fit: cover;
  padding-top: 72px;
  padding-bottom: 202px;
`;

export const Container = styled(ContainerGrid)`
  background-image: url(${bgDepositions});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-image: none;
    display: flex;
    flex-direction: column;
  }
`;

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
    /* background-color: ${theme.colors.green.dark}; */
    /* color: ${theme.colors.white}; */
    /* border-radius: 50%; */

    &::after {
      display: none;
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      /* display: none; */
    }
  }

  .swiper-button-next {
    background-image: url(${btnNext});
    background-repeat: no-repeat;
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 98px;
    z-index: 1;
  }

  .swiper-button-prev {
    background-image: url(${btnPrev});
    background-repeat: no-repeat;
    cursor: pointer;
    left: -20px;
    position: absolute;
    top: 98px;
    z-index: 1;
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
  }
`;

export const BoxCard = styled.div`
  width: 100%;
  max-width: 371px;
  height: 490px;
  border-radius: 25px;
  background-color: ${theme.colors.cream};
  box-shadow: 5px 5px 7px 0px rgba(184, 175, 167, 0.25),
    1px 1px 2px 0px #cbc8c4,
    -2px -2px 2px 0px rgba(255, 248, 240, 0.5),
    -6px -6px 6px 0px rgba(255, 237, 219, 0.25);
`;

export const BoxImage = styled.div`
  width: 100%;
  max-width: 351px;
  height: 100%;
  max-height: 230px;
  border-radius: 15px;
  margin-top: 10px;
  position: relative;

  & > img:nth-child(2) {
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 1;
  }
`;

export const BoxText = styled.div`
  margin-top: 16px;
  margin-inline: 10px;
`;

export const BoxBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxClients = styled.div`
  display: flex;
  gap: 30px;
`;
