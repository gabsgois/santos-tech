import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { PulseLoader } from 'react-spinners';
import {
  Box,
  Button,
  Select,
  Text,
  TextField,
  Textarea,
  ValidationProps,
} from '../../components';
import { config, getUser } from '../../providers';
import sendEvents from '../../providers/mutate/sendEvent';
import theme from '../../theme';
import initialValues, {
  TypesInitalProps,
} from './initialValues';
import useValidations from './validations';

type MessageTypes = 'Email' | 'Whatsapp' | 'Chat' | 'Telefone';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onFailure, setOnFailure] = useState(false);
  const [messageType, setMessageType] = useState<MessageTypes>();

  const messages = {
    Email: (
      <>
        <Text variant="h2Mobile">Recebemos seu contato!</Text>
        <Text variant="h2Mobile">
          Aguarde nosso retorno em breve.
        </Text>
      </>
    ),
    Whatsapp: (
      <>
        <Text variant="h2Mobile">Conversa iniciada!</Text>
        <Text variant="h2Mobile">
          Uma nova janela foi aberta. Caso não a visualize,
          desative o bloqueador de popup e tente novamente.
        </Text>
      </>
    ),
    Chat: (
      <>
        <Text variant="h2Mobile">Conversa iniciada!</Text>
        <Text variant="h2Mobile">
          Uma nova janela foi aberta. Caso não a visualize,
          desative o bloqueador de popup e tente novamente.
        </Text>
      </>
    ),
    Telefone: (
      <>
        <Text variant="h2Mobile">Recebemos seu contato!</Text>
        <Text variant="h2Mobile">
          Aguarde nosso retorno em breve.
        </Text>
      </>
    ),
  };

  const onSubmit = async (values: any) => {
    setLoading(true);

    const url = ['Chat', 'Whatsapp'].includes(
      values.forma_de_contato,
    )
      ? values.forma_de_contato
      : 'mensagem';

    try {
      const response = await axios.post(
        `https://hubid360.com.br/api/${url.toLowerCase()}`,
        {
          ...values,
          ...config,
        },
      );

      ReactGA.event({
        category: 'Contato',
        action: `Sucesso ${values.forma_de_contato}`,
      });

      if (
        values.forma_de_contato === 'Chat' ||
        values.forma_de_contato === 'Whatsapp'
      ) {
        window.open(response.data.mensagem, '_blank');
      }

      setMessageType(values.forma_de_contato);

      sendEvents({
        type: 'lead',
        user_id: +getUser()!,
        lead_id: response.data.id,
      });

      setOnSuccess(true);
    } catch (error) {
      setOnFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
      >
        <PulseLoader color={theme.colors.green.dark} />
      </Box>
    );
  }

  if (onSuccess) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green.dark[1]}
        gridGap={24}
      >
        {messages[messageType as MessageTypes]}

        <button onClick={() => setOnSuccess(false)}>
          VOLTAR
        </button>
      </Box>
    );
  }

  if (onFailure) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green.dark[1]}
        gridGap={24}
      >
        <Text variant="h2Mobile">
          Ops... não foi possível enviar seu contato!
        </Text>
        <Text variant="h2Mobile">
          Por favor, tente novamente.
        </Text>

        <button onClick={() => setOnFailure(false)}>
          TENTAR NOVAMENTE
        </button>
      </Box>
    );
  }

  const contactTypes = [
    {
      value: 'Cameras',
      label: 'Instalação de câmeras',
    },
    {
      value: 'Interfones',
      label: 'Interfones',
    },
    {
      value: 'Automacao_portas_portoes',
      label: 'Automação de portas e portões',
    },
    {
      value: 'Acesso_facial',
      label: 'Acesso por reconhecimento facial',
    },
    {
      value: 'Alarmes_incendio',
      label: 'Instalação de alarmes de incêndio',
    },
    {
      value: 'Automaao_resdencial',
      label: 'Automação residencial',
    },
    {
      value: 'paineis_solares',
      label: 'Instalação de painéis solares',
    },
    {
      value: 'Carregadores_veiculares',
      label: 'Carregadores veiculares',
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={useValidations()}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => {
        const getStatus = (name: TypesInitalProps) => {
          return {
            isValid: !errors[name] && touched[name],
            isError: errors[name] && touched[name],
          } as ValidationProps;
        };

        return (
          <Form>
            <>
              <Select
                name="forma_de_contato"
                label="Qual dos nosos serviços te interessou?"
                options={contactTypes}
              />

              <TextField
                name="Nome"
                label="Qual o seu nome?"
                status={() => getStatus('Nome')}
              />

              <TextField
                name="Email"
                label="Poderia nos informar um e-mail?"
                status={() => getStatus('Email')}
              />

              <TextField
                name="Telefone"
                label="E um telefone para contato?"
                mask="(99) 99999-9999"
                status={() => getStatus('Telefone')}
              />

              <Textarea
                name="Mensagem"
                label="Mensagem"
                status={() => getStatus('Mensagem')}
              />

              <Button
                size="full"
                color="yellow"
                disabled={isSubmitting}
              >
                Solicitar contato
              </Button>
            </>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Contact;
