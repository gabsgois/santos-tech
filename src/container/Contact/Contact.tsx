import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Text } from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import theme from '../../theme/theme';
import {
  BoxContact,
  BoxForm,
  BoxInfos,
  BoxLocalization,
  BoxWhats,
  Container,
  Section,
} from './styles';

const Contact: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Section data-header="contact">
      <Container>
        <Text variant="spanSmall" color={theme.colors.cream}>
          CONTATO
        </Text>
        <Text
          variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
          color={theme.colors.cream}
          mb={16}
        >
          Entre em contato
        </Text>

        <BoxContact>
          <BoxForm>
            <ContactForm />
          </BoxForm>

          <BoxInfos>
            <BoxWhats>
              <Text
                variant="h3Desktop"
                color={theme.colors.cream}
              >
                WhatsApp
              </Text>

              <Text
                variant="body"
                color={theme.colors.cream}
                mb={16}
              >
                Caso prefira, chame nossa equipe no WhatsApp.
              </Text>

              <Link
                href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  Converse agora
                  <BsWhatsapp />
                </a>
              </Link>
            </BoxWhats>

            <BoxLocalization>
              <Text
                variant="h3Desktop"
                color={theme.colors.cream}
              >
                Localização
              </Text>

              <Text variant="body" color={theme.colors.cream}>
                Estamos localizados em Santos - SP.
              </Text>

              <Text
                variant="body"
                color={theme.colors.cream}
                mb={16}
              >
                Av. Washington Luís, 224/226, Loja 01 -
                Encruzilhada <br />
                CEP: 11050-000
              </Text>

              <Link
                href="https://maps.app.goo.gl/HiRXFhPU9PDjXruU6"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  Como chegar
                  <FaMapMarkerAlt />
                </a>
              </Link>
            </BoxLocalization>
          </BoxInfos>
        </BoxContact>
      </Container>
    </Section>
  );
};

export default Contact;
