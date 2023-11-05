import styled from 'styled-components';
import {
  Container as ContainerGrid,
  Text,
} from '../../components';
import theme from '../../theme';

export const Container = styled(ContainerGrid)`
  & > link {
    color: ${theme.colors.yellow};
  }
`;

export const TextGreen = styled(Text)`
  color: ${theme.colors.green.dark};
`;
