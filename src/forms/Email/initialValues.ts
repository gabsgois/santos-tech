export type TypesInitalProps =
  | 'Nome'
  | 'Email'
  | 'Telefone'
  | 'Mensagem';

const initialValues = {
  Nome: '',
  Email: '',
  Telefone: '',
  Mensagem:
    'Olá, gostaria de ter mais informações sobre a Santos Telecom.',
  forma_de_contato: 'Email',
};

export default initialValues;
