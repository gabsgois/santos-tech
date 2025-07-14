import * as yup from 'yup';

export const validationSchema = yup.object({
  contactMethod: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  phone: yup
    .string()
    .required('Campo obrigatório')
    .test('phone', 'Telefone inválido', value => {
      return value ? value.length === 15 : false;
    }),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
});
