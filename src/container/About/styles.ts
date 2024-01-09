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

export const Card = styled.div`
  background-color: ${theme.colors.green.main};
  border-radius: 25px;
  box-shadow: 5px 5px 7px 0px rgba(27, 43, 30, 0.25),
    1px 1px 2px 0px rgba(36, 49, 38, 0.25),
    -2px -2px 2px 0px rgba(69, 89, 73, 0.5),
    -6px -6px 6px 0px rgba(46, 81, 54, 0.25);
  color: ${theme.colors.gray.light};
  height: 470px;
  width: 570px;
`;

export const BoxNumber = styled.div`
  align-items: center;
  background-color: ${theme.colors.green.dark};
  border-radius: 10px;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-bottom: 24px;
  width: 50px;
`;

export const BoxContent = styled.div`
  display: flex;
`;

export const BoxLeft = styled.div`
  align-items: center;
  background: linear-gradient(
    295deg,
    #89ff8e 6.83%,
    rgba(137, 254, 142, 0) 102.87%
  );
  border-radius: 0px 80px 80px 0px;
  display: flex;
  height: 140px;
  justify-content: center;
  width: 170px;
`;

export const BoxMiddle = styled.div`
  width: 226px;
  height: 140px;
  border-radius: 80px;
  background: linear-gradient(
    295deg,
    #89ff8e 6.83%,
    rgba(137, 254, 142, 0) 102.87%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxRight = styled.div`
  width: 170px;
  height: 140px;
  border-radius: 80px 0px 0px 80px;
  background: linear-gradient(
    295deg,
    #89ff8e 6.83%,
    rgba(137, 254, 142, 0) 102.87%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
