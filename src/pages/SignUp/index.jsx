import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input/input';

import registerImage from '../../assets/registerImage.png';

import { Container, Content2, Content } from './styles';

const SingUp = () => {
  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().min(6, 'Senha no minimo 6 digitos'),
        phone: Yup.number()
          .required('Telefone pra contato obrigatório')
          .min(
            11,
            'minimo 11 digitos sendo (xx)XXXXX-XXXX , sem a utilização dos parenteses'
          ),
        uf: Yup.string()
          .required('UF obrigatoria')
          .min(2, '2 Caracteres no UF')
          .uppercase(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={registerImage} alt="Imagem de Calendario" />
        <div>
          <h2>Registre-se</h2>
          <p>
            E torne-se o héroi de alguem, ajudando a resolver seus problemas
            durante essas crises
          </p>

          <Link to="/">
            <FiArrowLeft /> Já tenho cadastro
          </Link>
        </div>
      </Content>

      <Content2>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Registro</h1>

          <Input name="nome" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <div>
            <Input name="phone" type="tel" placeholder="Whatsapp" />
            <Input maxLength="2" name="uf" placeholder="UF" />
          </div>
          <button type="submit">Registrar-se</button>
        </Form>
      </Content2>
    </Container>
  );
};

export default SingUp;
