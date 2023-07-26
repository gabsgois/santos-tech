import React, { useEffect, useState } from 'react';
import { logo } from '../../assets/navigation';
import { goNextSection, useWindowSize } from '../../providers';
import { Container } from '../Grid';
import Text from '../Text';
import {
  Aside,
  BoxBrand,
  BoxContainer,
  ButtonMobile,
  ButtonNav,
  Nav,
} from './styles';

const Navigation: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isDesktop } = useWindowSize();

  useEffect(() => {
    document.body.style.overflow = openMenu
      ? 'hidden'
      : 'visible';
  }, [openMenu]);

  const Brand = (
    <BoxBrand data-aos="fade-down" data-aos-duration="1500">
      <img src={logo} alt="Santos Tech" />
    </BoxBrand>
  );

  const dataMenu = [
    {
      key: 'solutions',
      label: 'Soluções',
    },
    {
      key: 'about',
      label: 'A Santos Tech',
    },
    {
      key: 'projects',
      label: 'Projetos',
    },
    {
      key: 'depositions',
      label: 'Depoimentos',
    },
    {
      key: 'partners',
      label: 'Parceiros',
    },
    {
      key: 'contact',
      label: 'Fale conosco',
    },
  ];

  const handleClick = (key: string) => {
    setOpenMenu(false);
    goNextSection(key);
  };

  const Navigation = (
    <Nav>
      {dataMenu.map(menu => (
        <ButtonNav
          key={menu.key}
          isContact={menu.key === 'contact'}
          onClick={() => handleClick(menu.key)}
        >
          {menu.label}

          {menu.key === 'contact'}
        </ButtonNav>
      ))}
    </Nav>
  );

  const ToggleMenu = (
    <ButtonMobile
      isOpen={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <Text variant="body">menu</Text>

      <div>
        <span />
        <span />
      </div>
    </ButtonMobile>
  );

  const Mobile = (
    <BoxContainer>
      <Container>
        {Brand}

        {ToggleMenu}

        <Aside isOpen={openMenu}>
          <header>
            <img src={logo} alt="logo Santos Tech" />

            {ToggleMenu}
          </header>

          {Navigation}
        </Aside>
      </Container>
    </BoxContainer>
  );

  const Desktop = (
    <BoxContainer>
      <Container>
        {Brand}

        {Navigation}
      </Container>
    </BoxContainer>
  );

  return isDesktop ? Desktop : Mobile;
};

export default Navigation;
