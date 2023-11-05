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

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-top: 24px;
  }
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

    & > div {
      display: flex;
      justify-content: space-between;
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

export const BoxText = styled.div``;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column-reverse;
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
  display: grid;

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

export const SwiperReact = styled(Swiper)`
  .swiper-wrapper {
    margin-bottom: 50px;
  }

  .swiper-pagination.swiper-pagination-progressbar.swiper-pagination-horizontal {
    margin-top: 430px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      background-color: ${theme.colors.gray.dark};
      border-radius: 10px;
    }
  }

  .swiper-pagination-progressbar-fill {
    background-color: ${theme.colors.green.main};
    border-radius: 10px;
  }
`;

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
