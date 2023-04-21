import styled from 'styled-components';
import { primeiradobra } from '../../assets/hero';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const ContainerHero = styled.div`
  background-image: url(${primeiradobra});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 730px;
  margin-top: -194px;
  position: relative;
  width: 100%;

  &::after {
    background: linear-gradient(
      180deg,
      #31363e 0%,
      rgba(49, 54, 62, 0) 100%
    );
    bottom: 0;
    content: '';
    height: 420px;
    position: absolute;
    transform: matrix(1, 0, 0, -1, 0, 0);
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: -138px;
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
  text-transform: uppercase;
`;

export const Container = styled(ContainerGrid)`
  bottom: 163px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 1;
`;
