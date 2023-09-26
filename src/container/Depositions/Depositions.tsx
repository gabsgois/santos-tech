import React from 'react';
import { icon, image1 } from '../../assets/depositions';
import { Text } from '../../components';
import theme from '../../theme';
import {
  BoxBox,
  BoxCard,
  BoxClients,
  BoxImage,
  BoxText,
  Container,
  Section,
} from './styles';

const Depositions: React.FC = () => {
  return (
    <Section>
      <Container>
        <Text variant="spanSmall">Depoimentos</Text>
        <Text
          variant="h2Desktop"
          color={theme.colors.green.dark}
          mb={48}
        >
          O que os nossos clientes falam sobre nós
        </Text>

        <BoxClients>
          <BoxCard>
            <BoxBox>
              <BoxImage>
                <img src={image1} alt="cliente" />
                <img src={icon} alt="aspas" />
              </BoxImage>

              <BoxText>
                <Text mb={16} color={theme.colors.green.dark}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                  ullamco.
                </Text>

                <Text
                  mb={2}
                  variant="h5Desktop"
                  color={theme.colors.green.dark}
                >
                  Pedro Calisto
                </Text>
                <Text color={theme.colors.green.dark}>
                  Razer Brasil
                </Text>
              </BoxText>
            </BoxBox>
          </BoxCard>
          <BoxCard>
            <BoxBox>
              <BoxImage>
                <img src={image1} alt="cliente" />
                <img src={icon} alt="aspas" />
              </BoxImage>

              <BoxText>
                <Text mb={16} color={theme.colors.green.dark}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                  ullamco.
                </Text>

                <Text
                  mb={2}
                  variant="h5Desktop"
                  color={theme.colors.green.dark}
                >
                  Pedro Calisto
                </Text>
                <Text color={theme.colors.green.dark}>
                  Razer Brasil
                </Text>
              </BoxText>
            </BoxBox>
          </BoxCard>
          <BoxCard>
            <BoxBox>
              <BoxImage>
                <img src={image1} alt="cliente" />
                <img src={icon} alt="aspas" />
              </BoxImage>

              <BoxText>
                <Text mb={16} color={theme.colors.green.dark}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                  ullamco.
                </Text>

                <Text
                  mb={2}
                  variant="h5Desktop"
                  color={theme.colors.green.dark}
                >
                  Pedro Calisto
                </Text>
                <Text color={theme.colors.green.dark}>
                  Razer Brasil
                </Text>
              </BoxText>
            </BoxBox>
          </BoxCard>
        </BoxClients>
      </Container>
    </Section>
  );
};

export default Depositions;
