import styled from 'styled-components';
import { bgOrange } from '../../assets/about';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.main};
  padding-block: 72px;
`;

export const Container = styled(ContainerGrid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export const BoxTitle = styled.div`
  max-width: 740px;
  grid-area: 1 / 1 / 2 / 3;
`;

export const Card = styled.div<{ isThird?: boolean }>`
  // Adiciona uma prop condicional
  background-color: ${theme.colors.green.main};
  border-radius: 25px;
  box-shadow: 5px 5px 7px 0px rgba(27, 43, 30, 0.25),
    1px 1px 2px 0px rgba(36, 49, 38, 0.25),
    -2px -2px 2px 0px rgba(69, 89, 73, 0.5),
    -6px -6px 6px 0px rgba(46, 81, 54, 0.25);
  color: ${theme.colors.gray.light};
  height: 470px;
  width: ${({ isThird }) =>
    isThird
      ? '1170px'
      : '570px'}; // Define a largura com base no index
  grid-column: ${({ isThird }) =>
    isThird
      ? '1 / span 2'
      : 'auto'}; // Ocupa duas colunas no grid se for o terceiro

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    width: 335px; // Largura fixa para telas menores
    margin: 0 auto; // Centraliza os cards
  }
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

export const BoxContentOne = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: 2 / 1 / 3 / 2;
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

export const BoxContentTwo = styled.div`
  /* display: flex; */
  grid-area: 2 / 2 / 3 / 3;
  position: relative;
`;

export const BoxOrange = styled.div`
  width: 194px;
  height: 191px;
  flex-shrink: 0;
  border-radius: 15px 15px 0px 0px;
  padding: 60px 30px;
  background: linear-gradient(
    125deg,
    #f66646 0%,
    rgba(246, 180, 70, 0) 103.58%
  );
  background-position: bottom;
  margin-inline: 150px;
  margin-bottom: -80px;
  /* background-image: url(${bgOrange});
  position: absolute; */
`;

export const BoxContentThree = styled.div`
  display: flex;
  grid-area: 3 / 1 / 4 / 3;
  width: 1170px;
  justify-content: space-between;
  gap: 8px;
`;

export const BoxBlueMain = styled.div`
  display: grid;
  gap: 8px;
  margin-top: -122px;
  margin-right: 100px;
`;

export const BoxBoxBlueOne = styled.div`
  width: 570px;
  height: 139px;
  flex-shrink: 0;
  border-radius: 0px 0px 25px 25px;
  background: linear-gradient(
    93deg,
    #2ec6f5 -0.99%,
    rgba(47, 246, 222, 0.3) 101.33%
  );
`;

export const BoxBoxBlueTwo = styled.div`
  width: 570px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 25px;
  background: linear-gradient(
    93deg,
    #2ec6f5 -0.99%,
    rgba(47, 246, 222, 0.3) 101.33%
  );
`;

export const BoxBoxBlueThree = styled.div`
  width: 570px;
  height: 139px;
  flex-shrink: 0;
  border-radius: 25px 25px 0px 0px;
  background: linear-gradient(
    93deg,
    #2ec6f5 -0.99%,
    rgba(47, 246, 222, 0.3) 101.33%
  );
`;
