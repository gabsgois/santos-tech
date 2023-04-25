import React from 'react';
import { scroll } from '../../assets/hero';
import { Button, Text } from '../../components';
import { Container, ContainerHero, TitleHero } from './styles';

const Hero: React.FC = () => {
  return (
    <ContainerHero>
      <Container>
        <Text>SANTOS TECH</Text>
        <TitleHero>
          A segurança e conforto do seu patrimônio agora tem nome
        </TitleHero>

        <Button color="transparent" size={'medium'}>
          Conheça nossas soluções
        </Button>
        <img src={scroll} alt="" />
      </Container>
    </ContainerHero>
  );
};

export default Hero;
