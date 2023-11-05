import styled, { keyframes } from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';

export const Section = styled.section`
  background-color: ${theme.colors.cream};
  padding-block: 72px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-block: 56px;
  }
`;

export const Container = styled(ContainerGrid)``;

const keyframe = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Scroller = styled.div`
  overflow: hidden;
  position: relative;
  width: 200%;
  z-index: 1;

  & > div {
    animation: ${keyframe} 15s linear infinite;
    display: flex;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    width: fit-content;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

export const ScrollerItem = styled.div`
  align-items: center;
  display: flex;
  height: 234px;
  justify-content: center;
  padding: 32px;
  width: 234px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    height: 155px;
    width: 155px;
  }
`;
