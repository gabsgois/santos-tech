import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export interface BtnProps extends SpaceProps {
  size: 'full' | 'small' | 'medium' | 'large';
  color?: 'greenDark' | 'yellow' | 'transparent';
}

const sizes = {
  full: '100%',
  small: '270px',
  medium: '290px',
  large: '370px',
};

const variant = {
  greenDark: css`
    background-color: ${theme.colors.green.dark};
    border-radius: 50px;
    border: 1px solid ${theme.colors.green.dark};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.green.dark};
    }
  `,

  yellow: css`
    background-color: ${theme.colors.yellow};
    border-radius: 50px;
    border: 1px solid ${theme.colors.yellow};
    color: ${theme.colors.green.dark};

    &:hover {
      background-color: ${theme.colors.green.dark};
      color: ${theme.colors.yellow};
    }
  `,
  transparent: css`
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.green.dark};
    }
  `,
};

export const Btn = styled.button<BtnProps>`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-inline: auto;
  max-width: ${({ size }) => sizes[size]};
  padding: 14px;
  transition: 0.2s ease-in-out;
  width: 100%;
  ${space}

  ${theme.typography.button}

  img {
    height: 20px;
    width: 20px;
  }

  ${switchProp(prop('color', 'yellow'), {
    yellow: variant.yellow,
    greenDark: variant.greenDark,
    transparent: variant.transparent,
  })}
`;
