import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

type BoxProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${shadow}
  ${space}
  ${typography}
`;

Box.displayName = 'Box';

export default Box;
