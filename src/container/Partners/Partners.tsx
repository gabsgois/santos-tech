import React from 'react';
import 'swiper/css';
import {
  interbras,
  panasonic,
  ppa,
  siemens,
  ubiquiti,
} from '../../assets/partners';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme/theme';
import {
  Container,
  Scroller,
  ScrollerItem,
  Section,
} from './styles';

const Partners: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const listPartners = [
    interbras,
    panasonic,
    ppa,
    siemens,
    ubiquiti,
  ];

  return (
    <Section data-header="partners">
      <Container>
        <Text
          variant="spanSmall"
          color={theme.colors.green.dark}
          uppercase
        >
          parceiros
        </Text>
        <Text
          variant="h2Desktop"
          color={theme.colors.green.dark}
          mb={42}
        >
          Empresas que trabalhamos em colaboração
        </Text>
      </Container>

      <Scroller>
        <div>
          {listPartners.map(partner => (
            <ScrollerItem key={partner.key}>
              <img src={partner} alt={partner.key} />
            </ScrollerItem>
          ))}

          {listPartners.map(partner => (
            <ScrollerItem key={partner.key}>
              <img src={partner} alt={partner.key} />
            </ScrollerItem>
          ))}
        </div>
      </Scroller>
    </Section>
  );
};

export default Partners;
