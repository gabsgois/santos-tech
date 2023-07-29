import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.main};
  padding-block: 72px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-block: 56px;
  }
`;

export const Container = styled(ContainerGrid)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    flex-direction: column;
  }
`;

export const BoxForm = styled.div`
  max-width: 570px;
  width: 100%;
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin: 16px auto;
`;

export const BoxContact = styled.div`
  display: flex;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
  }
`;

export const BoxWhats = styled.div`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 48px;
  }

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

export const BoxLocalization = styled.div`
  max-width: 450px;

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
