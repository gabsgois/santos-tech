import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { scroll } from '../../assets/hero';
import { Button, Text } from '../../components';
import { goNextSection, useWindowSize } from '../../providers';
import theme from '../../theme/theme';
import { Container, ContainerHero } from './styles';

const Hero: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (key: string) => {
    setOpenMenu(false);
    goNextSection(key);
  };

  return (
    <ContainerHero>
      <Container>
        <Text>SANTOS TECH</Text>
        <Text
          as="h1"
          variant={isDesktop ? 'h1Desktop' : 'h1Mobile'}
          color={theme.colors.white}
        >
          A segurança e conforto do seu patrimônio agora tem nome
        </Text>

        <Button
          color="transparent"
          size={isDesktop ? 'medium' : 'full'}
          onClick={() => handleClick('solutions')}
        >
          Conheça nossas soluções
          <FaChevronDown />
        </Button>

        {isDesktop && <img src={scroll} alt="imagem hero" />}
      </Container>
    </ContainerHero>
  );
};

export default Hero;
