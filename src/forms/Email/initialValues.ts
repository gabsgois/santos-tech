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
    'Olá, gostaria de receber mais informações sobre o Praça Omaguás.',
  forma_de_contato: 'Email',
};

export default initialValues;
