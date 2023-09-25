import React from 'react';
import { Text } from '../../components';
import theme from '../../theme/theme';
import { BoxTitle, Container, Section } from './styles';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Section>
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
      </Container>
    </Section>
  );
};

export default About;
