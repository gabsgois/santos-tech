import React from 'react';
import { scroll } from '../../assets/hero';
import { Button, Text } from '../../components';
import theme from '../../theme/theme';
import { Container, ContainerHero } from './styles';

const Hero: React.FC = () => {
  return (
    <ContainerHero>
      <Container>
        <Text>SANTOS TECH</Text>
        <Text
          as="h1"
          variant="h1Desktop"
          color={theme.colors.white}
        >
          A segurança e conforto do seu patrimônio agora tem nome
        </Text>

        <Button color="transparent" size={'medium'}>
          Conheça nossas soluções
        </Button>
        <img src={scroll} alt="" />
      </Container>
    </ContainerHero>
  );
};

export default Hero;
