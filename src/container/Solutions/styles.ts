import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { bgSolutions } from '../../assets/solutions';
import theme from '../../theme/theme';
import { Container as ContainerGrid } from './../Hero/styles';

export const Section = styled.section`
  background-image: url(${bgSolutions});
  background-position-x: center;
  padding-bottom: 72px;
  padding-top: 72px;
`;

export const Container = styled(ContainerGrid)`
  color: ${theme.colors.green.dark};
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Card = styled.div`
  & > img {
    border-radius: 15px;
    border: 10px solid ${theme.colors.white};
  }

  & > h4 {
    color: ${theme.colors.white};
    margin-top: -90px;
    max-width: 250px;
    padding-left: 16px;
  }
`;

export const SwiperReact = styled(Swiper)`
  /* position: relative; */
  background-color: ${theme.colors.purple};
  padding-bottom: 30px;
  padding-inline: 27px;
  width: calc(100% + 54px);
  left: 50%;
  transform: translateX(-50%);

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
      /* display: none; */
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
    display: none;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: block;
      margin: 0 auto;
    }

    .swiper-pagination-bullet {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      border-radius: 0;
      height: 6px;
      opacity: 1;
      width: 6px;

      &.swiper-pagination-bullet-active {
        background-color: ${theme.colors.white};
        position: relative;

        &::before {
          background-color: transparent;
          content: '';
          height: 12px;
          left: -4px;
          position: absolute;
          top: -4px;
          width: 12px;
        }
      }
    }
  }
`;

// export const SwiperSlide = styled(SwiperSlideReact)`
//   @media (max-width: ${theme.breakpoints.desktop.px}) {
//     border-bottom: 1px solid ${theme.colors.gray};
//   }
// `;
