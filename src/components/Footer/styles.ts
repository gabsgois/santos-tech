import styled from 'styled-components';
import theme from '../../theme';
import { Container } from '../Grid';

export const Section = styled.div`
  overflow: hidden;
  padding-top: 64px;
`;

export const Content = styled(Container)`
  & > header {
    display: grid;
    margin-bottom: 40px;
    position: relative;

    &::before {
      background-color: ${theme.colors.gray};
      bottom: 1px;
      content: '';
      height: 1px;
      left: 216px;
      position: absolute;
      width: 100vw;
    }
  }

  & > p {
    font-family: 'Nexa';
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    padding-bottom: 64px;
  }
`;

export const BoxDescription = styled.div`
  border-top: 1px solid ${theme.colors.gray};
  padding-block: 40px;

  img {
    margin-top: 40px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 100px;
  }
`;

export const BoxImages = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-bottom: 42px;

  img {
    object-fit: cover;
  }
`;
