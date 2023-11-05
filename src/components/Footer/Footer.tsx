import Link from 'next/link';
import React from 'react';
import {
  bgFooterDesk,
  bgFooterMob,
  facebook,
  instagram,
  logoFooter,
  youtube,
} from '../../assets/footer';
import { useWindowSize } from '../../providers';
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
  const isDesktop = useWindowSize();

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
            <Link href="/privacy-policy" passHref>
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

          {isDesktop && (
            <img src={bgFooterDesk} alt="background" />
          )}
        </BoxSocial>
      </Container>

      {!isDesktop && <img src={bgFooterMob} alt="background" />}
    </Section>
  );
};

export default Footer;
