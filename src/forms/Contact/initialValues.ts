export type TypesInitalProps =
  | 'forma_de_contato'
  | 'Nome'
  | 'Email'
  | 'Telefone'
  | 'Mensagem';

const initialValues = {
  forma_de_contato: '',
  Nome: '',
  Email: '',
  Telefone: '',
  Mensagem:
    'Olá, gostaria de ter mais informações sobre a Santos Telecom.',
};

export default initialValues;
