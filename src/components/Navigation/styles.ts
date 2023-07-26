import styled, { css } from 'styled-components';
import theme from '../../theme';

interface ActionProps {
  isOpen: boolean;
}

interface ButtonNavProps {
  isContact: boolean;
}

export const BoxContainer = styled.div`
  padding: 30px 0 16px;
  position: relative;
  width: 100%;
  z-index: 1;

  & > div {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 16px 20px 40px;
  }
`;

export const BoxBrand = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    & > img {
      max-width: 204px;
    }
  }
`;

export const ButtonMobile = styled.button<ActionProps>`
  align-items: center;
  background-color: transparent;
  color: ${theme.colors.white};
  display: flex;
  gap: 8px;
  margin-top: 16px;

  & > div {
    position: relative;
    height: 10px;
    width: 28px;

    span {
      display: block;
      background-color: ${theme.colors.white};
      height: 2px;
      position: absolute;
      width: 28px;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        bottom: 0;
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      color: ${theme.colors.green.dark[1]};
      margin-top: -5px;

      div {
        height: 20px;

        span {
          background-color: ${theme.colors.green.dark};

          &:nth-child(1) {
            top: 50%;
            transform: translate(-50%);
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            top: 50%;
            transform: translate(-50%);
            transform: rotate(-45deg);
          }
        }
      }
    `}
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const ButtonNav = styled.button<ButtonNavProps>`
  background-color: transparent;
  color: ${theme.colors.white};
  position: relative;
  ${theme.typography.bodyNav}

  &::before, &::after {
    background-color: ${theme.colors.white};
    content: '';
    height: 1px;
    opacity: 0;
    position: absolute;
    transition: 0.2s ease-in-out;
    width: 0;
  }

  &::before {
    left: 0;
    top: -4px;
  }

  &::after {
    bottom: -4px;
    right: 0;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    color: ${theme.colors.green.dark};
    text-align: right;

    &::before,
    &::after {
      display: none;
    }
  }

  ${({ isContact }) =>
    isContact &&
    css`
      align-items: center;
      border: 1px solid ${theme.colors.white};
      border-radius: 50px;
      color: ${theme.colors.white};
      padding: 12px 30px;
      display: flex;
      gap: 8px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        background-color: ${theme.colors.white};
        font-weight: 600;
        padding: 14px 30px;
        text-transform: uppercase;

        &::before,
        &::after {
          display: none;
        }
      }
    `}
`;

export const Aside = styled.div<ActionProps>`
  background-color: ${theme.colors.white};
  height: 100vh;
  padding: 16px 20px;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100vw')};
  transition: 0.5s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 10;

  & > header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 68px;
  }
`;
