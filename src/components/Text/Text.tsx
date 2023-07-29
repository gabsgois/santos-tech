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
      | 'bodyNav'
      | 'spanSmall'
      | 'button'
      | 'h1Desktop'
      | 'h2Desktop'
      | 'h3Desktop'
      | 'h4Desktop'
      | 'h5Desktop'
      | 'h1Mobile'
      | 'h2Mobile';
    uppercase?: boolean;
  };

const Text = styled.p<TextProps>`
  ${switchProp(prop('variant', 'body'), {
    body: theme.typography.body,
    bodyNav: theme.typography.bodyNav,
    spanSmall: theme.typography.spanSmall,
    button: theme.typography.button,
    h1Desktop: theme.typography.h1Desktop,
    h2Desktop: theme.typography.h2Desktop,
    h3Desktop: theme.typography.h3Desktop,
    h4Desktop: theme.typography.h4Desktop,
    h5Desktop: theme.typography.h5Desktop,
    h1Mobile: theme.typography.h1Mobile,
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
