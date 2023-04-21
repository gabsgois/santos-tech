import React from 'react';
import { Container, ContainerHero, TitleHero } from './styles';

const Hero: React.FC = () => {
  return (
    <ContainerHero>
      <Container>
        <TitleHero
        >
          Atual, Autoral e Autêntico.
        </TitleHero>
      </Container>
    </ContainerHero>
  );
};

export default Hero;
