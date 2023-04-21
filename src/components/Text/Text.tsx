import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export type TextProps = ColorProps &
  SpaceProps &
  TypographyProps & {
    variant?:
      | 'body'
      | 'big'
      | 'button'
      | 'legend'
      | 'spanBigDesktop'
      | 'spanBigMobile'
      | 'h2Desktop'
      | 'h2Mobile';
    uppercase?: boolean;
  };

const Text = styled.p<TextProps>`
  ${switchProp(prop('variant', 'body'), {
    body: theme.typography.body,
    big: theme.typography.big,
    button: theme.typography.button,
    legend: theme.typography.legend,
    spanBigDesktop: theme.typography.spanBigDesktop,
    spanBigMobile: theme.typography.spanBigMobile,
    h2Desktop: theme.typography.h2Desktop,
    h2Mobile: theme.typography.h2Mobile,
  })}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${color}
  ${space}
  ${typography}
`;

Text.displayName = 'Text';

export default Text;
