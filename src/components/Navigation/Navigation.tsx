import React, { useEffect, useState } from 'react';
import {
  iconBlack,
  iconGolden,
  logo,
  logoAside,
} from '../../assets/header';
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
      <img src={logo} alt="Praça Omaguás Pinheiros" />
    </BoxBrand>
  );

  const dataMenu = [
    {
      key: 'recreation',
      label: 'Lazer',
    },
    {
      key: 'project',
      label: 'Projeto',
    },
    {
      key: 'video',
      label: 'Vídeo',
    },
    {
      key: 'virtual-tour',
      label: 'Tour Virtual',
    },
    {
      key: 'plans',
      label: 'Plantas',
    },
    {
      key: 'localization',
      label: 'Localização',
    },
    {
      key: 'contact',
      label: 'Contato',
    },
  ];

  const handleClick = (key: string) => {
    setOpenMenu(false);
    goNextSection(key);
  };

  const Navigation = (
    <Nav data-aos="fade-down" data-aos-duration="1500">
      {dataMenu.map(menu => (
        <ButtonNav
          key={menu.key}
          isContact={menu.key === 'contact'}
          onClick={() => handleClick(menu.key)}
        >
          {menu.label}

          {menu.key === 'contact' && (
            <img
              src={isDesktop ? iconGolden : iconBlack}
              alt=""
            />
          )}
        </ButtonNav>
      ))}
    </Nav>
  );

  const ToggleMenu = (
    <ButtonMobile
      isOpen={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <Text variant="legend">menu</Text>

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
            <img src={logoAside} alt="Praça Omaguás Pinheiros" />

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
