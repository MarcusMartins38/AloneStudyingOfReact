import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiLogIn } from 'react-icons/fi';

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input/input';

import { Container, Content, Background } from './styles';

import BackgroundPessoal from '../../assets/volunteers3.png';

const SignIn = () => {
  const { signIn } = useAuth();
  const [yupErrors, setYupErrors] = useState([]);
  const [authError, setAuthError] = useState();

  const handleSubmitSingIn = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'Senha no minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const authErr = await signIn({
          email: data.email,
          password: data.password,
        });

        setAuthError(authErr);
        setYupErrors('');
      } catch (err) {
        setYupErrors(err.errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <h1>Seja o héroi de alguém</h1>

        <Form onSubmit={handleSubmitSingIn}>
          <h2>Faça seu Login</h2>

          {yupErrors && yupErrors.map((error) => <p>*{error}</p>)}
          {yupErrors.length == 0 && authError && <p>*{authError}</p>}
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <button type="submit">Entrar</button>
        </Form>

        <Link to="/SignUp">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>

      <Background>
        <img src={BackgroundPessoal} alt="a" />
      </Background>
    </Container>
  );
};

export default SignIn;
