import styled from 'styled-components';
import {
  Swiper,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import {
  bgDesk,
  bgMob,
  buttonLeft,
  buttonRight,
} from '../../assets/projects';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.main};
  padding-block: 72px;
`;

export const Container = styled(ContainerGrid)`
  background-image: url(${bgDesk});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  padding-top: 72px;
  padding-bottom: 72px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-image: url(${bgMob});
    max-width: 375px;
    width: 100%;
  }
`;

export const BoxTitle = styled.div`
  max-width: 560px;
`;

export const SwiperReact = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 27px;
  padding-block: 10px;

  .swiper-button-next,
  .swiper-button-prev {
    height: 54px;
    width: 54px;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.2s ease-in-out;
    transform: translateX(-50%);

    &::after {
      display: none;
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }

  .swiper-button-next {
    left: 75%;
    position: absolute;
    background-image: url(${buttonRight});
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 1;
  }

  .swiper-button-prev {
    left: 27px;
    position: absolute;
    background-image: url(${buttonLeft});
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 1;
  }
`;

// export const Slides = styled.div`
//   align-items: center;

//   & > img {
//     display: block;
//     height: auto;
//     margin-inline: auto;
//     object-fit: cover;

//     @media (max-width: ${theme.breakpoints.desktop.px}) {
//       height: auto;
//     }
//   }

//   @media (max-width: ${theme.breakpoints.desktop.px}) {
//     flex-direction: column;
//     height: auto;
//     padding-block: 24px;
//     padding-inline: 0;
//   }
// `;

export const SwiperSlide = styled(SwiperSlideReact)`
  border: 1px solid ${theme.colors.green.main};
  display: flex;
  border-radius: 25px;
  box-shadow: 5px 5px 7px 0px rgba(27, 43, 30, 0.25),
    1px 1px 2px 0px rgba(36, 49, 38, 0.25),
    -2px -2px 2px 0px rgba(69, 89, 73, 0.5),
    -6px -6px 6px 0px rgba(46, 81, 54, 0.25);
  width: 75%;
  height: 566px;
  padding: 10px;
  background-color: ${theme.colors.green.main};

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    border-bottom: 1px solid ${theme.colors.purple};
    max-width: 375px;
    width: 100%;
  }
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxSlides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-inline: auto;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
  }
`;
