import styled from 'styled-components';
import { bgSolutions } from '../../assets/solutions';
import theme from '../../theme/theme';
import { Container as ContainerGrid } from './../Hero/styles';

export const Section = styled.section`
  background-image: url(${bgSolutions});
  background-position-x: center;
  padding-bottom: 72px;
  padding-top: 72px;
`;

export const Container = styled(ContainerGrid)`
  color: ${theme.colors.green.dark};
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Card = styled.div`
  & > img {
    border: 10px solid ${theme.colors.white};
    border-radius: 15px;
  }

  & > h4 {
    color: ${theme.colors.white};
    margin-top: -90px;
    max-width: 250px;
    padding-left: 16px;
  }
`;
