import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.main};
  padding-block: 72px;
`;

export const Container = styled(ContainerGrid)``;

export const BoxTitle = styled.div`
  max-width: 740px;
`;
