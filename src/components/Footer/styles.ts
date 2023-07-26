import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components/Grid';
import theme from '../../theme';

export const Section = styled.div`
  background-color: ${theme.colors.green.main};
  overflow: hidden;
  padding-top: 64px;
`;

export const BoxDescription = styled.div`
  border-top: 1px solid ${theme.colors.gray};
  padding-block: 40px;

  & > h6 {
    max-width: 290px;
  }

  a {
    color: ${theme.colors.white};
    text-decoration: underline;
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

export const BoxSocial = styled.div`
  position: relative;
`;

export const BoxIcons = styled.div`
  bottom: 50%;
  left: 40px;
  position: absolute;
  transform: translateY(50%);

  & > img {
    margin-right: 8px;
    margin-top: 16px;
  }
`;

export const Container = styled(ContainerGrid)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
