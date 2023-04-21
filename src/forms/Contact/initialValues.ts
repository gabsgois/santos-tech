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
    'Olá, gostaria de receber mais informações sobre o Praça Omaguás.',
  
};

export default initialValues;
