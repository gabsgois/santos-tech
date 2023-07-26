import styled from 'styled-components';
import { bgHero, bgHeroMob } from '../../assets/hero';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const ContainerHero = styled.div`
  background-image: url(${bgHero});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 730px;
  margin-top: -194px;
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-image: url(${bgHeroMob});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    margin-top: -138px;
  }
`;

export const Container = styled(ContainerGrid)`
  margin-top: 300px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 1;

  & > p {
    padding-bottom: 10px;
    color: ${theme.colors.white};
  }

  & > button {
    position: absolute;
    margin-top: 40px;
    left: 0;
  }

  & > img {
    margin-top: 200px;
  }
`;

export const TitleHero = styled.h2`
  color: ${theme.colors.white};
  display: flex;
  font-family: 'Essonnes';
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 3px;
  line-height: 28px;
  max-width: 640px;
`;
