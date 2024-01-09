import React from 'react';
import { Box, Text } from '../../components';
import theme from '../../theme/theme';
import {
  BoxContent,
  BoxLeft,
  BoxMiddle,
  BoxNumber,
  BoxRight,
  BoxTitle,
  Card,
  Container,
  Section,
} from './styles';

const data = [
  {
    number: '1',
    title: 'Atuamos desde 2019',
    content:
      'Há mais de 4 anos implementamos soluções em casas, condomínios e empresas na baixada santista, São Paulo e região.',
    dataCard: {
      number1: '',
      description1: 'Confiança',
      number2: '',
      description2: 'Respeito',
      number3: '',
      description3: 'Credibilidade',
    },
  },
  {
    number: '2',
    title: 'Utilizamos tecnologia de ponta',
    content:
      'Em todos os nossos serviços você pode contar com soluções modernas e no padrão adequado para as suas demandas.',
    dataCard: {
      number1: '',
      description1: 'Controle total',
    },
  },
  {
    number: '3',
    title: 'Já entregamos mais de 100 projetos',
    content:
      'Excelência. Com as soluções Santos Telecom você tem a qualidade e agilidade que precisa..',
    dataCard: {
      number1: '20+',
      description1: 'empresas atendidas',
      number2: '500+',
      description2: 'circuitos de segurança instalados',
      number3: '50+',
      description3:
        'casas e condomínios com automação instaladas',
    },
  },
];

const About: React.FC = () => {
  return (
    <Section data-header="about">
      <Container>
        <BoxTitle>
          <Text variant="spanSmall" color={theme.colors.cream}>
            SOBRE
          </Text>

          <Text
            variant="h2Desktop"
            color={theme.colors.cream}
            mb={48}
          >
            Eficiência e profissionalismo.
            <br /> Confie na experiência da Santos Tech
          </Text>
        </BoxTitle>

        {data.map(item => (
          <Card>
            <Box padding={24}>
              <BoxNumber>
                <Text>{item.number}</Text>
              </BoxNumber>

              <Text variant="h3Desktop" mb={2}>
                {item.title}
              </Text>

              <Text variant="body" mb={57}>
                {item.content}
              </Text>
            </Box>

            <BoxContent>
              <BoxLeft>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.description1}
                </Text>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.number1}
                </Text>
              </BoxLeft>

              <BoxMiddle>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.number2}
                </Text>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.description2}
                </Text>
              </BoxMiddle>

              <BoxRight>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.number3}
                </Text>
                <Text color={theme.colors.green.main}>
                  {item.dataCard.description3}
                </Text>
              </BoxRight>
            </BoxContent>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default About;
