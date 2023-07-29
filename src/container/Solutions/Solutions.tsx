import React from 'react';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from '../../assets/solutions';
import { Container, Text } from '../../components';
import { Btn } from '../../components/Button/styles';
import theme from '../../theme/theme';
import { BoxCards, Card, Section } from './styles';

const data = [
  {
    img: image1,
    description: 'Instalação de câmeras',
  },
  {
    img: image2,
    description: 'Interfones',
  },
  {
    img: image3,
    description: 'Acesso através de reconhecimento facial',
  },
  {
    img: image4,
    description: 'Automação de portas e portões',
  },
  {
    img: image5,
    description: 'instalação de alarmes de incêndio',
  },
  {
    img: image6,
    description: 'Automação residencial',
  },
  {
    img: image7,
    description: 'Instalação de painéis solares',
  },
  {
    img: image8,
    description: 'Carregadores veiculares',
  },
];

const Solutions: React.FC = () => {
  return (
    <Section>
      <Container>
        <Text variant="spanSmall">Soluções</Text>
        <Text
          variant="h2Desktop"
          color={theme.colors.green.dark}
          mb={48}
        >
          Protegemos e facilitamos o que importa
        </Text>

        <BoxCards>
          {data.map(item => (
            <Card>
              <img src={item.img} alt="" />
              <Text as="h4" variant="h4Desktop">
                {item.description}
              </Text>
            </Card>
          ))}
        </BoxCards>

        <Btn mt={48} size="medium" color="greenDark">
          Solicite um orçamento
        </Btn>
      </Container>
    </Section>
  );
};

export default Solutions;
