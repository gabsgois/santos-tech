import Link from 'next/link';
import React from 'react';
import {
  bgFooterDesk,
  facebook,
  instagram,
  logoFooter,
  youtube,
} from '../../assets/footer';
import theme from '../../theme/theme';
import Text from '../Text';
import {
  BoxDescription,
  BoxIcons,
  BoxSocial,
  Container,
  Section,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Section>
      <Container>
        <BoxDescription>
          <img src={logoFooter} alt="logo" />
          <Text
            as="h6"
            variant="body"
            color={theme.colors.gray.light}
          >
            ©2023. Todos os direitos reservados.
            <Link href="/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <br />
                Política de Privacidade.
              </a>
            </Link>
          </Text>
        </BoxDescription>

        <BoxSocial>
          <BoxIcons>
            <Text variant="body" color={theme.colors.gray.light}>
              Nas redes sociais
            </Text>
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
          </BoxIcons>

          <img src={bgFooterDesk} alt="" />
        </BoxSocial>
      </Container>
    </Section>
  );
};

export default Footer;
