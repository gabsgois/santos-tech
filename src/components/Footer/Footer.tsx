import Link from 'next/link';
import React from 'react';
import { Id360, Trisul } from '../../assets/footer';
import { Container } from '../Grid';
import Text from '../Text';
import { BoxDescription, Content, Section } from './styles';

const Footer: React.FC = () => {
  return (
    <Section>
      <Content>
        <header>
          <img src={Trisul} alt="" />
        </header>

        <Text variant="big">
          Se há algo que nos dá muito orgulho, é a forma como
          nossos empreendimentos são concebidos.
          <br /> Desde a escolha do terreno até a entrega das
          chaves, sabemos o quanto cada detalhe faz a diferença
          no momento.
          <br /> Da escolha de um imóvel.
          <br /> A arquitetura, o estilo único, o endereço
          privilegiado.
          <br /> E, claro, a solidez da Trisul.
          <br /> Nossos projetos estimulam ainda a convivência
          entre as pessoas e incentivam hábitos mais conscientes
          e sustentáveis.
          <br /> Porque acreditamos que precisamos de cidades
          mais acolhedoras, com mais qualidade de vida, para
          anossa geração.
          <br /> E para as futuras. Agora, o compromisso da
          Trisul com São Paulo vai além. Um novo ícone será
          entregue para a cidade.
          <br />
          Nossa medida de sucesso é a continuidade do sorriso dos
          nossos clientes.
          <br /> Que se inicia na primeira visita ao
          empreendimento e não tem data para acabar.
        </Text>

        {/* <BoxRealization>
          <BoxImages>
            <img src={omaguasDark} alt="" />
          </BoxImages>

          <Middle>
            <Text variant="legend">Realização:</Text>

            <BoxImages>
              <img src={hireCapitalRealization} alt="" />
              <img src={trisul} alt="" />
            </BoxImages>
          </Middle>

          <Right>
            <Text variant="legend">Estruturadores:</Text>

            <BoxImages>
              <img src={mamute} alt="" />
              <img src={pedra} alt="" />
            </BoxImages>
          </Right>
        </BoxRealization> */}
      </Content>

      <BoxDescription>
        <Container>
          <Text as="h6" variant="legend">
            BREVE LANÇAMENTO: TRISUL 35 EMPREENDIMENTOS
            IMOBILIÁRIOS. INFORMAÇÕES PRELIMINARES SUJEITAS A
            ALTERAÇÕES. O EMPREENDIMENTO SOMENTE PODERÁ SER
            COMERCIALIZADO APÓS O REGISTRO DE MEMORIAL DE
            INCORPORAÇÃO NO CARTÓRIO DE REGISTRO DE IMÓVEIS.
            FUTURA INTERMEDIAÇÃO: TRISUL VENDAS CONSULTORIA DE
            IMÓVEIS LTDA. CRECI J20186 –ALAMEDA DOS JAÚNAS, 70
            –MOEMA –SÃO PAULO –SP –CEP: 04522-020 –TEL.: (11)
            3147-0001. * 1 VAGA DE GARAGEM LIMITADA ÀS UNIDADES
            DE 3 DORMITÓRIOS CONFORME MEMORIAL DESCRITIVO.
            VARANDA GOURMET REFERENTE A PONTO PARA
            GRILL**REFERENTE A UNIDADE DO 1º ANDAR NO FINAL 14.
          </Text>

          <Link href="https://id360.com.br/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src={Id360} alt="ID360 New Media" />
            </a>
          </Link>
        </Container>
      </BoxDescription>
    </Section>
  );
};

export default Footer;
