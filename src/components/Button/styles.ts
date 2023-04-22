import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export interface BtnProps extends SpaceProps {
  size: 'full' | 'small' | 'medium' | 'large';
  color?: 'greenDark' | 'golden' | 'transparent';
}

const sizes = {
  full: '100%',
  small: '270px',
  medium: '290px',
  large: '370px',
};

const variant = {
  golden: css`
    background-color: ${theme.colors.golden};
    color: ${theme.colors.green.dark[1]};

    &:hover {
      background-color: ${theme.colors.green.dark[1]};
      color: ${theme.colors.golden};
    }
  `,
  greenDark: css`
    border: 1px solid ${theme.colors.green.dark[1]};
    background-color: ${theme.colors.green.dark[1]};
    color: ${theme.colors.white};
  `,
  transparent: css`
    border: 1px solid ${theme.colors.green.dark[1]};
    background-color: transparent;
    color: ${theme.colors.green.dark[1]};
  `,
};

export const Btn = styled.button<BtnProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-inline: auto;
  padding: 14px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  max-width: ${({ size }) => sizes[size]};
  width: 100%;
  ${space}

  ${theme.typography.button}

  img {
    height: 20px;
    width: 20px;
  }

  ${switchProp(prop('color', 'golden'), {
    golden: variant.golden,
    greenDark: variant.greenDark,
    transparent: variant.transparent,
  })}
`;
