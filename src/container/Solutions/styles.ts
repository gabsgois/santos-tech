import styled from 'styled-components';
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

  a {
    ${theme.typography.button}
    align-items: center;
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    display: flex;
    gap: 12px;
    justify-content: center;
    max-width: 270px;
    padding: 14px;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.green.dark};
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      max-width: 375px;
      width: 100%;
    }
  }

  & > button {
    margin-inline: 0;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    gap: 8px;
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 15px;
  padding: 10px;
  position: relative;

  & > img {
    border-radius: 15px;
    height: 100%;
    object-fit: cover;
  }

  & > h4 {
    bottom: 10px;
    color: ${theme.colors.white};
    left: 10px;
    padding: 16px;
    position: absolute;
    width: calc(100% - 20px);
  }
`;

// export const SwiperReact = styled(Swiper)`
//   /* position: relative; */
//   /* background-color: ${theme.colors.purple};
//   padding-bottom: 30px;
//   padding-inline: 27px;
//   width: calc(100% + 54px);
//   left: 50%;
//   transform: translateX(-50%); */

//   .swiper-button-next,
//   .swiper-button-prev {
//     /* height: 54px;
//     width: 54px;
//     background-repeat: no-repeat;
//     background-size: cover; */

//     &::after {
//       display: none;
//     }

//     @media (max-width: ${theme.breakpoints.desktop.px}) {
//       /* display: none; */
//     }
//   }

//   .swiper-button-next {
//     right: 0;
//   }

//   .swiper-button-prev {
//     left: 0;
//   }

//   .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
//     bottom: 0;
//     display: none;

//     @media (max-width: ${theme.breakpoints.desktop.px}) {
//       display: block;
//       margin: 0 auto;
//     }

//     .swiper-pagination-bullet {
//       /* background-color: ${theme.colors.white};
//       border: 1px solid ${theme.colors.white};
//       border-radius: 0;
//       height: 6px;
//       opacity: 1;
//       width: 6px; */

//       &.swiper-pagination-bullet-active {
//         /* background-color: ${theme.colors.white};
//         position: relative; */

//         &::before {
//           /* background-color: transparent;
//           content: '';
//           height: 12px;
//           left: -4px;
//           position: absolute;
//           top: -4px;
//           width: 12px; */
//         }
//       }
//     }
//   }
// `;

// export const SwiperSlide = styled(SwiperSlideReact)`
//   display: flex;
//   gap: 8px;

//   @media (max-width: ${theme.breakpoints.desktop.px}) {
//     border-bottom: 1px solid ${theme.colors.gray};
//   }
// `;

export const BoxWhats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 48px;
    margin-inline: 0 auto;
  }

  a {
    ${theme.typography.button}
    align-items: center;
    background-color: ${theme.colors.green.main};
    border-radius: 50px;
    border: 1px solid ${theme.colors.green.dark};
    color: ${theme.colors.white};
    display: flex;
    gap: 12px;
    justify-content: center;
    max-width: 290px;
    padding: 14px 30px;

    &:hover {
      background-color: ${theme.colors.cream};
      color: ${theme.colors.green.dark};
      border: 1px solid ${theme.colors.green.dark};
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      max-width: 375px;
      width: 100%;
    }
  }

  & > button {
    margin-inline: 0 auto;
  }
`;
